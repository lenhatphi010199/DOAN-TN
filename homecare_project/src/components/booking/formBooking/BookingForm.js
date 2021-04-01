import React, { useEffect, useState } from "react";
import {
  Bookingform,
  Form,
  FormLabel,
  FormInput,
  DivHT,
  DivCity,
  DivSelect,
  DivDistrict,
  SelectCT,
  FormButton,
  DivBooking,
  FormLabelNone,
  TextArea,
  Option,
  DivUi,
} from "../formBooking/ImpFormBooking.js";
import axios from "axios";
import { ServiceData } from "./ServiceData";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import AuthService from "../../../servicesApi/auth.services";

const BookingForm = () => {
  const [data, setData] = useState({
    nameInput: "",
    phoneInput: "",
    emailInput: "",
    province: [],
    district: [],
    addressInput: "",
    productType: [],
    productBrand: [],
    productBrandSelected: "",
    serviceSelected: "",
    productTypeSelected: "",
    dateSetInput: "",
    descriptionProduct: "",
    provinceSelected: "",
    districtSelected: "",
  });
  const history = useHistory();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const resultProvince = axios("https://thongtindoanhnghiep.co/api/city");
        const resultProductType = axios("http://localhost:8080/api/v1/product");
        const resultProductBrand = axios("http://localhost:8080/api/v1/brand");
        const [
          dataProvince,
          dataProductType,
          dataProductBrand,
        ] = await Promise.all([
          resultProvince,
          resultProductType,
          resultProductBrand,
        ]);
        setData({
          ...data,
          province: dataProvince.data.LtsItem,
          productType: dataProductType.data.data,
          productBrand: dataProductBrand.data.data,
        });
      };
      fetchData();
    } catch (err) {
      console.log({ err });
    }
  }, []);

  const handleChangeProvince = async (event) => {
    try {
      const provinceId = event.target.value;
      setData({ ...data, district: [], provinceSelected: provinceId });
      const result = await axios(
        `https://thongtindoanhnghiep.co/api/city/${provinceId}/district`
      );
      console.log({ data });
      setData({
        ...data,
        district: result.data,
        provinceSelected: event.target.value,
      });
    } catch (err) {
      console.log({ err });
    }
  };

  const handleChange = (key) => (event) => {
    setData({ ...data, [key]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      address: data.addressInput,
      brand: data.productBrandSelected,
      date: data.dateSetInput,
      description: data.descriptionProduct,
      district: data.districtSelected,
      email: data.emailInput,
      fullname: data.nameInput,
      phone: data.phoneInput,
      product: data.productTypeSelected,
      province: data.provinceSelected,
      service: data.serviceSelected,
    };
    try {
      const user = AuthService.getCurrentUser();
      if (user == null) {
        swal({
          title: "Bạn chưa đăng nhập!",
          icon: "warning",
          buttons: {
            confirm: {},
          },
          dangerMode: true,
        });
      } else {
        await swal({
          title: "Bạn có chắc không?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            axios
              .post("http://localhost:8080/api/v1/add/booking", bookingData)
              .then((res) => {
                console.log(res.data);
              })
              .catch((error) => {
                console.log({ error });
              });
            swal("Đặt lịch thành công!", {
              icon: "success",
            }).then(history.push("/"));
          } else {
            swal("Đặt lịch thất bại!", { icon: "error" });
          }
        });
      }
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <>
      <Bookingform>
        <Form onSubmit={onSubmit}>
          <DivHT>
            <FormLabel>Họ và tên </FormLabel>
            <FormInput
              type="text"
              name="fullname"
              size="60"
              maxlength="128"
              value={data.nameInput}
              onChange={handleChange("nameInput")}
              required
            ></FormInput>
          </DivHT>
          <DivHT>
            <FormLabel>Số điện thoại</FormLabel>
            <FormInput
              type="tel"
              id="tel"
              name="tel"
              maxLength="12"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={data.phoneInput}
              onChange={handleChange("phoneInput")}
              required
            ></FormInput>
          </DivHT>
          <DivHT>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={data.emailInput}
              onChange={handleChange("emailInput")}
            ></FormInput>
          </DivHT>
          <DivHT>
            <DivSelect>
              <DivCity>
                <FormLabel>Tỉnh/Thành phố</FormLabel>
                <SelectCT
                  value={data.provinceSelected}
                  onChange={handleChangeProvince}
                  required
                >
                  <Option value="">Chọn tỉnh/thành phố</Option>
                  {data.province.map((item) => (
                    <Option key={item.ID} value={item.ID}>
                      {item.Title}
                    </Option>
                  ))}
                </SelectCT>
              </DivCity>
              <DivDistrict>
                <FormLabel>Quận/Huyện</FormLabel>
                <SelectCT
                  onChange={handleChange("districtSelected")}
                  value={data.districtSelected}
                  required
                >
                  <Option value="">Chọn huyện</Option>
                  {data.district.map((item) => (
                    <Option key={item.ID}>{item.Title}</Option>
                  ))}
                </SelectCT>
              </DivDistrict>
            </DivSelect>
          </DivHT>
          <DivHT>
            <FormLabel>Địa chỉ</FormLabel>
            <FormInput
              type="text"
              name="text"
              size="60"
              maxlength="256"
              value={data.addressInput}
              onChange={handleChange("addressInput")}
              required
            ></FormInput>
          </DivHT>
          <DivHT>
            <FormLabel>Dịch vụ</FormLabel>
            <SelectCT
              value={data.serviceSelected}
              onChange={handleChange("serviceSelected")}
              required
            >
              <Option value="">Chọn dịch vụ</Option>
              {ServiceData.map((item) => (
                <Option key={item.id}>{item.title}</Option>
              ))}
              <option>Khác</option>
            </SelectCT>
          </DivHT>
          <DivHT>
            <FormLabel>Loại sản phẩm</FormLabel>
            <SelectCT
              onChange={handleChange("productTypeSelected")}
              value={data.productTypeSelected}
              required
            >
              <Option value="">Chọn loại sản phẩm</Option>
              {data.productType.map((item) => (
                <Option key={item.id}>{item.name}</Option>
              ))}
            </SelectCT>
          </DivHT>
          <DivHT>
            <FormLabel>Hãng sản xuất</FormLabel>
            <SelectCT
              onChange={handleChange("productBrandSelected")}
              value={data.productBrandSelected}
              required
            >
              <Option value="" style={{ fontFamily: "Mulish" }}>
                Chọn hãng sản suất
              </Option>
              {data.productBrand.map((item) => (
                <Option key={item.id}>{item.name}</Option>
              ))}
            </SelectCT>
          </DivHT>
          <DivHT>
            <FormLabelNone>Mô tả sản phẩm</FormLabelNone>
            <TextArea
              value={data.descriptionProduct}
              onChange={handleChange("descriptionProduct")}
            ></TextArea>
          </DivHT>
          <DivHT>
            <FormLabel>Ngày đặt</FormLabel>
            <FormInput
              type="date"
              name="date"
              value={data.dateSetInput}
              onChange={handleChange("dateSetInput")}
              required
            ></FormInput>
          </DivHT>
          <DivHT>
            <DivBooking>
              <FormButton type="submit">Booking</FormButton>
            </DivBooking>
          </DivHT>
        </Form>
      </Bookingform>
    </>
  );
};

export default BookingForm;

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
} from "../formBooking/ImpFormBooking.js";
import axios from "axios";
import { ServiceData } from "./ServiceData";

const BookingForm = () => {
  const [data, setData] = useState({
    province: [],
    district: [],
    provinceSelected: "",
    districtSelected: "",
  });
  const [dataD, setDataD] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await axios("https://thongtindoanhnghiep.co/api/city/");
        setData({ ...data, province: result.data.LtsItem });
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
      setData({ ...data, district: result.data });
    } catch (err) {
      console.log({ err });
    }
  };

  const handleChangeDistrict = (event) => {
    setData({ ...data, districtSelected: event.target.value });
  };

  return (
    <>
      <Bookingform>
        <Form action="#">
          <DivHT>
            <FormLabel>Họ và tên </FormLabel>
            <FormInput
              type="text"
              name="fullname"
              size="60"
              maxlength="128"
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
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
              required
            ></FormInput>
          </DivHT>
          <DivHT>
            <FormLabel>Email</FormLabel>
            <FormInput type="email" id="email" name="email"></FormInput>
          </DivHT>
          <DivHT>
            <DivSelect>
              <DivCity>
                <FormLabel>Tỉnh/Thành phố</FormLabel>
                <SelectCT
                  onChange={handleChangeProvince}
                  value={data.provinceSelected}
                  required
                >
                  <option>Chọn tỉnh/thành phố</option>
                  {data.province.map((item) => (
                    <option key={item.ID} value={item.ID}>
                      {item.Title}
                    </option>
                  ))}
                </SelectCT>
              </DivCity>
              <DivDistrict>
                <FormLabel>Quận/Huyện</FormLabel>
                <SelectCT
                  onChange={handleChangeDistrict}
                  value={data.districtSelected}
                  required
                >
                  <option>Chon huyện</option>
                  {data.district.map((item) => (
                    <option key={item.ID}>{item.Title}</option>
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
              required
            ></FormInput>
          </DivHT>
          <DivHT>
            <FormLabel>Dịch vụ</FormLabel>
            <SelectCT required>
              {ServiceData.map((item) => (
                <option key={item.id}>{item.title}</option>
              ))}
              <option>Khác</option>
            </SelectCT>
          </DivHT>
          <DivHT>
            <FormLabel>Loại sản phẩm</FormLabel>
            <SelectCT required>
              <option>Khác</option>
            </SelectCT>
          </DivHT>
          <DivHT>
            <FormLabel>Ngày đặt</FormLabel>
            <FormInput type="date" name="date" required></FormInput>
          </DivHT>
          <DivHT>
            <FormLabelNone>Mô tả sản phẩm</FormLabelNone>
            {/* <textarea
              style={{
                width: "100%",
                height: "90px",
                resize: "none",
                border: "1px solid #000",
              }}
            /> */}
            <TextArea></TextArea>
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

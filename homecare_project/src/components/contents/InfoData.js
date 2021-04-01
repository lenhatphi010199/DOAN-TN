import ImageOne from "../../images/info01.jpg";
import ImageTwo from "../../images/info02.jpg";
import ImageThree from "../../images/info03.jpg";

export const InfoData = {
  id: "introduce",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Giới thiệu",
  headLine: "Homecare",
  description:
    "“Website sửa chữa thiết bị gia dụng tại nhà Homecare” được sinh ra để có thể phục vụ người dùng một cách tốt nhất, an toàn và hiệu quả với giao diện được xây dựng thân thiện, dễ sử dụng.",
  buttonLabel: "Bắt đầu",
  imgStart: false,
  img: ImageOne,
  alt: "ThongTin",
  dark: false,
  primary: true,
  darkText: true
};

export const InfoDataTwo = {
  id: "booking",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Đặt lịch",
  headLine: "Đặt lịch để được nhân viên hỗ trợ kịp thời",
  description: "Hãy đặt lịch để chúng tôi biết bạn cần khác phục những gì!  ",
  buttonLabel: "Đặt lịch",
  imgStart: false,
  img: ImageTwo,
  alt: "ThongTinCombo",
  dark: false,
  primary: true,
  darkText: true,
  link: "/booking",
};

export const InfoDataThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Đăng kí",
  headLine: "Hãy là thành viên Gia Đình HomeCare",
  description: "Đăng kí để bạn có thể đặt lịch hoặc mua cho mình những gói combo sửa chữa hợp lý ",
  buttonLabel: "Đăng Kí",
  imgStart: true,
  img: ImageThree,
  alt: "DangKi",
  dark: false,
  primary: true,
  darkText: true,
  link: "/signup",
};
export const InfoDataFor = {
  id: "services",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "DỊCH VỤ",
  headLine: "Khắc Phục Sửa Chữa Những Thiết Bị Online ",
  description: "Kich vào xem thêm, bạn có thể tìm thấy những thông tin cần thiết giúp khắc phục những lỗi cơ bản về thiết bị gia dụng tại nhà của bạn!  ",
  buttonLabel: "Xem thêm",
  imgStart: true,
  img: ImageTwo,
  alt: "ThongTinCombo",
  dark: false,
  primary: true,
  darkText: true,
  link: "/newservice",
};

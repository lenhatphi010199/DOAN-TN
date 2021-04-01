import React, { useState } from "react";
import Booking from "../components/booking/Booking";
import Navbar from "../components/navbars/Navbar";
import Footer from "../components/footers/Footer";
import ScrollToTop from "../components/ScrollToTop";
import GlobalStyle from "../globalStyle";
import Dropdow from "../components/navbars/slideBars/Dropdow";

function BookingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar toggle={toggle} home={false} />
      <Dropdow isOpen={isOpen} toggle={toggle} />
      <Booking />
      <Footer />
    </>
  );
}

export default BookingPage;

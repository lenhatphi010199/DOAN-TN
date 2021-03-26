import React from "react";
import imgBanner from "../../images/booking.jpg";
import {
  BookingContainer,
  BookingBanner,
  BookingContent,
  BookingImg,
  BookingWrapper,
  ContentH1,
} from "./ImpBooking.js";
import BookingForm from "./formBooking/BookingForm";

const Booking = () => {
  
  return (
    <>
      <BookingContainer>
        <BookingWrapper>
          <BookingBanner>
            <BookingImg src={imgBanner}></BookingImg>
            <BookingContent>
              <ContentH1>Booking</ContentH1>
            </BookingContent>
          </BookingBanner>
          <BookingForm />
        </BookingWrapper>
      </BookingContainer>
    </>
  );
};

export default Booking;

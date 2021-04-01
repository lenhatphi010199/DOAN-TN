import React, { useState } from "react";
import Banner from "../components/banners/Banner";
import Dropdow from "../components/navbars/slideBars/Dropdow";
import Footer from "../components/footers/Footer";
import InfoSection from "../components/contents/InfoSection";
import Navbar from "../components/navbars/Navbar";
import Combo from "../components/contents/Combo";
import {
  InfoData,
  InfoDataThree,
  InfoDataTwo,
  InfoDataFor,
} from "../components/contents/InfoData";
import { SliderData } from "../components/banners/SliderData";
import GlobalStyle from "../globalStyle";
import ScrollToTop from "../components/ScrollToTop";

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar toggle={toggle} home={true}/>
      <Dropdow isOpen={isOpen} toggle={toggle} />
      <Banner slides={SliderData} />
      <InfoSection {...InfoData} />
      <Combo />
      <InfoSection {...InfoDataFor} />
      <InfoSection {...InfoDataTwo} />
      <InfoSection {...InfoDataThree} />
      <Footer />
    </>
  );
}

export default Index;

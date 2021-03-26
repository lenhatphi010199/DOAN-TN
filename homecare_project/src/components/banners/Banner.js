import React, { useState, useRef, useEffect } from "react";
import { Button } from "../Button";
import {
  HomeSection,
  HomeWrapper,
  HomeSlide,
  HomeSlider,
  HomeImage,
  HomeContent,
  Arrow,
  SliderButton,
  PrevArrow,
  NextArrow,
} from "./ImpBanner";

const Banner = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const preSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <HomeSection>
      <HomeWrapper>
        {slides.map((slide, index) => {
          return (
            <HomeSlide key={index}>
              {index === current && (
                <HomeSlider>
                  <HomeImage src={slide.image} alt={slide.alt} />
                  <HomeContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.content}</p>
                    <Button
                      to={slide.path}
                      primary="true"
                      css={`
                        max-width: 160px;
                      `}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HomeContent>
                </HomeSlider>
              )}
            </HomeSlide>
          );
        })}
        <SliderButton>
          <PrevArrow onClick={preSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButton>
      </HomeWrapper>
    </HomeSection>
  );
};

export default Banner;

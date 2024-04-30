import React from "react";
import SwiperSlide from "./swiper-slide";
import Image from "next/image";

type HeroProps = {
  blok: any;
};

const Hero = ({ blok }: HeroProps) => {
  return (
    <section className="o-section">
      <div className="c-full-slider">
        <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
          <div className="swiper-wrapper">
            {blok.slide.map((e: any) => (
              <SwiperSlide blok={e} key={e._uid} />
            ))}
          </div>
        </div>
      </div>
      <div className="c-full-slider__bullets">
        <div className="o-container">
          <div className="c-full-slider__bullets__wrapper">
            {blok?.slide?.map((e: any, i: number) => (
              <div className="c-full-slider__bullet--container js-active" key={i}>
                <div className="c-full-slider__bullet js-active">
                  <Image src={e?.bullet_icon?.filename ?? ""} width={28} height={28} alt="bullet-icon" />
                </div>
                <span className="title"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="c-full-slider__nav">
        <div className="c-full-slider__nav--prev swiper-button-disabled" tabIndex={0} role="button" aria-label="Previous slide" aria-disabled="true">
          <svg className="u-icon">
            <use xlinkHref="#arrow-thin-icon"></use>
          </svg>
        </div>
        <div className="c-full-slider__nav--next" tabIndex={0} role="button" aria-label="Next slide" aria-disabled="false">
          <svg className="u-icon">
            <use xlinkHref="#arrow-thin-icon"></use>
          </svg>
        </div>
      </div>
      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </section>
  );
};

export default Hero;

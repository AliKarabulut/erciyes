import extractDimensionsFromUrl from "@/utils/extractDimensionsFromUrl";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

type SwiperSlideProps = {
  blok: {
    bg_image?: {
      filename?: string;
    };
    top_logo: {
      filename: string;
    };
    sub_top_logo: {
      filename: string;
    };
    sub_mid_logo: {
      filename: string;
    };
    sub_bottom_logo: {
      filename: string;
    };
    cat?: string;
    title?: string;
    description?: string;
    link?: {
      url?: string;
    };
    button_label?: string;
  };
};

const SwiperSlide = ({ blok }: SwiperSlideProps) => {
  const { width, height } = extractDimensionsFromUrl(blok?.top_logo?.filename ?? "");
  const { width: width1, height: height1 } = extractDimensionsFromUrl(blok?.sub_top_logo?.filename ?? "");
  const { width: width2, height: height2 } = extractDimensionsFromUrl(blok?.sub_mid_logo?.filename ?? "");
  const { width: width3, height: height3 } = extractDimensionsFromUrl(blok?.sub_bottom_logo?.filename ?? "");

  return (
    <div
      className="c-full-slider__item swiper-slide swiper-slide-active"
      data-lg={blok?.bg_image?.filename}
      data-mobile="/assets/img/uploads/banner/anadolu-erjiyes-mobil-banner.jpg"
      data-tablet="/assets/img/uploads/banner/anadolu-erjiyes-tablet-banner.jpg"
      data-xl={blok?.bg_image?.filename}
      href="javascript:;"
      style={{ width: "1903px", background: `url(${blok?.bg_image?.filename}) center center / cover` }}
      {...storyblokEditable(blok)}
    >
      {blok?.top_logo.filename && (
        <div className="c-animated-logo">
          <div className="main-logo-container">
            <div className="signal-container">
              <div className="signal-element"></div>
              <div className="signal-element-2"></div>
            </div>
            <div className="bottom-container">
              <div className="logo-top-wrapper">
                <Image src={blok?.top_logo.filename} width={width} height={height} id="logo-top" alt="Logo Top" />
              </div>
              <div className="bottom-wrapper">
                <div className="logo-erciyes-wrapper">
                  <Image src={blok?.sub_top_logo?.filename} width={width1} height={height1} id="logo-erciyes" alt="Logo Erciyes" />
                </div>
                <div className="logo-anadolu-wrapper">
                  <Image src={blok?.sub_mid_logo?.filename} width={width2} height={height2} id="logo-anadolu" alt="Logo Anadolu" />
                </div>
                <div className="logo-holding-wrapper">
                  <Image src={blok?.sub_bottom_logo?.filename} width={width3} height={height3} id="logo-holding" alt="Logo Holding" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="c-full-slider__content o-container">
        <div className="c-full-slider__detail">
          <div className="c-full-slider__caption">
            <div className="c-full-slider__caption-text" style={{ maxWidth: "580px" }}>
              <div className="c-full-slider__cat">{blok?.cat}</div>
              <div className="c-full-slider__title">{blok?.title}</div>
              <div className="c-full-slider__desc">{blok?.description}</div>
            </div>
            <div className="c-full-slider__actions">
              <a className="c-button c-button--border c-button--white" href={blok?.link?.url ?? "#"}>
                <span className="c-button__text">{blok?.button_label}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlide;

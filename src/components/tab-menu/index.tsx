import Icons from "@/icons";
import extractDimensionsFromUrl from "@/utils/extractDimensionsFromUrl";
import Image from "next/image";
import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

type TabMenuProps = {
  blok?: {
    tabs?: any[];
  };
};

const TabMenu = ({ blok }: TabMenuProps) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Icons />
      <div className="c-tabs">
        <div className="c-tabs__nav animate fadeInUp" data-wow-delay="300ms">
          <ul>
            {blok?.tabs?.map((e: any, index: any) => (
              <li className={index === activeTab ? "js-active" : ""} key={index}>
                <a href={`#${e?.title?.toLowerCase()}`} onClick={() => setActiveTab(index)}>
                  <svg className="u-icon">
                    <use xlinkHref={`#${e?.title?.toLowerCase()}-icon`}></use>
                  </svg>
                  <span>{e?.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="c-tabs__content animate fadeInUp" data-wow-delay="500ms">
          <div id={blok?.tabs?.[activeTab]?.title?.toLowerCase()} className="c-tabs__tab-content js-active">
            <div className="c-brands__title">
              {render(blok?.tabs?.[activeTab]?.content)}
              {blok?.tabs?.[activeTab]?.content_images && (
                <div className="c-brands__items c-col__row">
                  {blok.tabs[activeTab].content_images.map((image: any) => {
                    const { width, height } = image?.filename ? extractDimensionsFromUrl(image.filename) : { width: 0, height: 0 };
                    return (
                      <div key={image?.id} className="c-brands__item c-col c-col-4">
                        <a href="#">
                          <Image src={image?.filename} alt="İstikbal Mobilya" width={width} height={height} />
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabMenu;
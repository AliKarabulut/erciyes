import Icons from "@/icons";
import { storyblokEditable } from "@storyblok/react/rsc";
import { useState } from "react";
import TabHeader from "./tab-header";
import TabContent from "./tab-content";

type TabMenuProps = {
  blok: {
    tabs?: any[];
  };
};

const TabMenu = ({ blok }: TabMenuProps) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div {...storyblokEditable(blok)}>
      <Icons />
      <div className="c-tabs">
        <div className="c-tabs__nav animate fadeInUp" data-wow-delay="300ms">
          <ul>
            {blok?.tabs?.map((e: any, index: number) => (
              <TabHeader blok={e} key={index} />
            ))}
          </ul>
        </div>
        <div className="c-tabs__content animate fadeInUp" data-wow-delay="500ms">
          {blok?.tabs?.map((e: any, index: number) => (
            <TabContent blok={e} key={index + 1000} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenu;

{
  /* <div id={blok?.tabs?.[activeTab]?.title?.toLowerCase()} className="c-tabs__tab-content js-active">
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
          </div> */
}

import extractDimensionsFromUrl from "@/utils/extractDimensionsFromUrl";
import { storyblokEditable } from "@storyblok/react/rsc";
import clsx from "clsx";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

type TabContentProps = {
  blok: {
    title: string;
    active: boolean;
    content: any[];
    content_images: any[];
  };
};

const TabContent = ({ blok }: TabContentProps) => {
  return (
    <div
      id={blok?.title?.toLowerCase()}
      className={clsx("c-tabs__tab-content", { "js-active": blok.active })}
      style={blok.active ? {} : { display: "none" }}
      {...storyblokEditable(blok)}
    >
      <div className="c-brands__title">
        {render(blok?.content)}
        {blok?.content_images && (
          <div className="c-brands__items c-col__row">
            {blok.content_images.map((image: any) => {
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
  );
};

export default TabContent;

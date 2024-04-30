import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react/rsc";

type ContentSectionProps = {
  blok: {
    bg_border: boolean;
    content: any[];
  };
};

const ContentSection = ({ blok }: ContentSectionProps) => {
  return (
    <div className="o-container o-container--page u-relative" {...storyblokEditable(blok)}>
      {blok?.bg_border && (
        <div className="c-bg-border">
          <div className="o-container">
            <div className="c-col__row">
              <div className="c-col-4 c-col"></div>
              <div className="c-col-4 c-col"></div>
              <div className="c-col-4 c-col"></div>
              <div className="c-col-4 c-col"></div>
            </div>
          </div>
        </div>
      )}
      <div className="o-container__wrapper">
        <div className="page-content">{render(blok?.content)}</div>
      </div>
    </div>
  );
};

export default ContentSection;

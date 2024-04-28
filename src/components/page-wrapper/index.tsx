import { StoryblokComponent } from "@storyblok/react/rsc";
import React from "react";
import BgBorder from "../bg-border";

const PageWrapper = ({ blok }: any) => {
  console.log(blok);
  return (
    <div className="o-container o-container--page u-relative">
      {blok.bgBorder && <BgBorder />}
      <div className="o-container__wrapper">
        <div className="c-sector-detail">
          {blok.components.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;

import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import React from "react";
import BgBorder from "../bg-border";
import SectionHeader from "../section-header";
import Link from "next/link";

type SectionContainerProps = {
  blok: {
    section_header?: string;
    section_title?: string;
    section_description?: string;
    full_width_title?: boolean;
    components?: any[];
    section_subdescription?: string;
    button_label?: string;
    link?: string;
    bg_border?: boolean;
  };
};

const SectionContainer = ({ blok }: SectionContainerProps) => {
  return (
    <div className="c-know-us c-brands u-relative" {...storyblokEditable(blok)}>
      {blok?.bg_border && <BgBorder />}
      <div className="c-know-us__wrapper">
        <div className="o-container">
          <SectionHeader
            full_width_title={blok?.full_width_title}
            section_title={blok?.section_title}
            section_description={blok?.section_description}
            section_header={blok?.section_header}
          />
          {blok?.components?.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
          {blok?.section_subdescription && (
            <p className="c-section-title__main--desc" style={{ textAlign: "center", width: "100%", marginBottom: "10px" }}>
              {blok.section_subdescription}
            </p>
          )}
          {blok?.button_label && (
            <div className="c-know-us__actions animate fadeInUp">
              <Link className="c-button" href={blok?.link ?? '#'}>
                {blok.button_label}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
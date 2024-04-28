import Image from "next/image";
import BgBorder from "@/components/bg-border";
import AnimatedNumericData from "./animated-numeric-data";
import SectionHeader from "../section-header";

type NumericDataSectionProps = {
  blok: {
    section_header: string;
    bgBorder?: boolean;
    section_title: string;
    section_description: string;
    button_label: string;
    section_sub_description?: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
};

const NumericDataSection: React.FC<NumericDataSectionProps> = ({ blok }) => {
  return (
    <section className="c-know-us u-relative">
      {blok.bgBorder && <BgBorder />}
      <div className="c-know-us__wrapper">
        <div className="o-container">
          <SectionHeader />
          <AnimatedNumericData {...blok} />
          {blok.section_sub_description && (
            <p className="c-section-title__main--desc" style={{ textAlign: "center", width: "100%", marginBottom: "10px" }}>
              {section_sub_description}
            </p>
          )}
          {blok.button_label && (
            <div className="c-know-us__actions animate fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
              <a className="c-button" href="/tr/kurumsal/kurumsal-degerlerimiz">
                {blok.button_label}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NumericDataSection;

import Image from "next/image";
import BgBorder from "@/components/bg-border";
import AnimatedNumericData from "./animated-numeric-data";

type NumericDataSectionProps = {
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

const NumericDataSection: React.FC<NumericDataSectionProps> = ({
  section_header,
  section_title,
  section_description,
  section_sub_description,
  button_label,
  bgBorder,
}) => {
  return (
    <section className="c-know-us u-relative" xmlns:xlink="http://www.w3.org/1999/xlink">
      {bgBorder && <BgBorder />}
      <div className="c-know-us__wrapper">
        <div className="o-container">
          {section_header ||
            section_title ||
            (section_description && (
              <div className="c-section-title">
                {section_header && (
                  <div className="c-section-title__sub-title animate fadeInDown" style={{ visibility: "visible", animationName: "fadeInDown" }}>
                    {section_header}
                  </div>
                )}
                <div className="c-section-title__main">
                  {section_title && (
                    <h1 className="c-section-title__main--title animate fadeInLeft" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                      {section_title}
                    </h1>
                  )}
                  {section_description && (
                    <p
                      className="c-section-title__main--desc animate fadeInRight"
                      data-wow-delay="300ms"
                      style={{ visibility: "visible", animationDelay: "300ms", animationName: "fadeInRight" }}
                    >
                      {section_description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          <AnimatedNumericData />
          {section_sub_description && (
            <p className="c-section-title__main--desc" style={{ textAlign: "center", width: "100%", marginBottom: "10px" }}>
              {section_sub_description}
            </p>
          )}
          {button_label && (
            <div className="c-know-us__actions animate fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
              <a className="c-button" href="/tr/kurumsal/kurumsal-degerlerimiz">
                {button_label}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NumericDataSection;

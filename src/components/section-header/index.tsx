type SectionHeaderProps = {
  section_header?: string;
  section_title?: string;
  section_description?: string;
  full_width_title?: boolean;
};

const SectionHeader = ({ section_header, section_description, section_title, full_width_title }: SectionHeaderProps) => {

  return (
    <>
      {(section_header || section_title || section_description) && (
        <div className="c-section-title">
          {section_header && (
            <div className="c-section-title__sub-title animate fadeInDown">
              {section_header}
            </div>
          )}
          <div className="c-section-title__main">
            {section_title && (
              <h1 className={`c-section-title__main--title animate fadeInLeft ${full_width_title ? 'c-section-title__main--full' : ''}`} >
                {section_title}
              </h1>
            )}
            {section_description && (
              <p
                className="c-section-title__main--desc animate fadeInRight"
                data-wow-delay="300ms"
              >
                {section_description}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionHeader;
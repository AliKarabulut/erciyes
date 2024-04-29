import { storyblokEditable } from "@storyblok/react/rsc";

type IntroProps = {
  blok: {
    title?: string;
    description?: string;
    background_image?: { filename?: string };
  };
};

const Intro = ({ blok }: IntroProps) => {
  return (
    <div className="c-sub-header c-sub-header--page" {...storyblokEditable(blok)}>
      <div
        className="c-sub-header__wrapper"
        style={{
          backgroundImage: `url(${blok?.background_image?.filename})`,
        }}
      >
        <div className="c-sub-header__content o-container">
          <div className="c-sub-header--sub-title c-sub-header--sub-img"></div>
          <div className="c-sub-header--title">
            <h1 style={{ fontSize: "inherit" }}>{blok?.title}</h1>
          </div>
          <div className="c-sub-header--desc">{blok?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
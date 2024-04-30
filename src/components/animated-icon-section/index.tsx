import { storyblokEditable } from "@storyblok/react/rsc";
import AnimatedIconBox from "./animated-icon-box";

type AnimatedIconSectionProps = {
  blok: {
    boxes: {
      delay: number;
      icon: {
        alt: string;
        filename: string;
      };
      value: string;
      description: string;
      animation_name?: string;
    }[];
  };
};

const AnimatedIconSection = ({ blok }: AnimatedIconSectionProps) => {
  return (
    <div className="c-col__row" {...storyblokEditable(blok)}>
      {blok?.boxes?.map((e, index) => (
        <AnimatedIconBox key={index} blok={e} />
      ))}
    </div>
  );
};

export default AnimatedIconSection;

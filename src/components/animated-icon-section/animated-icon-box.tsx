import extractDimensionsFromUrl from "@/utils/extractDimensionsFromUrl";
import clsx from "clsx";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

type AnimatedIconBoxProps = {
  blok: {
    delay: number;
    icon: {
      alt: string;
      filename: string;
    };
    value: string;
    description: string;
    animation_name?: string;
  };
};

const AnimatedIconBox = ({ blok }: AnimatedIconBoxProps) => {
  const { width, height } = extractDimensionsFromUrl(blok?.icon?.filename ?? "");

  return (
    <div
      className={clsx("c-col c-col-4 animate", blok?.animation_name)}
      style={{ animationDelay: `${blok?.delay ?? 0}ms`, animationName: blok?.animation_name }}
      {...storyblokEditable(blok)}
    >
      <div className="c-know-us__item">
        <div className="c-icon-box">
          <div className="c-icon-box__icon">
            <Image alt={blok?.description} src={blok?.icon?.filename} width={width} height={height} />
          </div>
          <div className="c-icon-box__title">
            <span>{blok?.value}</span>
          </div>
          <div className="c-icon-box__desc">{blok?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedIconBox;

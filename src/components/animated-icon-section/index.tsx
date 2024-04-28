import extractDimensionsFromUrl from "@/utils/extractDimensionsFromUrl";
import clsx from "clsx";
import Image from "next/image";

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
    <div className="c-col__row">
      {blok.boxes.map((e, index) => {
        const { width, height } = extractDimensionsFromUrl(e.icon.filename);
        return (
          <div
            key={index}
            className={clsx("c-col c-col-4 animate", e.animation_name)}
            style={{ animationDelay: `${e.delay}ms`, animationName: e.animation_name }}
          >
            <div className="c-know-us__item">
              <div className="c-icon-box">
                <div className="c-icon-box__icon">
                  <Image alt={e.description} src={e.icon.filename} width={width} height={height} />
                </div>
                <div className="c-icon-box__title">
                  <span>{e.value}</span>
                </div>
                <div className="c-icon-box__desc">{e.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedIconSection;

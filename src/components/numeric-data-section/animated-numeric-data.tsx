import clsx from "clsx";
import Image from "next/image";

type AnimatedNumericDataProps = {
  delay: number;
  iconSrc: string;
  title: string;
  value: string;
  description: string;
  animationName?: string;
};

const AnimatedNumericData: React.FC<AnimatedNumericDataProps> = ({ delay, iconSrc, title, value, description, animationName }) => {
  const animationDelay = `${delay}ms`;

  return (
    <div className={clsx("c-col c-col-4 animate", animationName)} style={{ animationDelay, animationName: animationName }}>
      <div className="c-know-us__item">
        <div className="c-icon-box">
          <div className="c-icon-box__icon">
            <Image alt={title} src={iconSrc} />
          </div>
          <div className="c-icon-box__title">
            <span>{value}</span>
          </div>
          <div className="c-icon-box__desc">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedNumericData;

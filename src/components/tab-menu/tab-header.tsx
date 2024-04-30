import { storyblokEditable } from "@storyblok/react/rsc";
import clsx from "clsx";

type TabHeaderProps = {
  blok: {
    title: string;
    active: boolean;
  };
};

const TabHeader = ({ blok }: TabHeaderProps) => {
  return (
    <li className={clsx("", { "js-active": blok.active })} {...storyblokEditable(blok)}>
      <a href={`#${blok?.title?.toLowerCase()}`}>
        <svg className="u-icon">
          <use xlinkHref={`#${blok?.title?.toLowerCase()}-icon`}></use>
        </svg>
        <span>{blok?.title}</span>
      </a>
    </li>
  );
};

export default TabHeader;

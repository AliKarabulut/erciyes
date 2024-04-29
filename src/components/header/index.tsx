import extractDimensionsFromUrl from "@/utils/extractDimensionsFromUrl";
import { getStoryblokApi } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";

const fetchData = async () => {
  let sbParams: { version: "draft" | "published" | undefined } = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/globals`, sbParams, { cache: "no-store" });
};

const Header = async () => {
  const {
    data: {
      story: { content },
    },
  } = await fetchData();

  const { width, height } = extractDimensionsFromUrl(content.site_logo.filename);
  return (
    <>
      <header className="o-header" role="presentation">
        <div className="o-header__top">
          <div className="o-header__logo">
            <a href="/">
              <Image className="logo" src={content.site_logo.filename} width={width} height={height} alt="site-header-logo" />
            </a>
          </div>
          <div className="o-header__nav">
            <ul className="c-nav">
              <li className="c-nav__item c-nav__item--has-submenu c-nav__item--lang">
                <Link className="c-nav__link" href="/en">
                  EN
                </Link>
              </li>
              <li className="c-nav__item">
                <div className="c-nav__item--menu-trigger">
                  <span className="title">MENÜ</span>
                  <div className="o-nav-icon js-trigger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="c-main-nav__container js-open">
        <div className="o-container">
          <div className="c-main-nav__wrapper">
            <ul className="c-main-nav">
              {content.navigation_link.map((e: any) => (
                <li key={e._uid} className="c-main-nav__item c-main-nav__item--has-submenu">
                  <a className="parent-link" href="javascript:;">
                    {e.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

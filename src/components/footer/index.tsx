import extractDimensionsFromUrl from "@/utils/extractDimensionsFromUrl";
import { getStoryblokApi } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";

const fetchData = async () => {
  let sbParams: { version: "draft" | "published" | undefined } = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/globals`, sbParams, { cache: "no-store" });
};

const Footer = async () => {
  const {
    data: {
      story: { content },
    },
  } = await fetchData();
  const { width, height } = extractDimensionsFromUrl(content.site_logo.filename);
  return (
    <section className="o-footer" role="contentinfo">
      <div className="o-container o-footer__top">
        <div className="o-footer__column o-footer__column--col-1">
          <div className="o-footer__logo">
            <a href="/">
              <Image className="logo" src={content.footer_logo.filename} width={width} height={height} alt="site-header-logo" />
            </a>
          </div>
        </div>

        {content.footer_cols.map((e) => (
          <div className="o-footer__column" key={e._uid}>
            <div className="o-footer__nav">
              <h6 className="o-footer__title js-footer-accordion">{e.title}</h6>
              <nav className="o-footer__nav__list">
                {e.links.map((e) => (
                  <Link key={e._uid} className="o-footer__nav__item" href={`/${e.link.url}`}>
                    {e.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        ))}
      </div>
      <div className="clearfix"></div>
    </section>
  );
};

export default Footer;

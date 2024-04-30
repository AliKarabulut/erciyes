/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/page";
import Intro from "../intro";
import SectionHeader from "../section-header";
import AnimatedIconSection from "../animated-icon-section";
import TabMenu from "../tab-menu";
import SectionContainer from "../section-container";
import Hero from "../hero";
import ContentSection from "../content-section";

const components = {
  animated_icon_section: AnimatedIconSection,
  page: Page,
  intro: Intro,
  section_header: SectionHeader,
  content_page: Page,
  section_container: SectionContainer,
  tab_menu_section: TabMenu,
  hero: Hero,
  content_section: ContentSection,
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "PpqIgTUciFoS5HGIqxAZrgtt",
  use: [apiPlugin],
  components,
});
export default function StoryblokProvider({ children }: { children: React.ReactNode }) {
  return children;
}

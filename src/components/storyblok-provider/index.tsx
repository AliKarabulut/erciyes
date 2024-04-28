/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/page";
import AnimatedNumericData from "../numeric-data-section/animated-numeric-data";
import Intro from "../intro";
import Blog from "../blog";

const components = {
  animated: AnimatedNumericData,
  page: Page,
  intro: Intro,
  blog: Blog,
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

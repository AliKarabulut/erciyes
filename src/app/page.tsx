import { getStoryblokApi  } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();
  return (
    <main className="main_wrapper">
      <StoryblokStory story={data.story} />
    </main>
  );
}

const fetchData = async () => {
  let sbParams: { version: "draft" | "published" | undefined } = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"});
};
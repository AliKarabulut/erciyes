import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

type PageParams = {
  params: { slug: string[] };
};

export default async function Page({ params }: PageParams) {
  const { data } = await fetchData(params.slug);
  return (
    <main>
      <StoryblokStory story={data.story} />
    </main>
  );
}

const fetchData = async (slug: string[]) => {
  let sbParams: { version: "draft" | "published" | undefined } = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, sbParams, { cache: "no-store" });
};

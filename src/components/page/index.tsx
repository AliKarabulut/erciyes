import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
const Page = ({ blok }: { blok: any }) => (
  <main {...storyblokEditable(blok)} className="main-wrapper">
    {blok.body?.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
export default Page;

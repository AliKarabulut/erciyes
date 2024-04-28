import { renderRichText } from "@storyblok/js";
,
type IntroProps = {
  blok: {
    title: string;
    description: string;
    background_image: { filename: string };
    markdown_content: string; // markdown content from Storyblok
  };
};

const Blog = ({ blok }: IntroProps) => {

 const renderedRichText(blok.text.);
  console.log(blok);
  return (
    <div>
      {render(richText)}
    </div>
  );
};

export default Blog;
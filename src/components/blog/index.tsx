import { renderRichText } from "@storyblok/js";

type IntroProps = {
  blok: {
    title: string;
    description: string;
    background_image: { filename: string };
    markdown_content: string; // markdown content from Storyblok
  };
};

const Blog = ({ blok }: IntroProps) => {
  const richText = blok.markdown_content;
  const renderedRichText = renderRichText(richText);

  return (
    <div dangerouslySetInnerHTML={{ __html: renderedRichText }} />
  );
};

export default Blog;
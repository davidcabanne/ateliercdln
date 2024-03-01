import groq from "groq";
import client from "../../client";

import Layout from "@/components/Layout";
import Section from "@/components/Section";
import Player from "@/components/Player";
import Content from "@/components/Content";
import Title from "@/components/Post/Title";
import Back from "@/components/Post/Back";

const Post = ({ post, toggleDarkMode, handleToggleDarkMode }) => {
  const { title, body, mainImage, video, categories } = post ?? {};

  const handleRenderContent = (body) => {
    const elements = body?.map((item) => {
      const { style, children, _key } = item;

      if (style === "h3") {
        const title = children?.map((title) => title.text);
        return <h3 key={_key}>{title}</h3>;
      }

      if (style === "normal") {
        const content = children?.map((paragraph) => {
          const { text, _key } = paragraph;
          return text ? <p key={_key}>{text}</p> : "";
        });
        return content;
      }
    });
    return elements;
  };

  return (
    <Layout
      toggleDarkMode={toggleDarkMode}
      handleToggleDarkMode={handleToggleDarkMode}
    >
      <Section>
        <Back toggleDarkMode={toggleDarkMode} />
        <Player src={video} title={title} />
        <Content>
          <Title>{title}</Title>
          {handleRenderContent(body)}
        </Content>
      </Section>
    </Layout>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  mainImage,
  video
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  try {
    const { slug = "" } = context.params;
    const post = await client.fetch(query, { slug });
    return {
      props: {
        post,
        revalidate: 10,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
export default Post;

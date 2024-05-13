import dynamic from "next/dynamic";

export default async function Page({ params }: { params: { slug: string } }) {
  const Content = await getMdxContent(params.slug);

  return <Content />;
}

async function getMdxContent(slug: string) {
  return dynamic(() => {
      return import(`@/_contents/projects/${slug}.mdx`);
    // TODO: some try-catch logic
    // try {
    //   return import(`@/_contents/projects/${slug}.mdx`);
    // } catch (error) {
    //   return <div>Error</div>;
    // }
  });
}

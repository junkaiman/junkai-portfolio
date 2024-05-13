import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const Content = await getMdxContent(params.slug);

  return <Content />;
}

async function getMdxContent(slug: string) {
  return dynamic(async () => {
    try {
      return await import(`@/_contents/projects/${slug}.mdx`);
    } catch (error) {
      notFound();
    }
  });
}

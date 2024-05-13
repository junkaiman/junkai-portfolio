import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const Content = dynamic(async () => {
    try {
      return await import(`@/_contents/projects/${params.slug}.mdx`);
    } catch (error) {
      notFound();
    }
  });
  return <Content />;
}

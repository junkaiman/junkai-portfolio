import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }: { params: { slug: string } }) {
  let post = (await getAllPosts()).find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header />
      <div className="p-2 max-w-5xl mx-auto md:px-8">
        <MDXRemote source={post.content} />
      </div>
      <Footer />
    </div>
  );
}

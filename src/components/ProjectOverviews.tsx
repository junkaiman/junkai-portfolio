import { getAllPosts } from "@/utils";
import ProjectCard, { IProjectCard } from "./ProjectCard";
import Link from "next/link";

export default async function ProjectOverviews() {
  let frontMatters = await getAllPosts();
  // filter posts with metadata.published
  frontMatters = frontMatters.filter((fm) => fm.metadata.published === "true");
  // order frontMatter according to metadata.date
  frontMatters = frontMatters.sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });

  let projectCardProps: IProjectCard[] = frontMatters.map((fm) => {
    return {
      title: fm.metadata.title,
      description: fm.metadata.description,
      image: fm.metadata.image,
      url: "/projects/" + fm.slug,
    };
  });

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projectCardProps.map((props, i) => (
        <ProjectCard key={i} props={props} />
      ))}
    </div>
  );
}

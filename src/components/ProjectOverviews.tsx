import frontMatters from "@/_contents/projects";
import Link from "next/link";

export default function ProjectOverviews() {
  let products = frontMatters
    .filter((fm) => fm.published === true)
    .filter((fm) => fm.type === "product")
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  let research = frontMatters
    .filter((fm) => fm.published === true)
    .filter((fm) => fm.type === "research")
    .sort((a, b) => (a.date > b.date ? -1 : 1));

//   console.log(products);
  return (
    <div>
      {products.map((fm, i) => (
        <div key={i}>
          <Link href={"/projects/"+fm.filename}>
            <h2>{fm.title}</h2>
          </Link>
          <p>{fm.description}</p>
          <p>{fm.date}</p>
        </div>
      ))}
    </div>
  );
}

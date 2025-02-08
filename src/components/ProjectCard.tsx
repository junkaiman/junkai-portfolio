import Link from "next/link";
import Image from "next/image";
import style from "./ProjectCard.module.css";
export interface IProjectCard {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ProjectCard({ props }: { props: IProjectCard }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow">
      <Link href={props.url}>
        <Image
          className="rounded-t-lg"
          src={props.image}
          alt=""
          width={640}
          height={480}
        />
      </Link>
      <div className="p-5">
        <Link href={props.url}>
          <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.title}
          </div>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          {props.description}
        </p>
      </div>
    </div>
  );
}

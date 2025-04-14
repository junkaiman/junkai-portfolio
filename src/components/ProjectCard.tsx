import Link from "next/link";
import Image from "next/image";
export interface IProjectCard {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ProjectCard({ props }: { props: IProjectCard }) {
  return (
    <div className="flex flex-col rounded-2xl bg-white shadow-sm">
      <Link href={props.url} className="overflow-hidden rounded-t-lg">
        <div className="relative aspect-[9/6] w-full">
          <Image
            className="object-cover"
            src={props.image}
            alt={props.title}
            fill
            draggable={false}
          />
        </div>
      </Link>
      <div className="p-5">
        <Link href={props.url}>
          <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.title}
          </div>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{props.description}</p>
      </div>
    </div>
  );
}

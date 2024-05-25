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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
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
        {/* <a
          href={props.url}
          className="inline-flex self-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a> */}
      </div>
    </div>
  );
}

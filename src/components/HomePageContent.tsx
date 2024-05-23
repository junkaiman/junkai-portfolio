import basic from "@/_contents/basic.json";
import Image from "next/image";
import ProjectOverviews from "./ProjectOverviews";
import ChatWithMe from "@/components/ChatWithMe";
import style from "./HomePageContent.module.css";
import WorkExperience from "./WorkExperience";
function Hello() {
  return (
    <div className="p-8 flex flex-row gap-8">
      <div className="flex flex-col basis-2/3 gap-8">
        <h1 className={style.shortIntro + " text-5xl mt-5"}>
          {basic.shortIntro}
        </h1>
        <Image
          src="https://skillicons.dev/icons?i=ts,react,redux,cpp,java,py&perline=6"
          alt="skill sets"
          width={400}
          height={50}
        ></Image>
        <div className="mt-5">
          <ChatWithMe />
        </div>
      </div>
      <div className="basis-1/3">
        <Image
          src={basic.profilePhoto}
          height={300}
          width={300}
          alt="profile photo"
        />
      </div>
    </div>
  );
}

export default function HomePageContent() {
  return (
    <div>
      <Hello />
      <WorkExperience />
    </div>
  );
}

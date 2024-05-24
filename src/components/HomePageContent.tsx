import basic from "@/_contents/basic.json";
import Image from "next/image";
import ProjectOverviews from "./ProjectOverviews";
import ChatWithMe from "@/components/ChatWithMe";
import style from "./HomePageContent.module.css";
import WorkExperience from "./WorkExperience";
import SkillSets from "./SkillSets";
function Hello() {
  return (
    <div className="flex sm:flex-row gap-8 flex-col">
      <div className="flex flex-col sm:basis-2/3 gap-4">
        <h1 className={style.shortIntro + " text-4xl text-balance lg:text-5xl mt-5"}>
          {basic.shortIntro}
        </h1>
        <div className="mt-3">
          <ChatWithMe />
        </div>
      </div>
      <div className="basis-1/3 mt-3 hidden sm:block max-w-30">
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
    <div className="p-4 space-y-12 xl:px-[8rem]">
      <Hello />
      <SkillSets />
      <WorkExperience />
    </div>
  );
}

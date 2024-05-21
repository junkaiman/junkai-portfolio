import basic from "@/_contents/basic.json";
import Image from "next/image";
import ProjectOverviews from "./ProjectOverviews";
import ChatWithMe from "@/components/ChatWithMe";
import style from "./HomePageContent.module.css";
function Hello() {
  return (
    <div className="p-8 flex flex-row gap-8">
      <div className="flex flex-col basis-2/3 gap-8">
        <h1 className={style.shortIntro + " text-5xl mt-5"}>
          {basic.shortIntro}
        </h1>
        <div className="mt-12">
          <ChatWithMe />
        </div>
      </div>
      <Image
        className="basis-1/3"
        src={basic.profilePhoto}
        height={250}
        width={250}
        alt="profile photo"
      />
    </div>
  );
}

export default function HomePageContent() {
  return (
    <div>
      <Hello />
      {/* <ChatWithMe /> */}
      {/* <ProjectOverviews /> */}
    </div>
  );
}

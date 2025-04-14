import basic from "@/_contents/basic";
import Image from "next/image";
import ProjectOverviews from "./ProjectOverviews";
import ChatWithMe from "@/components/ChatWithMe";
import style from "./HomePageContent.module.css";
import WorkExperience from "./WorkExperience";
import SkillSets from "./SkillSets";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hello() {
  return (
    <div className="flex sm:flex-row gap-8 flex-col mb-[3rem]">
      <div className="flex flex-col sm:basis-2/3 gap-6 mt-5">
        <h1 className={style.shortIntro + " text-4xl text-balance lg:text-5xl"}>
          {"Hey, I'm "} {basic.name.split(" ")[0]}{" "}
          <span className={style.wavingHand}>👋</span>
        </h1>
        <div className="text-2xl mb-3">{basic.shortIntro}</div>
        {basic.alertOn && (
          <Alert className="max-w-[95%] rounded-lg">
            <AlertDescription className=""
              dangerouslySetInnerHTML={{ __html: basic.alertMessage }}
            ></AlertDescription>
          </Alert>
        )}
        {/* <div className="mt-3">
          <ChatWithMe />
        </div> */}
      </div>
      <div className="basis-1/3 mt-3 hidden sm:block max-w-[16rem]">
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
    <div className="p-4 space-y-12 xl:px-[8rem] max-w-(--breakpoint-lg) m-auto">
      <Hello />
      <SkillSets />
      <WorkExperience />
    </div>
  );
}

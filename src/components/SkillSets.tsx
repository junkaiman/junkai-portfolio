import Image from "next/image";
import basic from "@/_contents/basic.json";

export default function SkillSets() {
  return (
    <div className="">
      <div className="font-bold text-lg mb-2">Skill Sets</div>
      <Image
        src={`https://skillicons.dev/icons?i=${basic.skillsets}&perline=6`}
        alt="skill sets"
        width={400} 
        height={50}
      ></Image>
    </div>
  );
}

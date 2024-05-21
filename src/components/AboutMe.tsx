import SelfIntro from "@/_contents/about/self-intro.mdx";
import basic from "@/_contents/basic.json";
import Image from "next/image";
import Link from "next/link";
export default function AboutMe() {
  return (
    <div className="p-5 flex flex-row space-x-20">
      <div className="text-xl space-y-4">
        <SelfIntro />
      </div>
      <div className="ml-auto">
        <Image
          src={basic.profilePhoto}
          alt="profile photo"
          width={900}
          height={900}
        />
        <Link href={basic.resumePath} className="text-gray-100 float-end">[resume]</Link>
      </div>
    </div>
  );
}

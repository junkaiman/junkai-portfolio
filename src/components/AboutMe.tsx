import SelfIntro from "@/_contents/about/self-intro.mdx";
import basic from "@/_contents/basic.json";
import Image from "next/image";
import Link from "next/link";
export default function AboutMe() {
  return (
    <div className="p-5 flex flex-col sm:flex-row sm:space-x-20">
      <div className="text-xl space-y-4">
        <SelfIntro />
      </div>
      <div className="ml-auto mt-5 max-w-[20rem] ">
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

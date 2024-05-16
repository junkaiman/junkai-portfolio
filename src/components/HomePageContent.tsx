"use client"
import basic from "@/_contents/basic.json";
import Image from "next/image";
import ProjectOverviews from "./ProjectOverviews";

function Hello() {
  return (
    <div>
      <h1>{basic.shortIntro}</h1>
      <Image 
        src={basic.profilePhoto}
        height={250}
        width={250}
        alt="profile photo"
      />
    </div>
  )
}


export default function HomePageContent() {
  return (
    <div>
      <Hello />
      {/* <ChatWithMe /> */}
      <ProjectOverviews />
    </div>
  );
}

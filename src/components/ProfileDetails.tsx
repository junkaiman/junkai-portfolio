"use client";
import profileData from "@/_contents/about/profile";
import style from "./ProfileDetails.module.css";
import Link from "next/link";

function TitleTimeDescSubBlock({
  title,
  time,
  desc,
  desc2,
  desc2Url,
}: {
  title: string;
  time: string;
  desc: string;
  desc2: string;
  desc2Url: string;
}) {
  return (
    <div className={style.experienceContainer}>
      <div className={style.experienceTitle}>{title}</div>
      <div className={style.experienceTime}>{time}</div>
      <div className={style.experienceDesc}>{desc}</div>
      {desc2 && desc2Url && (
        <Link href={desc2Url} target="_blank">
          <div className={style.experienceDesc2}>{desc2}</div>
        </Link>
      )}
    </div>
  );
}

function ListBlock({ title, content }: { title: string; content: string[] }) {
  return (
    <div className={style.columnContainer}>
      <div className={style.columnTitle}>{title}</div>
      <ul className={style.columnList}>
        {content.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

interface ITitleTimeDesc {
  title: string;
  time: string;
  desc: string;
  desc2: string;
  desc2Url: string;
}

interface IList {
  title: string;
  content: string[];
}

function ProfileDetailsColumn(p: {
  id: number;
  type: string;
  title: string;
  content: any[];
}) {
  switch (p.type) {
    case "title-time-desc":
      return (
        <div className={style.columnContainer}>
          <div className={style.columnTitle}>{p.title}</div>
          {p.content.map((c, idx) => (
            <TitleTimeDescSubBlock
              key={idx}
              {...(c as unknown as ITitleTimeDesc)}
            />
          ))}
        </div>
      );
    case "list":
      return <ListBlock {...(p as unknown as IList)} />;
    default:
      return <></>;
  }
}

export default function ProfileDetails() {
  return (
    <div className={"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
      {profileData.map((p) => {
        return <ProfileDetailsColumn key={p.id} {...p} />;
      })}
    </div>
  );
}

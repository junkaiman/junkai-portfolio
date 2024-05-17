"use client";
import profileData from "@/_contents/about/profile.json";
import style from "./ProfileDetails.module.css";

function TitleTimeDescSubBlock({
  title,
  time,
  desc,
}: {
  title: string;
  time: string;
  desc: string;
}) {
  return (
    <div className={style.experienceContainer}>
      <div className={style.experienceTitle}>{title}</div>
      <div className={style.experienceTime}>{time}</div>
      <div className={style.experienceDesc}>{desc}</div>
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

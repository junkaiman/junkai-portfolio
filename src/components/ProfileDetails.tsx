"use client";
import profileData from "@/_contents/about/profile.json";

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
    <div>
      <div>{title}</div>
      <div>{time}</div>
      <div>{desc}</div>
    </div>
  );
}

function ListBlock({ title, content }: { title: string; content: string[] }) {
  return (
    <div>
      <div>{title}</div>
      <ul>
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
        <div>
          <div>{p.title}</div>
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
    <div>
      {profileData.map((p) => {
        return <ProfileDetailsColumn key={p.id} {...p} />;
      })}
    </div>
  );
}

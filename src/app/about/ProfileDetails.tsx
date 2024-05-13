"use client";
import profileData from "@/_contents/about/profile.json";

function TitleTimeDescBlock({
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

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div>{title}</div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
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

function ProfileDetailsColumn() {
  profileData.map((p) => {
    switch (p.type) {
      case "title-time-desc":
        return (
          <div>
            <div>{p.title}</div>
            {/* {p.content.map((c: ITitleTimeDesc) => (
              <TitleTimeDescBlock
                key={c.title}
                title={c.title}
                time={c.time}
                desc={c.desc}
              />
            ))} */}
          </div>
        );
      case "list":
      // return (

      // )
      default:
        break;
    }
  });
}

export default function ProfileDetails() {
  return <div>{/* <ProfileDetailsColumn /> */}</div>;
}

import profileData from "@/_contents/about/profile.json";
import Image from "next/image";

interface IJobBlock {
  logo: string;
  title: string;
  desc: string;
  time: string;
  longDesc: string;
  url: string;
}

export function JobBlock({
  logo,
  title,
  desc,
  time,
  longDesc,
  url,
}: IJobBlock) {
  return (
    <div className="flex items-start mt-3 lg:gap-x-5 gap-x-3 max-w-2xl relative before:absolute before:top-[3.7rem] before:left-[1.8rem] before:w-[0px] before:h-[calc(100%-55px)] before:bg-gray-200">
      <a
        href={url}
        className="grid place-items-center bg-white min-h-[60px] min-w-[60px] p-2 rounded-md overflow-clip relative"
      >
        <Image src={logo} alt={title} height={40} width={40}></Image>
      </a>
      <div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-sm">{desc}</div>
        <div className="text-xs text-zinc-500 tracking-widest uppercase">
          {time}
        </div>
        <div className="text-sm text-zinc-300 mb-4">{longDesc}</div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  const workExp = [] as IJobBlock[];
  profileData[0].content = profileData[0].content.sort((a: any, b: any) => {
    return b.startTime - a.startTime;
  });
  for (const job of profileData[0].content as any) {
    workExp.push({
      logo: job.logo,
      title: job.title,
      desc: job.desc,
      time: job.time,
      longDesc: job.longDesc,
      url: job.desc2Url,
    });
  }

  return (
    <div className="">
      <div className="font-bold text-lg">Work Experience</div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16">
        {workExp.map((job: IJobBlock, idx: number) => (
          <JobBlock
            key={idx}
            logo={job.logo}
            title={job.title}
            desc={job.desc}
            time={job.time}
            longDesc={job.longDesc}
            url={job.url}
          ></JobBlock>
        ))}
      </div>
    </div>
  );
}

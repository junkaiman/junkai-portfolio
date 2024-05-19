import timeline from "@/_contents/about/timeline.json";
import style from "./Timeline.module.css";
interface timelineData {
  year: number;
  month: number;
  monthStr: string;
  title: string;
  desc: string;
}

const timelineData: timelineData[] = [];
const numberToMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (const t of timeline) {
  const [year, month] = t[0].split("-");
  timelineData.push({
    year: parseInt(year),
    month: parseInt(month),
    monthStr: numberToMonth[parseInt(month) - 1],
    title: t[1],
    desc: t[2],
  });
}

// order by year by month reversely
timelineData.sort((a, b) => {
  if (a.year === b.year) {
    return b.month - a.month;
  }
  return b.year - a.year;
});

export default function Timeline() {
  return (
    <div className="max-w-lg p-5">
      <div className={style.columnTitle}>Timeline</div>
      <ol className="relative border-s border-gray-200">
        {timelineData.map((t, idx) => (
          <li className={style.timelineItem + " mb-6 ms-4"} key={idx}>
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 ms-0.5 -start-6 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none">
              {t.monthStr} {t.year}
            </time>
            <h3 className="text-lg font-semibold">{t.title}</h3>
            <p className="mb-1 text-base font-normal ">{t.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

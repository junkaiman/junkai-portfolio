import SelfIntro from "@/_contents/about/self-intro.mdx";

export default function AboutMe() {
  return (
    <div className="p-5 flex flex-row">
      <div className="px-4 text-xl space-y-4">
        <SelfIntro />
      </div>
      <div>personal pic on the right</div>
    </div>
  );
}

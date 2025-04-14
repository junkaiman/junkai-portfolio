import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import ProfileDetails from "@/components/ProfileDetails";
import Timeline from "@/components/Timeline";
export default function AboutPage() {
  return (
    <div className="">
      <Header />
      <div className="max-w-(--breakpoint-lg) m-auto">
        <AboutMe />
        <ProfileDetails />
        <Timeline />
      </div>
      <Footer />
    </div>
  );
}

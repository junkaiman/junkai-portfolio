import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import basic from "@/_contents/basic";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div>
        {"Hi there! 👋 You can see what I'm up to on "}
        <Link href={basic.socials.instagram}>Instagram</Link>
        {", connect with me on "}
        <Link href={basic.socials.linkedin}>Linkedin</Link>
        {", or directly send me "}
        <Link href={`mailto:${basic.socials.email}`}>Email</Link>
        {"."}
      </div>
      <Footer />
    </>
  );
}

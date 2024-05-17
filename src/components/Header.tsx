import Link from "next/link";
import Image from "next/image";
import basic from "@/_contents/basic.json";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/" className="items-center">
        <Image src={basic.siteIcon} alt="logo" width={45} height={45} />
      </Link>
      <nav>
        {/* TODO: Highlight current page */}
        <ul className={style.navContainer + " flex space-x-4 text-lg"}>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

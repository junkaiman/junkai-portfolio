import Link from "next/link";
import Image from "next/image";
import basic from "@/_contents/basic.json";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header + " flex items-center justify-between pt-3 pb-2 px-4 sticky top-0"}>
      <Link href="/" className="items-center">
        <Image src={basic.siteIcon} alt="logo" width={40} height={40} />
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

import Link from "next/link";
import styles from "./page.module.css";
import ThreeObject from "./components/threeObject.js";
import { montserrat } from "./layout.js";

export default function Home() {
  return (
    <>
      <ThreeObject />
      <nav className={styles.nav}>
        <ul>
          <li className={montserrat.className}>
            <Link href={"/about"}>ABOUT</Link>
          </li>
          <li className={montserrat.className}>
            <Link href={"/works"}>WORKS</Link>
          </li>
          <li className={montserrat.className}>
            <Link href={"/blog"}>BLOG</Link>
          </li>
          <li className={montserrat.className}>
            <Link href={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
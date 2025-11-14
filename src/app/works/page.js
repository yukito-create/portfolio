import Link from "next/link";
import styles from "./page.module.css";
import { montserrat } from "../layout.js";

export default function WORKS() {

  return (
    <>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={montserrat.className}>DEMO</h2>
          <div className={styles.border}></div>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <Link href={"/"}></Link>
            </div>
            <div className={styles.gridItem}>
              <Link href={"/"}></Link>
            </div>
            <div className={styles.gridItem}>
              <Link href={"/"}></Link>
            </div>
            <div className={styles.gridItem}>
              <Link href={"/"}></Link>
            </div>
            <div className={styles.gridItem}>
              <Link href={"/"}></Link>
            </div>
            <div className={styles.gridItem}>
              <Link href={"/"}></Link>
            </div>
            <div className={styles.gridItem}>
              <Link href={"/"}></Link>
            </div>
            <div className={styles.gridItem}>
              <Link href={"/"}></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
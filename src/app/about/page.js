import styles from "./page.module.css";
import { montserrat } from "../layout.js";

export default function ABOUT() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.container}>
          <div>
            <h2 className={montserrat.className}>ABOUT</h2>
            <p className={"justify"}>1994年生まれ滋賀県在住、フリーランスのWebデザイナー兼フロントエンドエンジニア。
            中小企業様や個人事業主様のWeb製作、運用保守、Webからの集客相談、アプリケーションや業務効率化ツールのフロントエンドの実装とUIデザイン担当。</p>
          </div>
          <div>
            <h2 className={montserrat.className}>SKILLS</h2>
            <p>
            <span>
              ◻️言語
              <br />
              　HTML / CSS / JavaScript
            </span>
            <br />
            <span>
              ◻️フレームワーク
              <br />
              　React / Next.js
            </span>
            <br />
            <span>
              ◻️ライブラリ
              <br />
              　Three.js
            </span>
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
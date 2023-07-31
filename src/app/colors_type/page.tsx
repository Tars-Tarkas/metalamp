import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Colors & Type",
  description: "",
};

export default function ColorsType() {
  return (
    <div className={styles.block}>
      <div className={styles.block_colors}>
        <div className={styles.colors_item}>
          <div
            className={`${styles.color_sample} ${styles.color_sample__item100}`}
          />
          <span className={styles.color_title}>Dark Shade 100%</span>
          <span className={styles.color_hex}>#1F2041</span>
        </div>
        <div className={styles.colors_item}>
          <div
            className={`${styles.color_sample} ${styles.color_sample__item75}`}
          />
          <span className={styles.color_title}>Dark Shade 75%</span>
          <span className={styles.color_hex}>#1F2041</span>
        </div>
        <div className={styles.colors_item}>
          <div
            className={`${styles.color_sample} ${styles.color_sample__item50}`}
          />
          <span className={styles.color_title}>Dark Shade 50%</span>
          <span className={styles.color_hex}>#1F2041</span>
        </div>
      </div>
      <div className={styles.block_types}>
        <div className={styles.types_item}></div>
      </div>
    </div>
  );
}

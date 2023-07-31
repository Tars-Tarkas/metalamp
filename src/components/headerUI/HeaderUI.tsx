import Image from "next/image";
import styles from "./HeaderUI.module.css";

export default function HeaderUI() {
  return (
    <Image
      src="./logo_grey.svg"
      alt="logo"
      width="48"
      height="48"
      className={styles.img}
    />
  );
}

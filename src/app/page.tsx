import styles from "./page.module.css";
import RootLayout from "./layout";
import Link from "next/link";
import Container from "@/components/container/Container";

export default function Home() {
  return (
    <menu className={styles.menu}>
      <Link href="/colors_type">Colors & Type</Link>
      <Link href="/form_elements">Form Elements</Link>
      <Link href="/cards">Cards</Link>
      <Link href="/headers_footers">Headers & Footers</Link>
    </menu>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Container from "@/components/container/Container";
import HeaderUI from "@/components/headerUI/HeaderUI";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Toxin",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <main>
          <Container>
            <HeaderUI />
            {children}
          </Container>
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Din Elektriker Syd AB",
  description: "Professionella eltjänster för privatpersoner och företag",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <html lang="sv"><body>{children}</body></html>;
}

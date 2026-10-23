import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Namesia — Un prénom, un monde à découvrir", template: "%s | Namesia" },
  description: "Explorez les prénoms entre histoires, origines et univers symboliques. Une découverte poétique, colorée et curieuse.",
  colorScheme: "light dark",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" suppressHydrationWarning><body>{children}</body></html>;
}
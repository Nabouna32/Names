import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Namesia — À la découverte des prénoms", template: "%s | Namesia" }, description: "Explorez les prénoms, leurs origines, leurs significations et les histoires qu'ils portent." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }

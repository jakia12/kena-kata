import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ReduxProviders } from "@/store/Provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NestMart — Grocery Ecommerce UI",
  description: "Next.js + Tailwind + shadcn + Redux (UI only)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <ReduxProviders>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ReduxProviders>
      </body>
    </html>
  );
}

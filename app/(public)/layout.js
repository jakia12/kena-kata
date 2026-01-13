import { ReduxProviders } from "@/store/Provider";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import "../globals.css";

export const metadata = {
  title: "NestMart — Grocery Ecommerce UI",
  description: "Next.js + Tailwind + shadcn + Redux (UI only)",
};

export default function RootLayout({ children }) {
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

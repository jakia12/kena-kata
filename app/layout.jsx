import ReduxProvider from "@/store/slices/provider";
import { Toaster } from "sonner";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

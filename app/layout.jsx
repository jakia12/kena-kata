import ReduxProvider from "@/store/slices/provider";
import { Toaster } from "sonner";
import "./globals.css";
import Providers from "./provider/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ReduxProvider>{children}</ReduxProvider>
        </Providers>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

import { ThemeProvider } from "@/utils/themeProvider";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { singleCls } from "@/utils/tailcls";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <NavBar></NavBar>
          <div className={singleCls("mt-24")}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/NextThemesProvider";
import Sidebar from "@/components/Sidebar";
import AppProvider from "@/lib/providers/AppProvider";
import UserBtn from "@/components/UserBtn";
import LoginArea from "@/components/LoginArea";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinicios Ragazzi - Desenvolvedor front-end ",
  description: "viniciosragazzi.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-background `}>
        <AppProvider>
          <ThemeProvider>
            <div className="flex overflow-hidden">
              <Sidebar />
              <LoginArea />
              {children}
            </div>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}

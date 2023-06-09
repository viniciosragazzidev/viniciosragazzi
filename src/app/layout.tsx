import { Header } from "./components/Header";
import { MenuBar } from "./components/menubar";
import { AppProvider } from "./context/AppContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinicios Ragazzi - Front End Developer",
  description:
    "Front End developer portfólio website made with NextJS, TypeScript, TawilwindCSS, etc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // className={`${openModal ? "overflow-y-hidden" : ""}`}
  return (
    <AppProvider>
      <html  lang="pt-br">
        <body className={`${inter.className}  magicpattern `}>
          <Header />
          <MenuBar />
          {children}
        </body>
      </html>
    </AppProvider>
  );
}

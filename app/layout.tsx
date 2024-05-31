import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Porfolio - Emmanuel Kalu",
  description: "A portfolio template created by Emmanuel Kalu",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#222222] text-[#FFFFFF80]`}>
        {/* <div className=" md:flex flex-col md:h-[100vh]"> */}
        <div className="">
          {/* <NavBar /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

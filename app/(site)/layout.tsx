import "../globals.css";
import type { Metadata } from "next";
import {Inter} from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Danylo Sokol - portfolio website",
  description: "A personal portfolio website",
}

export default function RootLayout({children}: {children: React.ReactNode}){
  return(
    <html lang="en">
      <body className={`${inter.className} bg-primary text-white`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
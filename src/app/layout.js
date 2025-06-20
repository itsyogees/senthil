import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Senthilkumar K",
  description: "Solution Architect, trainer, YouTuber, and future SaaS founder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>
        <Header /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
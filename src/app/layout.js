import { Montserrat } from "next/font/google";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600","700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "| Darwin Garcia| Portafolio",
  description: "Data Scientist and Frontend Developer Portfolio.",
  keywords: 'Data Science, Portfolio, Photographer, PC Builder, YouTuber, Developer, Next.js, React, Tailwind CSS',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={`${montserrat.className} bg-gray-900 text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

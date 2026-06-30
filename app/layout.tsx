// app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// අපි සෑදූ Components Import කරගැනීම
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

// 1. Google Fonts මඟින් අවශ්‍ය අකුරු විලාසය සකස් කිරීම
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

// 2. වෙබ් අඩවියේ නම සහ විස්තරය (SEO සඳහා)
export const metadata: Metadata = {
  title: "Charith Jayanath | Portfolio",
  description: "High-end creative agency website clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. මුළු පිටුවම කළු කිරීම සහ අකුරු සුදු කිරීම */}
      <body className={`${spaceGrotesk.className} bg-[#0a0a0a] text-white antialiased`}>
        
        {/* 4. Mouse එක වෙනුවට පෙන්වන රවුම */}
        <CustomCursor />
        
        {/* 5. උඩින්ම පෙන්වන මෙනුව (මෙය හැම පිටුවකම පෙනෙනවා) */}
        <Navbar />

        {/* 6. සුමටව Scroll වීම සඳහා රාමුව */}
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>

      </body>
    </html>
  );
}
// components/Magnetic.tsx
"use client";

import { motion } from "framer-motion";
import { useRef, useState, ReactNode } from "react";

export default function Magnetic({ children }: { children: ReactNode }) {
  // 1. මේ Component එක තිරයේ තියෙන හරියටම තැන හොයාගන්න Ref එකක්
  const ref = useRef<HTMLDivElement>(null);
  
  // 2. X සහ Y අක්ෂ වලට කොච්චර දුරක් ඇදෙන්න ඕනෙද කියලා මතක තියාගන්න State එකක්
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 3. Mouse එක Component එක උඩින් යද්දී වෙන දේ
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e; // Mouse එක තියෙන තැන
    const { height, width, left, top } = ref.current!.getBoundingClientRect(); // අපේ බොත්තමේ දිග, පළල සහ පිහිටීම

    // Mouse එක බොත්තමේ මැද ඉඳන් කොච්චර ඈතින්ද තියෙන්නේ කියලා ගණනය කිරීම
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // ඒ දුර අනුව බොත්තම චලනය කිරීම (ටිකක් අඩුවෙන් චලනය වෙන්න අපි ඒක 3න් බෙදනවා)
    setPosition({ x: middleX / 3, y: middleY / 3 });
  };

  // 4. Mouse එක Component එකෙන් ඉවත් වුණාම ආපහු පරණ තැනටම (0,0) ඒම
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block cursor-pointer"
    >
      {children}
    </motion.div>
  );
}
// components/CustomCursor.tsx
"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // 1. Mouse එකේ X සහ Y පිහිටීම් මතක තබා ගැනීමට Motion Values සෑදීම
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Cursor එක එකපාරටම ගැස්සෙන්නේ නැතිව සුමටව (Smooth) ඇදී ඒමට Spring Physics එකතු කිරීම
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // 3. Mouse එක හෙල්ලෙන හැමවෙලේම එහි X සහ Y පිහිටීම් ලබාගෙන අපේ විචල්‍යයන්ට ලබාදීම
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8); // 8ක් අඩු කරන්නේ Cursor එක මැදටම ගන්නයි
      cursorY.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", moveCursor);

    // Component එක අයින් වෙද්දී ලයිසනර් එක අයින් කිරීම
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    // 4. තිරය මත පාවෙන සුදු පැහැති කුඩා රවුම නිර්මාණය කිරීම
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
}
// components/Navbar.tsx
import Link from "next/link";
import Magnetic from "./Magnetic"; // 1. අපි හදපු Magnetic එක Import කරගන්න

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 mix-blend-difference pointer-events-none">
      <nav className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        
        {/* Logo එකටත් Magnetic දාමු */}
        <Magnetic>
          <Link href="/" className="text-xl font-bold tracking-tighter uppercase text-white p-4 -ml-4 block">
            Home
          </Link>
        </Magnetic>

        <div className="flex gap-4 text-sm font-medium uppercase tracking-widest text-white/80">
          
          {/* Work Link එකට Magnetic දාමු */}
          <Magnetic>
            <Link href="/work" className="hover:text-white transition p-4 block">
              Work
            </Link>
          </Magnetic>

          {/* About Link එකට Magnetic දාමු */}
          <Magnetic>
            <Link href="/about" className="hover:text-white transition p-4 block">
              About
            </Link>
          </Magnetic>

          <Magnetic>
            <Link href="/contact" className="hover:text-white transition p-4 block">
              Contact Us
            </Link>
          </Magnetic>
          
          

        </div>
      </nav>
    </header>
  );
}
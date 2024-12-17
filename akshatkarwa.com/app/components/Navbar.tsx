import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          <Link href="/">AKSHAT KARWA</Link>
        </div>
        {/* Navigation Links */}
        <div className="flex font-bold text-xl space-x-20">
          <Link href="#home" className="hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link href="#about" className="hover:text-gray-300 transition duration-300">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-300 transition duration-300">
            Projects
          </Link>
          <Link href="#academics" className="hover:text-gray-300 transition duration-300">
            Academics
          </Link>
        </div>
      </div>
    </nav>
  );
}
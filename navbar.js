import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="p-6 shadow-md bg-white dark:bg-gray-900 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">JONNAGADDALA MOHAN SAI</h1>
      <div className="flex items-center space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/resume">Resume</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

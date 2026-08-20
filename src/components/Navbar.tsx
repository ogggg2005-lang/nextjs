import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="เมนูหลัก">
      <ul className="navList flex gap-6 p-4 border-b border-zinc-200 dark:border-zinc-800">
        <li>
          <Link className="navLink hover:text-blue-500 font-medium" href="/">
            หน้าแรก
          </Link>
        </li>
        <li>
          <Link className="navLink hover:text-blue-500 font-medium" href="/courses">
            รายวิชา
          </Link>
        </li>
        <li>
          <Link className="navLink hover:text-blue-500 font-medium" href="/about">
            เกี่ยวกับ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
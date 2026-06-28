
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks({item}: any) {
    const path = usePathname();

    return (
        <Link
            href={item.href}
            className={`transition-colors duration-200 ${
    item.href === "/"
      ? path === "/"
        ? "text-[#D9907A]"
        : "text-[#4A4A4A] hover:text-[#D9907A]"
      : path.startsWith(item.href)
      ? "text-[#D9907A]"
      : "text-[#4A4A4A] hover:text-[#D9907A]"
  }`}
        >
            {item.label}
        </Link>
    );
}
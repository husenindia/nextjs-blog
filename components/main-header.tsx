
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./nav-links";

  const navItems = [
      { label: "HOME", href: "/" },
      { label: "BLOG", href: "/blog" },
      { label: "ARCHIVE", href: "/archive" },
  ];


export default function MainHeader() {
    
    return (
    <header>
  <div className="relative flex h-20 items-center bg-[#DEE2E0] px-10">

    {/* Left Navigation */}
    <nav>
      <ul className="flex items-center text-[12px] font-semibold uppercase tracking-[0.12em]">
        {navItems.map((item) => (
          <li           
          key={item.label} className="flex items-center">
            
            <NavLinks item={item}></NavLinks>
            <span className="mx-3 text-[#6A6A6A]">/</span>
          </li>
        ))}
      </ul>
    </nav>

    {/* Center Logo */}
    <Link
      href="/"
      className="absolute left-1/2 -translate-x-1/2"
    >
      <Image
        src="/logo1.png"
        alt="A Music Blog"
        width={200}
        height={55}
        priority
      />
    </Link>

  </div>
</header>
    )
}


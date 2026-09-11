'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isBlogsPage = pathname.startsWith("/blogs");

  const navLinks = [
    {
      label: "Home",
      href: isHomePage ? "#home" : "/#home",
    },
    {
      label: "Features",
      href: isHomePage ? "#features" : "/#features",
    },
    {
      label: "FAQs",
      href: isHomePage ? "#faqs" : "/#faqs",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
  ];

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ["home", "features", "faqs"];
      const scrollPosition = window.scrollY + 200;

      let currentSection = sections[0];

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const getIsActive = (link) => {
    const isBlogLink = link.href === "/blogs";

    const sectionId = link.href.includes("#")
      ? link.href.split("#")[1]
      : "";

    return isBlogLink
      ? isBlogsPage
      : isHomePage && activeSection === sectionId;
  };

  return (
    <header
      className="
        sticky top-0 left-0 w-full z-[100]
        bg-[#202328]/90
        backdrop-blur-[14px]
        border-b border-[#30363D]
      "
    >
      {/* Main Navbar */}
      <div
        className="
          flex items-center justify-between
          h-[72px]
          max-w-[1200px]
          mx-auto
          px-5
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 no-underline"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="
              relative
              w-10 h-10
              rounded-lg
              bg-[#30363D]
              border border-[#59616D]
              flex items-center justify-center
              transition-colors duration-200
              hover:border-[#A9433E]
            "
          >
            <Image
              src="/room-801-apk-logo (1).webp"
              alt="Room 801 Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden min-[901px]:flex items-center gap-[6px]">
          {navLinks.map((link) => {
            const isActive = getIsActive(link);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  text-[0.9rem]
                  font-medium
                  px-4 py-2
                  rounded-lg
                  no-underline
                  transition-all duration-200
                  ${
                    isActive
                      ? "text-[#E8E9E7] bg-[#30363D] border border-[rgba(169,67,62,0.4)]"
                      : "text-[#a9b0ba] border border-transparent hover:bg-[#30363D] hover:text-[#E8E9E7] hover:border-[rgba(169,67,62,0.3)]"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Desktop Download Button */}
          <Link
            href="/download"
            className="
              hidden min-[901px]:flex
              items-center justify-center
              gap-2
              bg-[#A9433E]
              text-[#E8E9E7]
              px-[18px] py-2
              rounded-lg
              text-[0.88rem]
              font-semibold
              no-underline
              transition-colors duration-200
              hover:bg-[#953a37]
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>

            <span>Download APK</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              min-[901px]:hidden
              flex flex-col
              items-center justify-center
              gap-[5px]
              p-[6px]
              bg-transparent
              border-0
              cursor-pointer
          "
          >
            <span
              className={`
                block
                w-[22px]
                h-[2px]
                bg-[#E8E9E7]
                transition-all duration-200
                origin-center
                ${
                  mobileMenuOpen
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`
                block
                w-[22px]
                h-[2px]
                bg-[#E8E9E7]
                transition-all duration-200
                ${
                  mobileMenuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            />

            <span
              className={`
                block
                w-[22px]
                h-[2px]
                bg-[#E8E9E7]
                transition-all duration-200
                origin-center
                ${
                  mobileMenuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }
              `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="
            min-[901px]:hidden
            bg-[#202328]
            border-b border-[#30363D]
            py-5
          "
        >
          <div
            className="
              flex flex-col
              gap-3
              max-w-[1200px]
              mx-auto
              px-5
            "
          >
            {navLinks.map((link) => {
              const isActive = getIsActive(link);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    text-base
                    px-4 py-[10px]
                    rounded-lg
                    no-underline
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#30363D] text-[#E8E9E7] border-l-[3px] border-[#A9433E]"
                        : "text-[#a9b0ba] hover:bg-[#30363D] hover:text-[#E8E9E7]"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Download */}
            <Link
              href="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="
                mt-[10px]
                w-full
                flex items-center justify-center
                gap-2
                bg-[#A9433E]
                text-[#E8E9E7]
                px-5 py-[10px]
                rounded-lg
                font-semibold
                no-underline
                transition-colors duration-200
                hover:bg-[#953a37]
              "
            >
              Download APK (48.2 MB)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

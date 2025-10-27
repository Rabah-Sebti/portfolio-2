"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleNavClick = (hash: string) => {
    // if (pathname.startsWith("/projects") || pathname.startsWith("/resume")) {
    router.push(`/${hash}`);
    // } else {
    //   router.push(`/${hash}`);
    //   // You are already on the home page, just scroll
    //   const el = document.querySelector(hash);
    //   if (el) {
    //     el.scrollIntoView({ behavior: "smooth" });
    //   }
    // }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-800/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick("#home")}
              className="w-12 h-12 rounded-full relative"
            >
              <Image
                src="/images/profile.jpg"
                alt="profile picture"
                fill
                className="rounded-full object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </motion.div>
            ))}
          </div>
          <Link
            className="hidden md:block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
            href="/resume"
          >
            Resume
          </Link>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isOpen ? "close" : "open"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? (
                        <XIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
              >
                <SheetHeader>
                  <SheetTitle className="text-left text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <motion.div
                  className="flex flex-col space-y-6 mt-8 px-4"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={{
                        open: { x: 0, opacity: 1 },
                        closed: { x: -50, opacity: 0 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                    >
                      <button
                        onClick={() => {
                          handleLinkClick();
                          handleNavClick(link.href);
                        }}
                        className="w-full flex items-start text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                      >
                        {link.label}
                      </button>
                    </motion.div>
                  ))}
                  <motion.div
                    key="resume-download"
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: -50, opacity: 0 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                    className="w-full"
                  >
                    <button
                      className="px-8 py-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] cursor-pointer"
                      onClick={() => {
                        handleLinkClick();
                        router.push("/resume");
                      }}
                    >
                      Resume
                    </button>
                  </motion.div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

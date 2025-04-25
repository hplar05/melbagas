"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="sticky bg-blue-600 text-white h-[40px]  text-md w-screen flex justify-center items-center">
        Free Shipping around Valenzuela City
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="relative w-[6rem] h-[3rem]">
            <Image
              src="/images/melbagas-logo-transparent.png"
              alt="MelBagas"
              fill
              className="object-contain"
              priority
            />
          </div>

          <nav
            className={`
            fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto
            bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out
            ${
              isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            }
            md:flex md:items-center md:space-x-8
          `}
          >
            <button
              className="md:hidden absolute top-6 right-6 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-8 md:space-y-0 md:space-x-8">
              <a
                href="#about"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                About MelBagas
              </a>
              <a
                href="#features"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-to-use"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#reviews"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </nav>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

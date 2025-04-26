"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FileText, Crown, Menu, X } from "lucide-react";

import { Navlink } from "./navlink";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-4 mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <Link href={"/"} className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 transform transition duration-200 ease-in-out hover:rotate-12" />
          <span className="font-extrabold text-xl lg:text-2xl text-gray-900">
            DocSqueeze
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex gap-4 lg:gap-12 justify-center items-center text-gray-900 font-semibold">
        <Navlink href={"/#pricing"}>Pricing</Navlink>
        <SignedIn>
          <Navlink href={"/your-summaries"}>Your Summarizes</Navlink>
        </SignedIn>
      </div>

      {/* User Actions */}
      <div className="hidden lg:flex gap-2 justify-end items-center text-gray-900 font-semibold">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <Navlink href={"/upload"}>Upload the PDF</Navlink>
            <p className="bg-gray-500 text-brown-900 px-3 rounded-lg flex items-center justify-center gap-1 font-semibold">
              <Crown className="w-4 h-4 text-yellow-500" /> Pro
            </p>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex gap-2">
            <Link href={"/sign-in"}>
              <button className=" bg-transparent text-gray-500  px-4 py-2 rounded-lg hover:text-gray-800 transition-all">
                Sign In
              </button>
            </Link>
          </div>
        </SignedOut>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-black focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 bg-black text-white" />
          ) : (
            <Menu className="w-6 h-6 bg-black text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4 text-gray-900 font-semibold lg:hidden z-40">
          <Navlink
            href={"/#pricing"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Navlink>
          <SignedIn>
            <Navlink
              href={"/your-summaries"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Your Summarizes
            </Navlink>
            <Navlink
              href={"/upload"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Upload the PDF
            </Navlink>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex gap-2">
              <Link href={"/sign-in"}>
                <button className=" bg-transparent text-gray-500  px-4 py-2 rounded-lg hover:text-gray-800 transition-all">
                  Sign In
                </button>
              </Link>
            </div>
          </SignedOut>
        </div>
      )}
    </nav>
  );
}

export default Header;

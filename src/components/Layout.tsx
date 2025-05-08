// src/components/Layout.tsx
import React from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <header className="p-4 shadow-md bg-white sticky top-0 z-50">
        <nav className="flex justify-between max-w-5xl mx-auto">
          <h1 className="text-xl font-bold">RockSphere</h1>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/order">Order</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow max-w-5xl mx-auto p-4">{children}</main>

      <footer className="p-4 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} RockSphere by Christopher Markstaller
      </footer>
    </div>
  );
}

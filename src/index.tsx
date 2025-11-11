import React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "@/components/Main";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Logo } from "@/components/Logo";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* 固定の上部ナビバー（常に最前面） */}
    <nav className="fixed top-0 left-0 right-0 bg-sky-600 z-[9999]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Logo white />
          </div>

          {/* center links - hidden on small screens */}
          <div className="hidden md:flex items-center gap-8 text-white text-sm">
            <a href="/#about" className="hover:underline">会社概要</a>
            <a href="/#products" className="hover:underline">製品</a>
            <a href="/#services" className="hover:underline">サービス</a>
            <a href="/#contact" className="hover:underline">お問い合わせ</a>
            <a href="/careers.html" className="hover:underline">人材派遣</a>
            <a href="/#company-info" className="hover:underline">企業情報</a>
          </div>

          {/* mobile menu button on the right */}
          <div className="md:hidden">
            <MobileMenuButton />
          </div>
        </div>
      </div>
    </nav>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative container mx-auto w-full h-120 flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1716992252437-4bbdeb3db92e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero background"
        fill
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/50" />

      {/* Content */}
      <div className="relative flex flex-col gap-5 z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Chào mừng đến với{" "}
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 leading-tight">
            HTTL. Khánh Hội
          </h1>
        </div>

        {/* Text */}
        <p className="text-white/85 text-base md:text-lg mb-8">
          Nơi để thuộc về, tin tưởng và trưởng thành. Hãy cùng chúng tôi
          <br /> thờ phượng Chúa và thông công vào Chúa Nhật hàng tuần lúc 10:00
          giờ sáng.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/visit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Plan your visit
          </Link>

          <Link
            href="/live"
            className="border border-white text-white hover:bg-white/10 font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Watch live
          </Link>
        </div>
      </div>
    </section>
  );
}

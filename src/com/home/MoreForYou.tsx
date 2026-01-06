import Image from "next/image";
import React from "react";

const MoreForYou = () => {
  return (
    <section className="relative min-h-125 flex items-center bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/church-ext/1920/1080"
          alt="Everthing in God"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30 grayscale"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="max-w-xl space-y-8">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
            There&apos;s more for you here.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            At HTTL. Khanh Hoi, we want to help you discover Who He created you
            to be though messages that speak to real life, friends who get you,
            and opportunities to make a difference. Enter your email below to
            learn more about what HTTL. Khanh Hoi has for you.
          </p>
          <form className="flex flex-col md:flex-row gap-0 max-w-lg">
            <input
              type="email"
              placeholder="Email Address"
              className="grow bg-gray-900 border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-yellow-400"
            />

            <button className="bg-white text-black font-bold px-8 py-4 hover:bg-yellow-400 transition-colors uppercase tracking-widest text-sm">
              Find out more
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MoreForYou;

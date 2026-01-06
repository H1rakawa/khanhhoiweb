import Image from "next/image";
import React from "react";

const NewToLife = () => {
  return (
    <div className="relative min-h-150 flex items-center justify-center text-center bg-black py-24">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://picsum.photos/seed/stage/1920/1080"
          alt="New To Life background"
          width="1920"
          height="1080"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <h2 className="text-white text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">
          New to HTTL.Khanh Hoi
        </h2>

        <p className="text-white/90 text-xl leading-relaxed mb-12">
          Here you&apos;ll find a safe place to explore your beliefs and connect
          with others. Whereever you are in life, you&apos;re welcome here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-gray-800 text-white border border-white/20 font-bold py-4 px-10 rounded hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs">
            Learn More About Us
          </button>

          <button className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <span>Attend HTTL. Khanh Hoi Online</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewToLife;

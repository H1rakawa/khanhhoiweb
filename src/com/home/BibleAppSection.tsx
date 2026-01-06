import Image from "next/image";
import React from "react";

const BibleAppSection = () => {
  return (
    <section className="relative py-24 bg-linear-to-br from-neutral-900 to-stone-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6  md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start order-1">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-red-700 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 shrink-0">
                <span className="text-white font-black text-xs md:text-base uppercase text-center leading-none">
                  Holy
                  <br />
                  Blbie
                </span>
              </div>

              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                Bible App
              </h2>
            </div>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
              Read or listen to the Bible, explore Bible Plans, create Prayers,
              study with Friends, and much more all for free!
            </p>

            <div className="w-full md:w-auto space-y-4">
              <button className="w-full sm:w-auto bg-white text-black font-bold py-4 px-10 md:px-12 rounded-full hover:bg-yellow-400 transition-colors uppercase tracking-widest text-sm">
                Download the Blble App
              </button>

              <div className="flex flex-col items-center lg:items-start pt-2">
                <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-xs md:text-sm uppercase font-bold tracking-widest italic">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>

                  <span>Follow HTTL. Khanh Hoi in Bible App</span>
                </button>
              </div>
            </div>
          </div>

          {/* Phone Mockup Container */}
          <div className="w-full lg:w-1/2 relative flex justify-center order-2">
            <div className="relative w-full max-w-70 sm:max-w-80 aspect-1/2 bg-black rounded-4xl md:rounded-6xl border-8 md:border-12 border-black shadow-2xl overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-white">
                {/* App UI simulation */}
                <div className="h-full flex flex-col">
                  <div className="p-4 md:p-6 bg-gray-50 flex items-center justify-between border-b">
                    <div className="text-black text-sm md:text-base italic">
                      HTTL. Khanh Hoi
                    </div>

                    <div className="flex space-x-1 md:space-x-2">
                      <div className="px-2 py-1 bg-black rounded text-xs md:text-sm text-white flex items-center justify-center font-bold">
                        Followind
                      </div>
                      <div className="px-2 py-1 border border-black rounded text-xs md:text-sm text-black flex items-center justify-center font-bold">
                        My Church
                      </div>
                    </div>
                  </div>

                  <div className="grow p-3 md:p-4 space-y-3 md:space-y-4 overflow-hidden">
                    <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="https://picsum.photos/seed/bibleapp/600/450"
                        alt=""
                        width="600"
                        height="450"
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg md:text-xl text-gray-900">
                        Feature Plan
                      </h4>

                      <div className="space-y-2">
                        <div className="bg-gray-100 h-20 md:h-24 rounded-xl flex items-center p-3 space-x-3">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-lg shrink-0 animate-pulse" />

                          <div className="space-y-2 grow">
                            <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse" />
                            <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="h-10 w-full bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold uppercase tracking-wider">
                          Start plan
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 md:h-7 bg-black rounded-b-2xl" />
            </div>

            {/* Background Glows for Depth */}
            <div className="absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-500/10 blur-3xl md:blur-[100px] -z-10 rounded-full opacity-60" />

            <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 bg-red-700/20 blur-2xl md:blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BibleAppSection;

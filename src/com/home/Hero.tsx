import Image from "next/image";
import {
  LocationIcon,
  SpinningTextCircle,
  ChevronDownIcon,
} from "../../icons/HeroIcon";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-16 bg-green-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Circle */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none">
        <SpinningTextCircle
          id="CirclePathTop"
          text="Sáng danh Chúa trên các tầng trời rất cao, Bình an dưới đất, Ân trạch cho loại người"
          className="w-full h-full animate-spin-slow-reverse"
          radius={200}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-xl h-xl opacity-20 pointer-events-none">
        <SpinningTextCircle
          id="CirclePathBottom"
          text="Nầy, ta sẽ báo cho các ngươi một tin lành, sẽ là một sự vui mừng lớn cho muôn dân"
          className="w-full h-full animate-spin-slow-reverse"
          radius={200}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Script Logo */}
        <div className="mb-8">
          <h1 className="text-yellow-400 text-8xl md:text-9xl lg:text-[12rem] drop-shadow-xl select-none">
            Giáng sinh
          </h1>

          <p className="text-yellow-400 font-bold uppercase tracking-[0.3em] -mt-8 md:mt-4 text-sm md:text-xl">
            @HTTL.Khanh Hoi
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 max-w-2xl mx-auto space-y-6">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight">
            23-24 Tháng 12
          </h2>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors uppercase font-bold text-sm tracking-widest group">
            <LocationIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />

            <span>Tìm địa điểm gần bạn nhất</span>
          </button>

          <div className="w-full max-w-md relative">
            <select className="w-full bg-gray-800 text-white border border-white/20 rounded-sm px-4 py-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 uppercase text-sm tracking-widest">
              <option>Chọn một điạ điểm</option>
              <option>Nhà thờ Khánh Hội - quận 4</option>
              <option>Điểm nhóm Tân Bình Phú - Ouận u</option>
              <option>Hội thánh Tân Quy</option>
              <option>Hội thánh Tân Thuận</option>
            </select>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
              <ChevronDownIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/4 opacity-30 ">
        <Image
          src="https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-vector-christmas-tree-png-image_10331411.png"
          alt="Christmas Tree"
          width={1200}
          height={2000}
          className="grayscale brightness-75 mix-blend-lighten"
        />
      </div>

      <style>{`
        @keyframes spin-slow {
          from {transform:rotate(0deg);}
          to {transform:rotate(360deg);}
        }

        @keyframes spin-slow-reverse {
          from{transform:rotate(360deg);}
          to {transform:rotate(0deg);}
        }

        .animate-spin-slow {animation: spin-slow 60s linear infinite;}
        .animate-spin-slow-reverse {animation:spin-slow-reverse 60s linear infinite;}
      `}</style>
    </section>
  );
};

export default Hero;

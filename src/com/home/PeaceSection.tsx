import React from "react";
import { PeaceCurveText, StarIcon } from "../../icons/HomeIcon";

const PeaceSection = () => {
  return (
    <section className="relative py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <div className="relative z-20 mb-0 md:mb-2">
          <PeaceCurveText
            text="Bình an tại đây"
            className="w-full max-w-lg mx-auto"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-8 px-4 mt-4">
          <p className="text-green-900/80 text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
            Sự bình an đến trước hết với những người cần nó nhất, Những người
            chăn chiên trong đêm tối. Và rồi thiên đàng mở ra. Giáng sinh này,
            hãy trải nghiệm sự bình an làm thay đổi mọi thứ. Hãy cùng nhau mừng
            Chúa Giáng Sinh.
          </p>

          <button className="bg-black text-white font-bold py-4 px-12 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 uppercase tracking-widest text-sm">
            Xem giờ nhóm lễ
          </button>
        </div>
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-1/4 left-10 text-yellow-500/20">
        <StarIcon className="w-24 h-24" />
      </div>
      <div className="absolute bottom-1/4 right-10 text-yellow-500/20">
        <StarIcon className="w-32 h-32" />
      </div>
    </section>
  );
};

export default PeaceSection;

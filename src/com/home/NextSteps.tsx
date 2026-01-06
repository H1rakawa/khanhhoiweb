import React from "react";
import { DocumentIcon, HeartIcon, PeopleIcon } from "../../icons/HomeIcon";

const NextStepCard = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-neutral-800 p-8 rounded-sm group cursor-pointer hover:bg-zinc-800 transition-colors border-white/5 flex items-center space-x-6">
      <div className="shrink-0 bg-neutral-700 p-4 rounded-sm text-yellow-500 group-hover:text-black group-hover:bg-yellow-500 transition-all">
        {icon}
      </div>

      <div className="space-y-2">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

const NextSteps = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight">
          Bước Tiếp Theo Của Tôi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <NextStepCard
            title="Yêu Cầu Cầu Nguyện"
            desc="Chúng tôi rất sẵn lòng cầu nguyện cùng bạn."
            icon={<HeartIcon />}
          />

          <NextStepCard
            title="Gia Nhập Nhóm Nhỏ"
            desc="Tìm những người bạn để cùng lớn lên, chia sẻ và cầu nguyện."
            icon={<PeopleIcon />}
          />

          <NextStepCard
            title="Khám Phá Thêm"
            desc="Tìm hiểu các bước tiếp theo trên hành trình tâm linh của bạn."
            icon={<DocumentIcon />}
          />
        </div>
      </div>
    </section>
  );
};

export default NextSteps;

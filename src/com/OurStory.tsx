import Image from "next/image";
import React from "react";

const OurStory = () => {
  const stats = [
    { value: "25+", label: "Years of Service" },
    { value: "12", label: "Local Ministries" },
  ];

  return (
    <section className="py-20">
      <div className="container h-20 mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
        {/* Left side */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            {/* Title */}
            <p className="flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase">
              <span className="inline-block w-6 h-px bg-blue-600" />
              Câu chuyện của tôi
            </p>

            <div>
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-snug">
                Xây dựng trên Đức tin,
                <br /> Gắn kết bằng Cộng đồng
              </h2>

              <p>
                HTTL. Khánh Hội bắt đàu với nhóm nhỏ những tín hữu cam kết sống
                theo
                <br /> Phúc âm trong khu vực quận 4, chúng tôi là một cộng đồng
                năng động, đa dạng,
                <br /> tận hiến để chia sẻ tình yêu của Chúa thông qua sự phục
                vụ, thờ phượng và
                <br /> mối quan hệ chân thành
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-blue-600">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="relative h-82 md:h96 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://plus.unsplash.com/premium_photo-1723914175304-04f9b50b13e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cộng đồng tin Chúa"
            fill
            className="object"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;

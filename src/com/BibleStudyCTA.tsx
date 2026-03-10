import React from "react";
import Link from "next/link";
import { BookOpenIcon } from "../icons/HomeIcon";

export default function BibleStudyCTA() {
  return (
    <section>
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row px-14 py-14 items-start lg:items-center justify-between gap-10 bg-linear-45 from-blue-700 to-blue-600 grid-row-3 rounded-3xl">
          {/* Left content */}
          <div className="max-w-7/12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Cùng nhau đào sâu Đức tin
            </h2>

            <p className="text-2xl text-blue-100 leading-relaxed mb-8">
              Join our Weekly Bible Study every Wednesday at 7:00 PM. Whether
              you&apos;re a lifelong believer or just curious, there&apos;s a
              place for you at the table.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bible-study/signup"
                className="flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <BookOpenIcon className="text-blue-700 w-6 h-6" />
                Đăng ký học
              </Link>

              <Link
                href="/bible-study/info"
                className="flex items-center justify-center border border-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10"
              >
                Yêu cầu thêm thông tin
              </Link>
            </div>
          </div>

          {/* Right content */}
          <div className="bg-white/10 bg-blur-sm border border-white/20 py-8 pl-5 pr-25 rounded-2xl space-y-5">
            <InfoRow
              icon={
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              label="Buổi tiếp theo"
              value="Thứ Tư, 7:00 Tối"
            />

            <InfoRow
              icon={
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
              label="Địa điểm"
              value="Phòng nhóm lầu 2, HTTL. Khánh Hội, 98 Lê Quốc Hưng quận 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <p className="text-blue-200 text-xs font-medium">{label}</p>
        <p className="text-white font-semibold text-sm">{value}</p>
      </div>
    </div>
  );
}

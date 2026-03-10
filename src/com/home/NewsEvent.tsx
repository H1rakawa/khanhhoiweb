import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  imageBg?: string;
}

// ─── EventCard ────────────────────────────────────────────────────────────────
function EventCard({
  category,
  categoryColor,
  title,
  description,
  date,
  imageSrc,
  imageBg,
}: EventCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
      {/* Thumbnail */}
      <div className={`relative h-44 ${imageBg ?? "bg-gray-100"}`}>
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl">
            🖼️
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <span
          className={`text-xs font-bold uppercase tracking-wider ${categoryColor}`}
        >
          {category}
        </span>
        <h3 className="text-base font-bold text-gray-900 mt-1 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex items-center gap-1.5 mt-4 text-gray-400 text-xs">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {date}
        </div>
      </div>
    </article>
  );
}

// ─── NewsEvents ───────────────────────────────────────────────────────────────
const events = [
  {
    category: "Sứ điệp phục vụ",
    categoryColor: "text-blue-600",
    title: "Gây Quỹ bữa ăn yêu thương",
    description:
      "Luôn kết nối với những gì đang diễn ra trong gia đình hội thánh của chúng ta.",
    date: "Oct 14, 2023",
    imageSrc:
      "https://images.unsplash.com/photo-1772733694354-3b4a33568ef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Thông công",
    categoryColor: "text-green-600",
    title: "Giao lưu thanh niên",
    description:
      "Luôn kết nối với những gì đang diễn ra trong gia đình hội thánh của chúng ta",
    date: "Oct 20, 2023",
    imageSrc:
      "https://images.unsplash.com/photo-1772950399275-81eea958d92b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Gia dình",
    categoryColor: "text-orange-500",
    title: "Ngày vui cho thiếu nhi Khánh Hội",
    description:
      "Luôn kết nối với những gì đang diễn ra. rong gia đình hội thánh của chúng ta.",
    date: "Oct 28, 2023",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1758601566675-beb95691f90f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageBg: "bg-amber-50",
  },
];

export default function NewsEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Tin tức & Sự kiện mới nhất
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Luôn kết nối với những gì đang diễn ra. rong gia đình hội thánh
              của chúng ta.
            </p>
          </div>
          <Link
            href="/events"
            className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1"
          >
            Xem tất cả
            <IconArrowNarrowRight size={20} />
          </Link>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

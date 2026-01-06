import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm text-white border-b border-white/10">
      <div className="max-w-7xl h-16 mx-auto px-4 flex items-center justify-between">
        <div className="font-black text-2xl tracking-tighter italic">
          HTTL. KHÁNH HỘI
        </div>

        <div className="hidden lg:flex items-start space-x-6 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-yellow-500 transition-colors items">
            Trực tuyến
            <span className="block text-2 text-yellow-500">Live Now</span>
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Truyền thông
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Địa điểm
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Dâng hiến
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Chúng tôi là ai
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Thờ phương
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-3 font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="hidden sm:inline">Đăng nhập</span>
          </button>

          <button className="flex items-center space-x-2 text-3 font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>

            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

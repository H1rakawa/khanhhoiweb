import React from "react";

interface CookieBannerProps {
  onClose: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-neutral-900 w-full max-w-4xl p-8 rounded-lg shadow-2xl relative border-white/10"></div>
    </div>
  );
};

export default CookieBanner;

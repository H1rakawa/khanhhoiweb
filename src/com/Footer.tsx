import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Connect",
      links: [
        { label: "Locations", href: "#" },
        { label: "Attend Online", href: "#" },
        { label: "LifeGroups", href: "#" },
        { label: "Prayer", href: "#" },
        { label: "Events", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Who We Are", href: "#" },
        { label: "Leadership", href: "#" },
        { label: "Beliefs", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Media", href: "#" },
        { label: "Worship", href: "#" },
        { label: "Bible App", href: "#" },
        { label: "Open Network", href: "#" },
        { label: "Shop", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0f0f0f] text-white">
      {/* Resource Bar */}
      <div className="bg-[#1a1a1a] border-b border-white/5 py-10 md:py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">
              Open Network
            </h4>
            <p className="text-white/60 text-sm">
              Get free resources for your church through Life.Church Open
              Network.
            </p>
          </div>
          <button className="w-full md:w-auto bg-transparent hover:bg-white text-white hover:text-black transition-all font-bold px-8 py-3 rounded-full uppercase tracking-widest text-[10px] border border-white/20">
            Explore Resources
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="font-black text-3xl italic tracking-tighter">
                LIFE.CHURCH
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                To lead people to become fully devoted followers of Christ. That
                is the passion behind everything we do.
              </p>
            </div>

            <div className="flex space-x-5">
              {/* Social Icons */}
              <Link
                href="#"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/90">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal Section */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
              <Link
                href="#"
                className="text-[10px] text-white/30 hover:text-white font-bold uppercase tracking-widest transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[10px] text-white/30 hover:text-white font-bold uppercase tracking-widest transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="#"
                className="text-[10px] text-white/30 hover:text-white font-bold uppercase tracking-widest transition-colors"
              >
                Cookie Preferences
              </Link>
            </div>
            <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
              © 2024-2025 Life.Church. All rights reserved.
            </p>
          </div>

          {/* Related Tags/Content */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              "Prayers for Strength",
              "Example Prayers for Healing",
              "How to Study the Bible",
              "Bible Verse of the Day",
            ].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-[9px] text-white/40 hover:text-white uppercase font-bold tracking-widest transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

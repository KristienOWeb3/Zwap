import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "App Views", href: "#app-views" },
  { label: "Card", href: "#card" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Frosted glass backdrop */}
      <div className="absolute inset-0 bg-[rgba(26,26,26,0.6)] backdrop-blur-2xl border-b border-white/[0.06]" />

      <nav className="relative mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-14 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="/" className="relative z-10 flex items-center gap-2 shrink-0" aria-label="ZWAP Home">
          <img
            src="/zwap-logo.png"
            alt="ZWAP"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-[14px] font-medium text-grey-300 rounded-lg transition-colors duration-200 hover:text-white hover:bg-white/[0.06]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#login"
            className="px-4 py-2 text-[14px] font-medium text-grey-400 transition-colors duration-200 hover:text-white"
          >
            Log In
          </a>
          <a
            href="#get-started"
            id="nav-get-started"
            className="px-5 py-2.5 text-[13px] font-semibold text-grey-900 bg-white rounded-full transition-all duration-200 hover:bg-grey-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-[0.97]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-10 flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-lg transition-colors hover:bg-white/[0.06]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-[1.5px] bg-grey-200 origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-[1.5px] bg-grey-200 origin-center"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-[1.5px] bg-grey-200 origin-center"
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute right-0 top-0 bottom-0 w-[min(320px,85vw)] bg-[#1a1a1a]/95 backdrop-blur-2xl border-l border-white/[0.06] flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-end h-[72px] px-6">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/[0.06] transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L17 17M17 1L1 17" stroke="#e5e5e5" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Drawer nav items */}
              <div className="flex flex-col px-6 pt-4 gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.3 }}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3.5 text-[15px] font-medium text-grey-300 rounded-xl transition-colors hover:text-white hover:bg-white/[0.06]"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Drawer auth buttons */}
              <div className="mt-auto px-6 pb-10 flex flex-col gap-3">
                <a
                  href="#login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center px-4 py-3 text-[14px] font-medium text-grey-300 rounded-xl border border-white/[0.08] transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  Log In
                </a>
                <a
                  href="#get-started"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center px-4 py-3 text-[14px] font-semibold text-grey-900 bg-white rounded-xl transition-all hover:bg-grey-200 active:scale-[0.97]"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

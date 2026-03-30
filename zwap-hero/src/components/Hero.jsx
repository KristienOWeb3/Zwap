import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden pt-[72px]"
      aria-label="Hero"
    >
      {/* Subtle radial glow for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[20%] w-[700px] h-[700px] rounded-full bg-white/[0.012] blur-[140px]" />
        <div className="absolute bottom-[15%] left-[5%] w-[500px] h-[500px] rounded-full bg-white/[0.008] blur-[120px]" />
      </div>

      <div className="relative w-full max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-14 min-h-[calc(100vh-72px)] flex items-center">
        {/* ==========================================
            DESKTOP / TABLET LAYOUT (asymmetric grid)
            ========================================== */}
        <div className="hidden md:grid w-full grid-cols-12 gap-x-5 lg:gap-x-6 items-start py-12 lg:py-0">
          {/* LEFT: Headline + CTA — occupies ~4 cols */}
          <div className="col-span-5 lg:col-span-4 flex flex-col justify-center min-h-[calc(100vh-72px)]">
            <div>
              <motion.h1
                {...fadeUp(0.3)}
                className="text-[clamp(2rem,3.8vw,4rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-white"
              >
                Crypto &amp; Fiat
                <br />
                Payments
                <br />
                <span className="text-grey-400">Made Easy.</span>
              </motion.h1>

              <motion.div {...fadeIn(0.75)} className="mt-10">
                <a
                  href="#learn-more"
                  id="hero-learn-more"
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 text-[14px] font-semibold text-grey-900 bg-white rounded-full transition-all duration-300 hover:bg-grey-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] active:scale-[0.97]"
                >
                  Learn More
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

          {/* CENTER-RIGHT: Hero phone image — occupies ~5 cols */}
          <div className="col-span-4 lg:col-span-5 flex items-center justify-center min-h-[calc(100vh-72px)]">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
              className="relative w-full max-w-[360px] lg:max-w-[420px]"
            >
              {/* Soft ambient glow behind phone */}
              <div className="absolute -inset-10 bg-white/[0.025] rounded-[50px] blur-[80px] pointer-events-none" />
              <img
                src="/hero-phone.png"
                alt="ZWAP mobile app showing account dashboard with crypto and naira balance"
                className="relative w-full h-auto object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.55)]"
              />
            </motion.div>
          </div>

          {/* RIGHT: Supporting copy — occupies ~3 cols, pushed down */}
          <div className="col-span-3 flex items-center min-h-[calc(100vh-72px)]">
            <motion.div {...fadeIn(0.6)} className="pt-28 lg:pt-36">
              <p className="text-[clamp(0.8rem,0.92vw,0.95rem)] leading-[1.8] text-grey-400 font-normal tracking-[-0.005em]">
                Deposit any crypto and get naira instantly. Buy any token with
                just a wallet address. Save in stablecoins. Withdraw to any
                bank.
              </p>
              <p className="mt-5 text-[clamp(0.8rem,0.92vw,0.95rem)] leading-[1.8] text-grey-500 font-normal tracking-[-0.005em]">
                One platform — zero friction.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ==========================================
            MOBILE LAYOUT (stacked)
            ========================================== */}
        <div className="flex md:hidden flex-col items-center text-center w-full py-8 gap-6">
          {/* Headline */}
          <motion.h1
            {...fadeUp(0.3)}
            className="text-[2rem] sm:text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.035em] text-white mt-4"
          >
            Crypto &amp; Fiat
            <br />
            Payments
            <br />
            <span className="text-grey-400">Made Easy.</span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div {...fadeIn(0.55)}>
            <a
              href="#learn-more"
              className="group inline-flex items-center gap-2.5 px-7 py-3 text-[14px] font-semibold text-grey-900 bg-white rounded-full transition-all duration-300 hover:bg-grey-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] active:scale-[0.97]"
            >
              Learn More
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* Hero phone image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.6, ease }}
            className="relative w-full max-w-[270px] sm:max-w-[310px]"
          >
            <div className="absolute -inset-8 bg-white/[0.025] rounded-[40px] blur-[60px] pointer-events-none" />
            <img
              src="/hero-phone.png"
              alt="ZWAP mobile app showing account dashboard with crypto and naira balance"
              className="relative w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          {/* Supporting copy */}
          <motion.div {...fadeIn(0.75)} className="max-w-[300px] px-2">
            <p className="text-[0.875rem] leading-[1.75] text-grey-400 font-normal">
              Deposit any crypto and get naira instantly. Buy any token with
              just a wallet address. Save in stablecoins. Withdraw to any bank.
            </p>
            <p className="mt-3 text-[0.875rem] leading-[1.75] text-grey-500 font-normal">
              One platform — zero friction.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none" />
    </section>
  );
}

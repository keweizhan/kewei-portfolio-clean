"use client";

import Header from "@/components/layout/Header";
import { HERO_VARIANTS } from "@/lib/animations";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useScrollTo } from "@/hooks/useScrollTo";

const WIPE_EASE = [0.25, 0.46, 0.45, 0.94] as const;

// Available start date shown in the hero — update when needed
const AVAILABLE_DATE = "JUN 01";

function CtaButton({ label, onClick, className }: { label: string; onClick: () => void; className: string }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`relative overflow-hidden inline-flex items-center bg-foreground/80 text-background font-bold uppercase cursor-pointer ${className}`}
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      initial="initial"
    >
      <motion.span
        className="absolute inset-0 bg-foreground rounded-full"
        variants={{ initial: { x: "-101%" }, hover: { x: "0%" } }}
        transition={{ duration: 0.4, ease: WIPE_EASE }}
      />
      <span className="relative z-10">{label}</span>
      <motion.span
        className="relative z-10"
        variants={{ initial: { x: 0, scale: 1 }, hover: { x: 2, scale: 1.15 } }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <ArrowUpRight className="w-[1em] h-[1em] ml-1" />
      </motion.span>
    </motion.button>
  );
}

export default function HeroSection() {
  const t = useTranslations("Hero");
  const scrollTo = useScrollTo();
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollProgress = useMotionValue(0);

  useLenis(({ scroll }) => {
    const el = containerRef.current;
    if (!el) return;
    const progress = Math.min(Math.max((scroll - el.offsetTop) / el.offsetHeight, 0), 1);
    scrollProgress.set(progress);
  });

  const y = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollProgress, [0, 1], [1, 0.8]);

  return (
    <div id="home" ref={containerRef} className="relative h-screen z-0">
      <div className="top-0 h-screen flex flex-col px-8 pb-8">
        <Header />

        <motion.div
          className="flex-1 flex flex-col"
          style={{ y, opacity, scale, willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <div className="flex-1 min-h-[60px]" />

          <div className="flex flex-col">
            {/* Hero name — reduced from 17.5vw to 13vw so KEWEI and ZHAN have visible separation */}
            <motion.h1
              className="text-7xl max-[380px]:text-[60px] font-semibold tracking-tight uppercase md:text-[13vw] md:leading-none inline-flex gap-[0.12em] text-foreground/95 scale-y-[0.88]"
              variants={HERO_VARIANTS}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              KEWEI
              ZHAN
            </motion.h1>

            {/* ── Mobile layout ── */}
            <div className="relative flex flex-col gap-y-8 md:hidden mt-5">
              <motion.div
                className="flex flex-col gap-4"
                variants={HERO_VARIANTS}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <p className="text-xl leading-snug tracking-tight text-balance text-foreground/70 font-medium max-w-[28ch]">
                  {t("tagline")}
                </p>
                <p className="text-sm leading-relaxed tracking-tight text-balance text-foreground/45 font-normal max-w-[32ch]">
                  {t("tagline2")}
                </p>
                <div className="mt-1">
                  <CtaButton
                    label={t("cta")}
                    onClick={() => scrollTo("works")}
                    className="px-5 py-4 rounded-full text-sm"
                  />
                </div>
              </motion.div>

              {/* Availability + date row */}
              <motion.div
                className="flex items-end justify-between"
                variants={HERO_VARIANTS}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs uppercase text-muted-foreground leading-tight font-mono tracking-wider">
                    {t("availabilityMobileLine1")}
                  </p>
                  <p className="text-xs uppercase text-muted-foreground leading-tight font-mono tracking-wider">
                    {t("availabilityMobileLine2")}
                  </p>
                  <p className="text-xs uppercase text-muted-foreground leading-tight font-mono tracking-wider mt-0.5">
                    {t("location")}
                  </p>
                </div>
                <p className="text-4xl font-semibold uppercase leading-none tracking-tighter text-foreground/80">
                  {AVAILABLE_DATE}
                </p>
              </motion.div>
            </div>

            {/* ── Desktop layout — 2 col, no image ── */}
            <div className="hidden md:grid md:grid-cols-12 gap-x-6 mt-8">

              {/* Left — enlarged editorial copy */}
              <motion.div
                className="col-span-8 flex flex-col justify-between"
                variants={HERO_VARIANTS}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <div className="space-y-10">
                  <ArrowDownRight className="text-muted-foreground size-12" />
                  <div className="flex flex-col gap-6 pl-3">
                    <div className="flex flex-col gap-4">
                      <p className="text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.05] text-balance text-foreground/70 font-medium max-w-[16ch]">
                        {t("tagline")}
                      </p>
                      <p className="text-lg xl:text-xl tracking-tight leading-snug text-balance text-foreground/45 font-normal max-w-[40ch]">
                        {t("tagline2")}
                      </p>
                    </div>
                    <div>
                      <CtaButton
                        label={t("cta")}
                        onClick={() => scrollTo("works")}
                        className="tracking-tight px-4 py-3 text-xs md:px-6 md:py-4 md:text-base lg:px-8 lg:py-5 lg:text-lg rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right — availability + fixed start date + location */}
              <motion.div
                className="col-span-4 flex flex-col justify-end items-end"
                variants={HERO_VARIANTS}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <div className="text-right flex flex-col gap-1">
                  <p className="text-sm xl:text-base uppercase text-muted-foreground leading-tight tracking-wider font-mono">
                    {t("availabilityDesktop")}
                  </p>
                  <p className="text-4xl xl:text-5xl text-foreground/80 font-semibold uppercase leading-none tracking-tighter">
                    {AVAILABLE_DATE}
                  </p>
                  <p className="text-sm xl:text-base uppercase text-muted-foreground leading-tight tracking-wider font-mono mt-1">
                    {t("location")}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

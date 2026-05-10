"use client";

import DecryptedText from "@/components/text/DecryptedText";
import FadeUp from "@/components/text/FadeUp";
import SplitText from "@/components/text/SplitText";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo, useRef } from "react";
import { useTranslations } from "next-intl";

const SKILL_ITEMS = [
  [
    "Java",
    "Python",
    "TypeScript",
    "JavaScript",
    "C / C++",
    "Swift",
    "SQL",
  ],
  [
    "Spring Boot",
    "FastAPI",
    "React",
    "Next.js",
    "Vue 3",
    "SQLAlchemy",
    "JWT / RBAC",
    "Tailwind CSS",
  ],
  [
    "PostgreSQL",
    "Redis",
    "Docker",
    "Prometheus",
    "Grafana",
    "Qdrant",
    "LLM Agents",
    "RAG",
    "Whisper",
  ],
] as const;

export default function AboutSection() {
  const t = useTranslations("About");
  const sectionRef = useRef<HTMLElement>(null);

  const skillGroups = useMemo(() => {
    const titles = t.raw("skillGroups") as { title: string }[];
    return titles.map((g, i) => ({
      title: g.title,
      items: [...SKILL_ITEMS[i]],
    }));
  }, [t]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="mt-[-2vh]"
    >
      <div className="relative z-10">
        <motion.div
          style={{ scale, y, willChange: "transform", transformOrigin: "top center" }}
          className="rounded-b-3xl bg-secondary px-10 pt-4 sm:pt-20 md:pt-[15vh] pb-20 sm:pb-40 text-secondary-foreground space-y-20 md:space-y-20"
        >
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <h2 className="order-2 col-span-12 flex flex-col lg:pt-24 font-semibold tracking-tighter leading-none md:order-1 lg:col-span-6 text-[54px] sm:text-7xl md:text-[88px] lg:text-[96px]">
              <span className="block">
                <SplitText stagger={0.04} duration={0.8} yOffset={50}>
                  {t("line1")}
                </SplitText>
              </span>
              <span className="block">
                <SplitText stagger={0.04} duration={0.8} yOffset={50}>
                  {t("line2")}
                </SplitText>
              </span>
              <span className="block">
                <SplitText stagger={0.04} duration={0.8} yOffset={50}>
                  {t("line3")}
                </SplitText>
              </span>
            </h2>

            <div className="order-1 col-span-12 overflow-hidden md:order-2 lg:col-span-6">
              <section className="self-start px-3 py-5 md:px-6">
                <div className="mx-auto max-w-6xl">
                  <div className="mb-8 text-center tracking-tighter font-semibold text-[40px] sm:text-[50px] md:text-[clamp(70px,calc(70px+(90-70)*((100vw-768px)/(1280-768))),90px)] xl:text-[90px] leading-none">
                    {t("skillsHeading")}
                  </div>

                  <div className="grid grid-cols-3 gap-0 p-0 md:gap-5 md:p-5">
                    {skillGroups.map((group) => (
                      <div key={group.title} className="p-2">
                        <h4 className="hidden md:flex text-xl font-semibold mb-4 tracking-tighter">
                          {group.title}
                        </h4>
                        <ul className="space-y-1 text-base md:text-lg lg:text-xl">
                          {group.items.map((item) => (
                            <li key={item}>
                              <DecryptedText once={false} className="font-mono font-[400] text-secondary-foreground/75">
                                {item}
                              </DecryptedText>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            {/* Abstract AI/backend system architecture diagram (no personal photo) */}
            <div className="pointer-events-none relative max-h-[30rem] col-span-12 md:col-span-3 flex aspect-square w-full h-full items-center overflow-clip rounded-md sm:aspect-auto md:items-end">
              <svg
                viewBox="0 0 240 320"
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 w-full h-full"
                aria-label={t("aboutImageAlt")}
                role="img"
              >
                <defs>
                  <linearGradient id="aboutBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1a1a1a" />
                    <stop offset="100%" stopColor="#0a0a0a" />
                  </linearGradient>
                  <linearGradient id="aboutNode" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#262626" />
                    <stop offset="100%" stopColor="#171717" />
                  </linearGradient>
                </defs>

                <rect width="240" height="320" fill="url(#aboutBg)" rx="6" />

                {/* connector lines */}
                <g stroke="#3f3f46" strokeWidth="1" opacity="0.55">
                  <line x1="120" y1="42" x2="120" y2="60" />
                  <line x1="60" y1="60" x2="180" y2="60" />
                  <line x1="60" y1="60" x2="60" y2="80" />
                  <line x1="180" y1="60" x2="180" y2="80" />
                  <line x1="60" y1="102" x2="60" y2="140" />
                  <line x1="180" y1="102" x2="180" y2="140" />
                  <line x1="40" y1="140" x2="200" y2="140" />
                  <line x1="40" y1="140" x2="40" y2="155" />
                  <line x1="120" y1="140" x2="120" y2="155" />
                  <line x1="200" y1="140" x2="200" y2="155" />
                  <line x1="80" y1="177" x2="80" y2="215" />
                  <line x1="160" y1="177" x2="160" y2="215" />
                  <line x1="80" y1="215" x2="160" y2="215" />
                  <line x1="80" y1="215" x2="80" y2="230" />
                  <line x1="160" y1="215" x2="160" y2="230" />
                  <line x1="80" y1="252" x2="80" y2="280" />
                  <line x1="160" y1="252" x2="160" y2="280" />
                  <line x1="80" y1="280" x2="160" y2="280" />
                  <line x1="80" y1="280" x2="80" y2="290" />
                  <line x1="160" y1="280" x2="160" y2="290" />
                </g>

                {/* nodes */}
                <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="#a1a1aa" letterSpacing="0.5">
                  {/* API Gateway */}
                  <rect x="80" y="20" width="80" height="22" rx="3" fill="url(#aboutNode)" stroke="#52525b" />
                  <text x="120" y="35" textAnchor="middle">API GATEWAY</text>

                  {/* Planner / Executor */}
                  <rect x="20" y="80" width="80" height="22" rx="3" fill="url(#aboutNode)" stroke="#52525b" />
                  <text x="60" y="95" textAnchor="middle">PLANNER</text>
                  <rect x="140" y="80" width="80" height="22" rx="3" fill="url(#aboutNode)" stroke="#52525b" />
                  <text x="180" y="95" textAnchor="middle">EXECUTOR</text>

                  {/* Workers / Cache / Sandbox */}
                  <rect x="10" y="155" width="60" height="22" rx="3" fill="url(#aboutNode)" stroke="#52525b" />
                  <text x="40" y="170" textAnchor="middle">CELERY</text>
                  <rect x="90" y="155" width="60" height="22" rx="3" fill="url(#aboutNode)" stroke="#52525b" />
                  <text x="120" y="170" textAnchor="middle">REDIS</text>
                  <rect x="170" y="155" width="60" height="22" rx="3" fill="url(#aboutNode)" stroke="#52525b" />
                  <text x="200" y="170" textAnchor="middle">DOCKER</text>

                  {/* Storage */}
                  <rect x="40" y="230" width="80" height="22" rx="3" fill="url(#aboutNode)" stroke="#52525b" />
                  <text x="80" y="245" textAnchor="middle">POSTGRES</text>
                  <rect x="120" y="230" width="80" height="22" rx="3" fill="url(#aboutNode)" stroke="#52525b" />
                  <text x="160" y="245" textAnchor="middle">QDRANT</text>

                  {/* Monitoring */}
                  <rect x="40" y="290" width="80" height="22" rx="3" fill="url(#aboutNode)" stroke="#52525b" />
                  <text x="80" y="305" textAnchor="middle">PROMETHEUS</text>
                  <rect x="120" y="290" width="80" height="22" rx="3" fill="url(#aboutNode)" stroke="#52525b" />
                  <text x="160" y="305" textAnchor="middle">GRAFANA</text>
                </g>
              </svg>
            </div>

            <div className="col-span-12 flex flex-col gap-y-9 lg:gap-y-18 md:col-span-7 md:col-start-6">
              <FadeUp
                className="max-w-[39ch] text-balance text-2xl md:text-3xl lg:text-4xl font-medium leading-snug tracking-tight"
                once={false}
              >
                {t("lead")}
              </FadeUp>

              <div className="flex flex-col gap-x-10 gap-y-4 lg:flex-row">
                <span className="font-mono uppercase text-secondary-foreground/70">
                  {t("aboutLabel")}
                </span>

                <div className="flex max-w-[38ch] flex-col gap-y-4 text-balance text-base md:text-lg lg:text-xl text-secondary-foreground/75 tracking-tight font-normal">
                  <FadeUp once={false}>
                    <p>{t("p1")}</p>
                  </FadeUp>

                  <FadeUp delay={0.12} once={false}>
                    <p>{t("p2")}</p>
                  </FadeUp>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

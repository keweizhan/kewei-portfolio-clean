"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useScrollTo, type SectionId } from "@/hooks/useScrollTo";
import { RollingText } from "@/components/ui/RollingText";

const MENU_IDS: SectionId[] = ["home", "services", "works", "about", "contact"];

type SocialItem = { kind: "link"; id: "github" | "linkedin"; href: string };

const socialItems: SocialItem[] = [
  { kind: "link", id: "github", href: "https://github.com/keweizhan" },
  { kind: "link", id: "linkedin", href: "https://www.linkedin.com/in/kewei-zhan/" },
];

function LocalClock() {
  const locale = useLocale();
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString(
          locale === "en" ? "en-US" : locale === "zh-TW" ? "zh-TW" : "zh-CN",
          {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZoneName: "short",
          },
        ),
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [locale]);

  return <span className="font-mono font-medium uppercase text-secondary/60 text-base">{time}</span>;
}

function ScrollToTopButton({
  onClick,
  ariaLabel,
}: {
  onClick: () => void;
  ariaLabel: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center rounded-full bg-scroll-top-surface p-6 hover:scale-90 active:scale-95 transition-transform duration-300 cursor-pointer overflow-hidden"
    >
      <motion.div
        animate={hovered ? { y: [0, -14, 0] } : { y: 0 }}
        transition={
          hovered
            ? { duration: 0.6, ease: "easeInOut" }
            : { duration: 0.2 }
        }
      >
        <ArrowUp className="md:size-6 lg:size-10 text-scroll-top-foreground" />
      </motion.div>
    </button>
  );
}

export default function Footer() {
  const t = useTranslations("Nav");
  const tFooter = useTranslations("Footer");
  const scrollTo = useScrollTo();

  return (
    <footer className="px-10 py-12 flex flex-col gap-12">
      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-12 gap-x-8">
        <div className="flex flex-col md:col-span-6">
          <h3 className="mb-3 border-b-[1.5px] border-foreground/30 pb-2 font-bold text-lg lg:text-xl tracking-tighter text-secondary/80">
            {tFooter("menu")}
          </h3>
          <ul className="flex flex-col gap-1.5">
            {MENU_IDS.map((id) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollTo(id)}
                  className="group text-left text-secondary/60 sm:text-lg lg:text-xl tracking-tighter cursor-pointer hover:text-secondary/80 transition-colors overflow-hidden"
                >
                  <RollingText className="text-base sm:text-lg lg:text-xl">{t(id)}</RollingText>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:col-span-3">
          <h3 className="mb-3 border-b-[1.5px] border-foreground/30 pb-2 font-bold text-lg lg:text-xl tracking-tighter text-secondary/80">
            {tFooter("socials")}
          </h3>
          <ul className="flex flex-col gap-1.5">
            {socialItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-secondary/60 tracking-tighter hover:text-secondary/80 transition-colors overflow-hidden"
                >
                  <RollingText className="text-base sm:text-lg lg:text-xl">{tFooter(item.id)}</RollingText>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex w-full items-end justify-between md:grid md:grid-cols-12 gap-x-8">
        <span className="text-4xl font-semibold tracking-tighter text-secondary/80 md:col-span-6 md:text-5xl">
          KEWEI ZHAN
        </span>

        <div className="flex flex-col text-sm md:col-span-3">
          <span className="font-bold uppercase tracking-tighter text-secondary/80 text-base sm:text-lg">
            {tFooter("localTime")}
          </span>
          <LocalClock />
        </div>

        <div className="hidden md:flex md:col-span-3 justify-end">
          <ScrollToTopButton
            ariaLabel={tFooter("scrollToTop")}
            onClick={() => scrollTo("home")}
          />
        </div>
      </div>
    </footer>
  );
}

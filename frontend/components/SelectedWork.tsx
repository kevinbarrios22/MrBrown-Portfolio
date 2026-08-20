"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import CloudinaryImage from "./CloudinaryImage";
import ProjectVideo from "./ProjectVideo";
import { projects } from "@/lib/mock-data";
import type { ProjectCategory } from "@/types";

type Filter = "All" | ProjectCategory;

const categories: Filter[] = [
  "All",
  "Advertising",
  "Music Video",
  "Documentary",
  "Campaign",
];

export default function SelectedWork() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="px-[5%] py-[140px]">
      <Reveal>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-5">
          <h2 className="font-display text-[clamp(34px,5vw,64px)] uppercase leading-[0.95] tracking-[-0.01em]">
            Work
            <br />
            Selected
          </h2>
          <div className="flex flex-wrap gap-[10px]">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full border px-[18px] py-[9px] font-mono text-xs tracking-[0.03em] transition-colors duration-200 ${
                  active === category
                    ? "border-amber text-amber"
                    : "border-line text-ink-dim hover:border-amber hover:text-amber"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <motion.div layout className="mt-[50px] grid gap-2 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative aspect-[16/10] cursor-pointer overflow-hidden bg-card"
            >
              {project.videoPublicId ? (
                <ProjectVideo
                  publicId={project.videoPublicId}
                  className="h-full w-full bg-black object-contain brightness-[0.75] grayscale-[0.4] transition-all duration-500 group-hover:scale-[1.06] group-hover:brightness-90 group-hover:grayscale-0"
                />
              ) : project.publicId ? (
                <CloudinaryImage
                  publicId={project.publicId}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover brightness-[0.75] grayscale-[0.4] transition-transform duration-500 group-hover:scale-[1.06] group-hover:brightness-90 group-hover:grayscale-0"
                />
              ) : (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover brightness-[0.75] grayscale-[0.4] transition-transform duration-500 group-hover:scale-[1.06] group-hover:brightness-90 group-hover:grayscale-0"
                />
              )}
              <div className="pointer-events-none absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-ink/40 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <span className="ml-0.5 text-sm text-ink">▶</span>
              </div>
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-transparent to-transparent p-[26px]">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-amber">
                  {project.category}
                </span>
                <h4 className="mt-1.5 font-display text-[26px] uppercase">
                  {project.title}
                </h4>
                <span className="mt-1 text-xs text-ink-dim">
                  Client: {project.client} — {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
"use client";

import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="px-[5%] py-[140px]">
      <Reveal>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-5">
          <h2 className="font-display text-[clamp(34px,5vw,64px)] uppercase leading-[0.95] tracking-[-0.01em]">
            Services
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="border-t border-line">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid items-center gap-6 border-b border-line py-[34px] transition-colors duration-300 hover:bg-amber/[0.04] md:grid-cols-[80px_1fr_240px]"
            >
              <span className="font-mono text-[13px] text-amber">
                {service.number}
              </span>
              <h3 className="font-display text-[30px] font-normal uppercase tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="text-sm text-ink-dim md:text-right">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
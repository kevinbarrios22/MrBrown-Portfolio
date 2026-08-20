"use client";

import Reveal from "./Reveal";
import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section className="px-[5%] py-[140px]">
      <Reveal>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-5">
          <h2 className="font-display text-[clamp(34px,5vw,64px)] uppercase leading-[0.95] tracking-[-0.01em]">
            Process
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="border-t border-line">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="grid gap-[30px] border-b border-line py-[36px] md:grid-cols-[100px_1fr]"
            >
              <span className="font-display text-[42px] text-amber-dim">
                {step.number}
              </span>
              <div>
                <h4 className="mb-2 font-display text-[22px] uppercase">
                  {step.title}
                </h4>
                <p className="max-w-[520px] text-sm text-ink-dim">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { aboutBio, aboutImage } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="px-[5%] py-[140px]">
      <div className="grid items-start gap-[70px] md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[4px]">
            <Image
              src={aboutImage}
              alt="Retrato del productor audiovisual"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center grayscale-[0.3] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>About me</Eyebrow>
          <p className="mt-6 whitespace-pre-line text-[22px] leading-[1.5] text-ink">{aboutBio}</p>
        </Reveal>
      </div>
    </section>
  );
}
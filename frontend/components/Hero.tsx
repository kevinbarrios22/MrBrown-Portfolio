"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { heroImage, heroVideoPublicId, profile } from "@/lib/content";
import { videoUrl } from "@/lib/cloudinary";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden px-[5%] pb-[70px]"
    >
      <div className="absolute inset-0 -z-10">
        {heroVideoPublicId ? (
          <video
            src={videoUrl(heroVideoPublicId)}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={heroImage}
            alt="Imagen de fondo del hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/15 via-bg/55 to-bg/97" />
      </div>

      <div className="absolute left-[5%] top-[110px]">
        <Eyebrow>{profile.eyebrow}</Eyebrow>
      </div>

      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative font-display uppercase leading-[0.82] tracking-[-0.01em] text-[clamp(58px,12vw,168px)]"
        >
           DYLAN MORENO
        </motion.h1>

        <div className="mt-[26px] flex flex-wrap items-end justify-between gap-6 border-t border-ink/20 pt-[18px]">
          <p className="max-w-[340px] text-sm leading-relaxed text-ink-dim">
            {profile.tagline}
          </p>
          <div className="text-right font-mono text-xs text-ink-dim">
            <br />
            <b className="text-ink">{profile.presentedBy}</b> — {profile.role}
          </div>
        </div>
      </div>


    </header>
  );
}
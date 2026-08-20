"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Eyebrow from "./Eyebrow";
import { profile } from "@/lib/mock-data";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", message: "" };

const inputClasses =
  "w-full border-b border-line bg-transparent py-[10px] font-sans text-base text-ink outline-none placeholder:text-ink-dim/50 focus:border-amber";

export default function ContactFooter() {
  const [form, setForm] = useState<FormState>(initialForm);

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form payload:", form);
    setForm(initialForm);
  };

  return (
    <footer
      id="contact"
      className="border-t border-line bg-bg-alt px-[5%] pb-10 pt-[120px]"
    >
      <Eyebrow>Contact</Eyebrow>
      <h2 className="mt-5 max-w-[900px] font-display text-[clamp(36px,7vw,96px)] uppercase leading-[0.92] tracking-[-0.01em]">
        LET'S CREATE SOMETHIN  POWERFUL{" "}
      </h2>

      <div className="mt-[70px] grid gap-[60px] md:grid-cols-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-[26px]">
            <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-dim">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange("name")}
              className={inputClasses}
            />
          </div>

          <div className="mb-[26px]">
            <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-dim">
              Email
            </label>
            <input
              type="email"
              placeholder="Your@email.com"
              value={form.email}
              onChange={handleChange("email")}
              className={inputClasses}
            />
          </div>

          <div className="mb-[26px]">
            <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-dim">
              Message
            </label>
            <textarea
              rows={3}
              placeholder="Write your message here."
              value={form.message}
              onChange={handleChange("message")}
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            className="mt-2.5 cursor-pointer rounded-full bg-amber px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-bg transition-opacity duration-200 hover:opacity-90"
          >
            Send message
          </button>
        </form>

        <div className="font-mono text-[13px] text-ink-dim">
          Email
          <a
            href={`mailto:${profile.email}`}
            className="mb-[26px] mt-1.5 block text-[15px] text-ink transition-colors hover:text-amber"
          >
            {profile.email}
          </a>
          Telefo number
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="mb-[26px] mt-1.5 block text-[15px] text-ink transition-colors hover:text-amber"
          >
            {profile.phone}
          </a>
          <div className="mt-2.5 flex gap-[18px]">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-[13px] text-ink-dim transition-colors hover:border-b hover:border-amber hover:text-amber"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[110px] flex flex-wrap justify-between gap-[10px] border-t border-line pt-6 font-mono text-[11px] text-ink-dim">
        <span>
          © {new Date().getFullYear()} {profile.name} — Audiovisual Production
        </span>
      </div>
    </footer>
  );
}
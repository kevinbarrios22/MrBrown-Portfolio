"use client";

import { clients } from "@/lib/content";

export default function ClientsMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <div className="overflow-hidden border-y border-line bg-bg-alt py-5">
      <div className="flex w-max animate-marquee">
        {doubled.map((client, index) => (
          <span
            key={`${client.name}-${index}`}
            className="mx-[34px] whitespace-nowrap font-mono text-sm tracking-[0.05em] text-ink-dim"
          >
            <b className="font-bold text-ink">{client.name}</b>
            {client.kind && (
              <>
                {" "}
                — {client.kind}
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
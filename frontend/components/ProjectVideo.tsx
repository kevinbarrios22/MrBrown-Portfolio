"use client";

import { useRef } from "react";
import { posterUrl, videoUrl } from "@/lib/cloudinary";

interface ProjectVideoProps {
  publicId: string;
  className?: string;
}

export default function ProjectVideo({ publicId, className }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      src={videoUrl(publicId)}
      poster={posterUrl(publicId)}
      muted
      loop
      playsInline
      preload="metadata"
      onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
      onMouseLeave={(e) => e.currentTarget.pause()}
      className={className}
    />
  );
}
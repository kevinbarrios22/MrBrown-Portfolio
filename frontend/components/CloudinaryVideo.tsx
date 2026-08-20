"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

interface CloudinaryVideoProps {
  publicId: string;
  className?: string;
  width?: string;
  height?: string;
}

export default function CloudinaryVideo({
  publicId,
  className,
  width = "960",
  height = "540",
}: CloudinaryVideoProps) {
  return (
    <div className={className}>
      <CldVideoPlayer src={publicId} width={width} height={height} controls />
    </div>
  );
}
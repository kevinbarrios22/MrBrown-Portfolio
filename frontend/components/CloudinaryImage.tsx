"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
}

export default function CloudinaryImage({
  publicId,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
}: CloudinaryImageProps) {
  return (
    <CldImage
      src={publicId}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
    />
  );
}
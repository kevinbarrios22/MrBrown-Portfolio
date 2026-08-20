import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function imageUrl(publicId: string, options?: Record<string, unknown>) {
  return getCldImageUrl({
    src: publicId,
    format: "auto",
    quality: "auto",
    ...options,
  });
}

export function videoUrl(publicId: string, options?: Record<string, unknown>) {
  return getCldVideoUrl({
    src: publicId,
    format: "mp4",
    ...options,
  });
}

export function posterUrl(publicId: string, offsetSeconds = 2) {
  return `https://res.cloudinary.com/${cloudName}/video/upload/so_${offsetSeconds}.0,pg_1/v1/${publicId}.jpg`;
}

export function hlsUrl(publicId: string) {
  return `https://res.cloudinary.com/${cloudName}/video/upload/sp_auto/${publicId}.m3u8`;
}
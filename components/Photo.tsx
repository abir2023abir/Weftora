/* eslint-disable @next/next/no-img-element */
import { img } from "@/lib/site";

/** Responsive Unsplash photo that fills its (relative) parent. */
export default function Photo({
  id,
  alt,
  className = "",
  w = 900,
  priority = false,
}: {
  id: string;
  alt: string;
  className?: string;
  w?: number;
  priority?: boolean;
}) {
  return (
    <img
      src={img(id, w)}
      srcSet={`${img(id, Math.round(w / 2))} ${Math.round(w / 2)}w, ${img(id, w)} ${w}w, ${img(id, w * 2)} ${w * 2}w`}
      sizes={`(max-width: 768px) 100vw, ${w}px`}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

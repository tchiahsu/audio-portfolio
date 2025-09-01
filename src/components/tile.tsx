import { memo, useEffect, useRef, useState } from "react";

type Dir = "top" | "bottom" | "left" | "right";

type TileProps = {
  src: string;
  alt: string;
  index: number;             // for stagger
  from?: Dir;                // slide direction
  staggerMs?: number;        // per-item delay
  className?: string;
};

const Tile = ({
  src,
  alt,
  index,
  from = "top",
  staggerMs = 120,
  className = "",
}: TileProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // 1) Watch when tile enters viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(el); // animate once
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 2) Ensure image is decoded before revealing
  useEffect(() => {
    if (!inView || loaded) return;
    const img = imgRef.current;
    if (!img) return;
    if ("decode" in img) {
      // Try to pre-decode; fall back to onLoad if it errors
      img.decode().then(() => setLoaded(true)).catch(() => {});
    }
  }, [inView, loaded]);

  const hiddenTranslate =
    from === "top"
      ? "-translate-y-6"
      : from === "bottom"
      ? "translate-y-6"
      : from === "left"
      ? "-translate-x-6"
      : "translate-x-6";

  const visible = inView && loaded;

  return (
    <div
      ref={wrapperRef}
      style={{ transitionDelay: visible ? `${index * staggerMs}ms` : "0ms" }}
      className={[
        "group relative overflow-hidden rounded-md bg-gray-100 aspect-[16/9]",
        "transform-gpu will-change-[transform,opacity]",
        "transition-[transform,opacity] duration-500 ease-out",
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTranslate}`,
        className,
      ].join(" ")}
    >
      {/* Optional lightweight placeholder */}
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-200" />}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:opacity-90"
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        fetchPriority="low"
      />
    </div>
  );
};

export default memo(Tile);
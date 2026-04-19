"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryImages, GalleryCategory } from "@/data/gallery";
import { useLang } from "@/i18n/LangProvider";
import type { Lang } from "@/i18n/translations";

function CategoryButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
          : "border border-neutral-700 text-neutral-400 hover:border-amber-500/50 hover:text-amber-400"
      }`}
    >
      {label}
    </button>
  );
}

export default function PhotoGallery() {
  const { lang, t } = useLang();
  const [category, setCategory] = useState<GalleryCategory>("all");
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filtered = category === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === category);

  // Auto-advance slideshow
  useEffect(() => {
    if (isPaused || filtered.length <= 1) return;
    const timer = setInterval(() => {
      setSlideDirection("next");
      setIsTransitioning(true);
      setTimeout(() => {
        setSlideIndex((prev) => (prev + 1) % filtered.length);
        setIsTransitioning(false);
      }, 400);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, filtered.length]);

  // Reset slide index when category changes
  useEffect(() => {
    setSlideIndex(0);
    setIsTransitioning(false);
  }, [category]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === slideIndex) return;
      setSlideDirection(index > slideIndex ? "next" : "prev");
      setIsTransitioning(true);
      setTimeout(() => {
        setSlideIndex(index);
        setIsTransitioning(false);
      }, 500);
    },
    [slideIndex]
  );

  const goNext = useCallback(() => {
    setSlideDirection("next");
    setIsTransitioning(true);
    setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % filtered.length);
      setIsTransitioning(false);
    }, 500);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setSlideDirection("prev");
    setIsTransitioning(true);
    setTimeout(() => {
      setSlideIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      setIsTransitioning(false);
    }, 500);
  }, [filtered.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filtered.length : null
        );
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
        );
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, filtered.length]);

  const currentImage = filtered[slideIndex];
  const categoryLabels: Record<GalleryCategory, Record<Lang, string>> = {
    all: { ko: "전체", en: "All", vi: "Tất cả", ja: "すべて", zh: "全部" },
    interior: { ko: "인테리어", en: "Interior", vi: "Nội thất", ja: "インテリア", zh: "室内" },
    food: { ko: "음식", en: "Food", vi: "Món ăn", ja: "料理", zh: "美食" },
  };

  return (
    <>
      <section id="gallery" className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
              <span className="text-amber-500">{t("gallery", "title")}</span> / Gallery
            </h2>
            <div className="mx-auto h-1 w-16 rounded bg-amber-500" />
            <p className="mt-4 text-neutral-400">{t("gallery", "subtitle")}</p>
          </div>

          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {(["all", "interior", "food"] as GalleryCategory[]).map((cat) => (
              <CategoryButton
                key={cat}
                label={categoryLabels[cat][lang]}
                active={category === cat}
                onClick={() => setCategory(cat)}
              />
            ))}
          </div>

          {/* Main Slideshow */}
          {currentImage && (
            <div
              className="relative mb-8 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slide Container */}
              <div className="relative aspect-[16/9] w-full cursor-pointer sm:aspect-[21/9]"
                onClick={() => setLightboxIndex(slideIndex)}
              >
                <div
                  className={`gallery-slide absolute inset-0 ${
                    isTransitioning
                      ? slideDirection === "next"
                        ? "gallery-slide-exit-left"
                        : "gallery-slide-exit-right"
                      : "gallery-slide-enter"
                  }`}
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt[lang]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority={slideIndex === 0}
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-medium text-white drop-shadow-lg sm:text-xl">
                    {currentImage.alt[lang]}
                  </p>
                  <p className="mt-1 text-sm text-amber-400">
                    {slideIndex + 1} / {filtered.length}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-sm transition hover:bg-amber-600/80 sm:left-4 sm:p-3"
                aria-label="Previous"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-sm transition hover:bg-amber-600/80 sm:right-4 sm:p-3"
                aria-label="Next"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-3">
                {filtered.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === slideIndex
                        ? "w-6 bg-amber-500"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10">
            {filtered.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => goToSlide(idx)}
                className={`group relative aspect-square overflow-hidden rounded-lg transition-all duration-300 ${
                  idx === slideIndex
                    ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-neutral-950"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt[lang]}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="120px"
                />
              </button>
            ))}
          </div>

          {/* Mosaic Grid - Featured Photos */}
          <div className="mt-16">
            <h3 className="mb-6 text-center text-xl font-semibold text-neutral-300">
              {t("gallery", "gridTitle")}
            </h3>
            <div className="gallery-masonry">
              {filtered.map((img, idx) => (
                <button
                  key={img.src + "-grid"}
                  onClick={() => setLightboxIndex(idx)}
                  className="gallery-masonry-item group relative overflow-hidden rounded-xl border border-neutral-800 transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt[lang]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="p-4 text-sm font-medium text-white">
                      {img.alt[lang]}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + filtered.length) % filtered.length
              );
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-amber-600/80"
            aria-label="Previous"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative mx-16 max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt[lang]}
              width={1200}
              height={800}
              className="max-h-[85vh] rounded-lg object-contain"
              sizes="90vw"
            />
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-white">
                {filtered[lightboxIndex].alt[lang]}
              </p>
              <p className="mt-1 text-sm text-amber-400">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filtered.length);
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-amber-600/80"
            aria-label="Next"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

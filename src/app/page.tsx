"use client";

import Image from "next/image";
import { menuData } from "@/data/menu";
import { useLang } from "@/i18n/LangProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ReservationForm from "@/components/ReservationForm";
import PhotoGallery from "@/components/PhotoGallery";
import { useState } from "react";

function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN");
}

function isEventActive(): boolean {
  const now = new Date();
  const start = new Date(2026, 3, 20); // Apr 20, 2026
  const end = new Date(2026, 3, 29, 23, 59, 59); // Apr 29, 2026 end of day
  return now >= start && now <= end;
}

const DISCOUNT_RATE = 0.2;

function MenuImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-3xl">
        🍽
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={120}
      height={120}
      className="h-full w-full object-cover transition group-hover:scale-105"
      onError={() => setError(true)}
    />
  );
}

export default function Home() {
  const { lang, t } = useLang();
  const eventActive = isEventActive();

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="text-xl font-bold tracking-wide text-amber-500">
            TRẠM VIỆT
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#about" className="text-neutral-300 transition hover:text-amber-400">
              {t("nav", "about")}
            </a>
            <a href="#menu" className="text-neutral-300 transition hover:text-amber-400">
              {t("nav", "menu")}
            </a>
            <a href="#gallery" className="text-neutral-300 transition hover:text-amber-400">
              {t("gallery", "title")}
            </a>
            <a href="#location" className="text-neutral-300 transition hover:text-amber-400">
              {t("nav", "location")}
            </a>
            <a href="#contact" className="text-neutral-300 transition hover:text-amber-400">
              {t("nav", "contact")}
            </a>
            <LanguageSwitcher />
            <a
              href="#reservation"
              className="rounded-lg bg-amber-600 px-4 py-2 text-white transition hover:bg-amber-500"
            >
              {t("nav", "reservation")}
            </a>
          </div>
          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <a
              href="#reservation"
              className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-500"
            >
              {t("nav", "reservation")}
            </a>
          </div>
        </div>
      </nav>

      {/* Event Banner */}
      {eventActive && (
        <div className="fixed top-[57px] z-40 w-full bg-gradient-to-r from-red-600 via-red-500 to-amber-500 py-2 text-center shadow-lg">
          <a href="#menu" className="flex items-center justify-center gap-2 text-sm font-bold text-white sm:text-base">
            <span className="rounded bg-white/20 px-2 py-0.5 text-xs font-black uppercase tracking-wider">
              {t("event", "badge")}
            </span>
            <span>{t("event", "banner")}</span>
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-neutral-950 to-neutral-950" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center">
          <div className="mb-6 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400">
            {t("hero", "badge")}
          </div>
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="text-amber-500">TRẠM VIỆT</span>
          </h1>
          <p className="mb-2 text-2xl font-light text-neutral-300 sm:text-3xl">
            Restaurant
          </p>
          <p className="mb-8 text-lg text-neutral-400">
            {t("hero", "subtitle")}
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-neutral-400">
            {t("hero", "description")}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#menu"
              className="rounded-lg bg-amber-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-amber-500"
            >
              {t("hero", "viewMenu")}
            </a>
            <a
              href="#reservation"
              className="rounded-lg border border-amber-500/50 px-8 py-3 text-lg font-semibold text-amber-400 transition hover:bg-amber-500/10"
            >
              {t("hero", "reserve")}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
              {t("about", "title")} <span className="text-amber-500">Trạm Việt</span>
            </h2>
            <div className="mx-auto h-1 w-16 rounded bg-amber-500" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-8 text-center">
              <div className="mb-4 text-4xl">🍜</div>
              <h3 className="mb-2 text-lg font-semibold text-amber-400">
                {t("about", "food")}
              </h3>
              <p className="text-sm text-neutral-400">
                {t("about", "foodDesc")}
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-8 text-center">
              <div className="mb-4 text-4xl">🌿</div>
              <h3 className="mb-2 text-lg font-semibold text-amber-400">
                {t("about", "fresh")}
              </h3>
              <p className="text-sm text-neutral-400">
                {t("about", "freshDesc")}
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-8 text-center">
              <div className="mb-4 text-4xl">🏠</div>
              <h3 className="mb-2 text-lg font-semibold text-amber-400">
                {t("about", "home")}
              </h3>
              <p className="text-sm text-neutral-400">
                {t("about", "homeDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
              <span className="text-amber-500">{t("menu", "title")}</span> / Menu
            </h2>
            <div className="mx-auto h-1 w-16 rounded bg-amber-500" />
            <p className="mt-4 text-neutral-400">
              {t("menu", "subtitle")}
            </p>
          </div>

          {/* Menu category navigation */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {menuData.map((cat) => (
              <a
                key={cat.id}
                href={`#menu-${cat.id}`}
                className="rounded-full border border-neutral-700 px-4 py-1.5 text-xs font-medium text-neutral-300 transition hover:border-amber-500 hover:text-amber-400"
              >
                {cat.title}
              </a>
            ))}
          </div>

          {/* Menu items */}
          <div className="space-y-12">
            {menuData.map((category) => (
              <div key={category.id} id={`menu-${category.id}`} className="scroll-mt-24">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-neutral-800" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-amber-500 sm:text-2xl">
                      {category.title}
                    </h3>
                    <p className="text-sm italic text-neutral-400">
                      {category.titles[lang]}
                    </p>
                  </div>
                  <div className="h-px flex-1 bg-neutral-800" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 transition hover:border-amber-500/30 hover:bg-neutral-900"
                    >
                      <div className="flex">
                        {/* Food Image */}
                        {item.image && (
                          <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden sm:h-32 sm:w-32">
                            <MenuImage src={item.image} alt={item.names[lang]} />
                          </div>
                        )}
                        {/* Text */}
                        <div className="flex flex-1 flex-col justify-between p-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-white">
                                {item.names[lang]}
                              </h4>
                              {item.bestSeller && (
                                <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                                  Best
                                </span>
                              )}
                            </div>
                            <p className="mt-1 line-clamp-2 text-sm text-neutral-400">
                              {item.descs[lang]}
                            </p>
                          </div>
                          <div className="mt-2 text-lg font-bold text-amber-500">
                            {eventActive ? (
                              <>
                                <span className="mr-2 text-sm font-normal text-neutral-500 line-through">
                                  {formatPrice(item.price)}
                                </span>
                                {formatPrice(Math.round(item.price * (1 - DISCOUNT_RATE)))}
                                <span className="ml-1 text-xs font-normal text-neutral-500">
                                  VNĐ
                                </span>
                                <span className="ml-2 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                                  -20%
                                </span>
                              </>
                            ) : (
                              <>
                                {formatPrice(item.price)}
                                <span className="ml-1 text-xs font-normal text-neutral-500">
                                  VNĐ
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Reservation Section */}
      <section id="reservation" className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
              <span className="text-amber-500">{t("reservation", "title")}</span> / Reservation
            </h2>
            <div className="mx-auto h-1 w-16 rounded bg-amber-500" />
            <p className="mt-4 text-neutral-400">
              {t("reservation", "subtitle")}
            </p>
          </div>
          <ReservationForm />
        </div>
      </section>

      {/* Location & Map Section */}
      <section id="location" className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
              <span className="text-amber-500">{t("location", "title")}</span> / Location
            </h2>
            <div className="mx-auto h-1 w-16 rounded bg-amber-500" />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-neutral-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.5!2d108.22833!3d16.05424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c7de81e737%3A0x7b0bfca4aaf0b8f1!2zVHLhuqFtIFZp4buHdCBSZXN0YXVyYW50!5e0!3m2!1sko!2s!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trạm Việt Restaurant Location"
              />
            </div>
            {/* Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-amber-400">
                  📍 {t("location", "address")}
                </h3>
                <p className="text-neutral-300">
                  01 Trần Bạch Đằng, An Hải, Sơn Trà
                </p>
                <p className="text-neutral-300">Đà Nẵng 50000, Vietnam</p>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-amber-400">
                  🕐 {t("location", "hours")}
                </h3>
                <p className="text-neutral-300">{t("location", "hoursValue")}</p>
                {t("location", "hoursSub") && (
                  <p className="text-sm text-neutral-500">
                    {t("location", "hoursSub")}
                  </p>
                )}
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-amber-400">
                  📞 {t("location", "phone")}
                </h3>
                <a
                  href="tel:+84365970095"
                  className="text-neutral-300 transition hover:text-amber-400"
                >
                  +84 365 970 095
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/yAAP2zu69exwXLMz5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 font-medium text-white transition hover:bg-amber-500"
              >
                {t("location", "viewMap")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
              <span className="text-amber-500">{t("contact", "title")}</span> / Contact
            </h2>
            <div className="mx-auto h-1 w-16 rounded bg-amber-500" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="tel:+84365970095"
              className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5 transition hover:border-amber-500/30"
            >
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-sm text-neutral-400">{t("contact", "phoneLabel")}</p>
                <p className="font-medium text-white">+84 365 970 095</p>
              </div>
            </a>
            <a
              href="https://www.facebook.com/tramvietrestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5 transition hover:border-amber-500/30"
            >
              <span className="text-2xl">📘</span>
              <div>
                <p className="text-sm text-neutral-400">Facebook</p>
                <p className="font-medium text-white">Trạm Việt Restaurant</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/tramvietrestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5 transition hover:border-amber-500/30"
            >
              <span className="text-2xl">📷</span>
              <div>
                <p className="text-sm text-neutral-400">Instagram</p>
                <p className="font-medium text-white">Tram Viet Restaurant</p>
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@tramvietrestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5 transition hover:border-amber-500/30"
            >
              <span className="text-2xl">🎵</span>
              <div>
                <p className="text-sm text-neutral-400">TikTok</p>
                <p className="font-medium text-white">Trạm việt restaurant</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
              <span className="text-2xl">💬</span>
              <div>
                <p className="text-sm text-neutral-400">KakaoTalk</p>
                <p className="font-medium text-white">Tramviet-Restaurant</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
              <span className="text-2xl">💚</span>
              <div>
                <p className="text-sm text-neutral-400">WeChat</p>
                <p className="font-medium text-white">Tram Viet Restaurant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xl font-bold text-amber-500">TRẠM VIỆT</p>
          <p className="mt-1 text-sm text-neutral-400">
            {t("footer", "tagline")}
          </p>
          <p className="mt-4 text-xs text-neutral-600">
            01 Trần Bạch Đằng, An Hải, Sơn Trà, Đà Nẵng 50000, Vietnam
          </p>
          <p className="mt-2 text-xs text-neutral-600">
            © 2026 Trạm Việt Restaurant. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}


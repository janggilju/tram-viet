"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LangProvider";

export default function ReservationForm() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const text = [
      `📋 Reservation Request`,
      ``,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      formData.email ? `Email: ${formData.email}` : "",
      `Date: ${formData.date}`,
      `Time: ${formData.time}`,
      `Guests: ${formData.guests}`,
      formData.message ? `Note: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/84365970095?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");

    setSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-8 text-center">
        <div className="mb-4 text-4xl">✅</div>
        <h3 className="mb-2 text-xl font-semibold text-amber-400">
          {t("reservation", "successTitle")}
        </h3>
        <p className="text-neutral-300">
          {t("reservation", "successMsg")}
        </p>
        {t("reservation", "successMsgSub") && (
          <p className="mt-2 text-sm text-neutral-400">
            {t("reservation", "successMsgSub")}
          </p>
        )}
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", phone: "", email: "", date: "", time: "", guests: "2", message: "" });
          }}
          className="mt-6 rounded-lg bg-amber-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-amber-500"
        >
          {t("reservation", "newReservation")}
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-white placeholder-neutral-500 outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-neutral-300">
            {t("reservation", "name")} <span className="text-red-400">{t("reservation", "required")}</span>
          </label>
          <input id="name" type="text" required maxLength={100} value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-neutral-300">
            {t("reservation", "phone")} <span className="text-red-400">{t("reservation", "required")}</span>
          </label>
          <input id="phone" type="tel" required maxLength={20} value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass} placeholder="+84 / +82 / +81..." />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-300">
          {t("reservation", "email")}{" "}
          <span className="text-neutral-500">({t("reservation", "optional")})</span>
        </label>
        <input id="email" type="email" maxLength={200} value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass} placeholder="email@example.com" />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-neutral-300">
            {t("reservation", "date")} <span className="text-red-400">{t("reservation", "required")}</span>
          </label>
          <input id="date" type="date" required value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-neutral-300">
            {t("reservation", "time")} <span className="text-red-400">{t("reservation", "required")}</span>
          </label>
          <input id="time" type="time" required value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="guests" className="mb-1.5 block text-sm font-medium text-neutral-300">
            {t("reservation", "guests")} <span className="text-red-400">{t("reservation", "required")}</span>
          </label>
          <select id="guests" required value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className={inputClass}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>
                {n}{t("reservation", "guestUnit")}
              </option>
            ))}
            <option value="10+">10{t("reservation", "guestOver")}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-300">
          {t("reservation", "message")}{" "}
          <span className="text-neutral-500">({t("reservation", "optional")})</span>
        </label>
        <textarea id="message" rows={3} maxLength={500} value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder={t("reservation", "messagePlaceholder")} />
      </div>

      <button type="submit" disabled={sending}
        className="w-full rounded-lg bg-amber-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-amber-500 disabled:opacity-50">
        {sending ? t("reservation", "sending") : t("reservation", "submit")}
      </button>
      <p className="text-center text-xs text-neutral-500">
        {t("reservation", "note")}
      </p>
    </form>
  );
}

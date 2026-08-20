"use client";

import { useState } from "react";
import { Car, Menu, MessageCircle, Phone, X } from "lucide-react";
import { COMPANY_NAME, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK_GENERAL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#teslimat-noktalari", label: "Bölgelerimiz" },
  { href: "#filo", label: "Araç Filomuz" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Car size={20} strokeWidth={2.5} />
          </span>
          <span className="text-sm font-bold tracking-wide sm:text-base">
            {COMPANY_NAME}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <Phone size={16} />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_LINK_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label="Menüyü aç/kapat"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium text-foreground"
            >
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              <MessageCircle size={16} />
              7/24 WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

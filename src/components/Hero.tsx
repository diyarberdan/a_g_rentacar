import { Clock3, Gauge, MapPinned, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK_GENERAL } from "@/lib/constants";

const BADGES = [
  { icon: MapPinned, label: "Adrese, Havalimanına ve Otogara Teslimat" },
  { icon: Gauge, label: "Düşük Kilometreli, Bakımlı Araçlar" },
  { icon: Clock3, label: "7/24 WhatsApp Destek" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <ShieldCheck size={14} />
            Güvenilir Araç Kiralama
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            KALIPLAŞMIŞ KLASİK KİRALAMA
            <br className="hidden sm:block" /> MODELLERİNİ BİR KENARA
            BIRAKIN
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Araçlarımızı bulunduğunuz yere, hava alanına ve otogara teslimat
            yapma hizmetimiz vardır. Zengin çeşit ve yüksek model bakımlı
            araçlarımızla hizmetinizdeyiz.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-105 sm:w-auto"
            >
              <MessageCircle size={20} />
              7/24 WhatsApp&apos;tan Rezervasyon
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-surface-2 sm:w-auto"
            >
              <Phone size={20} />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-4 text-left"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

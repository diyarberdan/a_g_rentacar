import { Clock3, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import {
  ADDRESS,
  GOOGLE_MAPS_EMBED_SRC,
  GOOGLE_MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK_GENERAL,
} from "@/lib/constants";

export default function Contact() {
  return (
    <section id="iletisim" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            İletişim
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Bize Ulaşın
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Sorularınız için 7/24 WhatsApp&apos;tan yazabilir ya da bizi
            arayabilirsiniz.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MapPin size={22} />
              </span>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Adres
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{ADDRESS}</p>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                >
                  <Navigation size={14} />
                  Yol Tarifi Al
                </a>
              </div>
            </div>

            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Phone size={22} />
              </span>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Telefon
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{PHONE_DISPLAY}</p>
              </div>
            </a>

            <a
              href={WHATSAPP_LINK_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MessageCircle size={22} />
              </span>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  WhatsApp
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{PHONE_DISPLAY}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Clock3 size={22} />
              </span>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Çalışma Saatleri
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  7/24 WhatsApp Destek Hattı
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              7/24 WhatsApp&apos;tan Yaz
            </a>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-border lg:min-h-full">
            <iframe
              title="A&G Oto Kiralama Konum"
              src={GOOGLE_MAPS_EMBED_SRC}
              className="h-full w-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

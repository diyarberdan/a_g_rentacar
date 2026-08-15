import { Car, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  ADDRESS,
  COMPANY_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK_GENERAL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Car size={20} strokeWidth={2.5} />
              </span>
              <span className="text-base font-bold tracking-wide">{COMPANY_NAME}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Sektörde güvenilir, yenilikçi ve hizmet kalitesini sürekli
              arttıran, kişilerin ilk ve öncelikli tercih ettiği araç kiralama
              kuruluşu.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Hızlı Bağlantılar
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href="#hakkimizda" className="hover:text-foreground">Hakkımızda</a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-foreground">Hizmetler</a>
              </li>
              <li>
                <a href="#filo" className="hover:text-foreground">Araç Filomuz</a>
              </li>
              <li>
                <a href="#iletisim" className="hover:text-foreground">İletişim</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              İletişim
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Phone size={18} className="text-accent" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <MessageCircle size={18} className="text-accent" />
                  7/24 WhatsApp Destek
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} {COMPANY_NAME}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

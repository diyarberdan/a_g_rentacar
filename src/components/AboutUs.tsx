import { ShieldCheck, Sparkles, Star, TrendingUp } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";

const PILLARS = [
  {
    icon: Star,
    title: "İlk ve Öncelikli Tercih",
    description: "Sektörde kişilerin ilk ve öncelikli tercih ettiği kuruluş.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilir",
    description: "Şeffaf ve güven veren kiralama süreçleri.",
  },
  {
    icon: Sparkles,
    title: "Yenilikçi",
    description: "Klasik kiralama modellerinin ötesinde bir yaklaşım.",
  },
  {
    icon: TrendingUp,
    title: "Sürekli Gelişen Kalite",
    description: "Hizmet kalitesini sürekli arttıran bir kuruluş.",
  },
];

export default function AboutUs() {
  return (
    <section id="hakkimizda" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Hakkımızda
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Neden {COMPANY_NAME}?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {COMPANY_NAME} faaliyet gösterdiği sektörde kişilerin ilk ve
              öncelikli tercih ettiği, güvenilir, yenilikçi ve hizmet
              kalitesini sürekli arttıran bir kuruluştur.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

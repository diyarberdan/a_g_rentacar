import { BusFront, MapPin, Plane, TrainFront } from "lucide-react";

const TRANSPORT_HUBS = [
  { icon: Plane, label: "Esenboğa Havalimanı" },
  { icon: BusFront, label: "AŞTİ Otogar" },
  { icon: TrainFront, label: "Ankara YHT Tren Garı" },
];

const DISTRICTS = [
  "Keçiören",
  "Çankaya",
  "Yenimahalle",
  "Mamak",
  "İncek",
  "Bağlıca",
  "Eryaman",
  "Pursaklar",
  "Ostim",
];

export default function ServiceAreas() {
  return (
    <section id="teslimat-noktalari" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Hizmet Bölgelerimiz
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Teslimat Noktalarımız
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Esenboğa Havalimanı, AŞTİ ve YHT Garı&apos;nın yanı sıra Ankara&apos;nın
            tüm ilçelerine 7/24 araç teslimatı yapıyoruz.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {TRANSPORT_HUBS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/5 px-4 py-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon size={20} />
              </span>
              <span className="text-sm font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {DISTRICTS.map((district) => (
            <div
              key={district}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3.5 transition-colors hover:border-accent/40"
            >
              <MapPin size={16} className="shrink-0 text-accent" />
              <span className="text-sm font-medium text-foreground">{district}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

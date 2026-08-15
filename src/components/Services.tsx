import { BusFront, Car, Gauge, MapPin, Plane, Wrench } from "lucide-react";

const SERVICES = [
  {
    icon: MapPin,
    title: "Adresinize Teslimat",
    description:
      "Araçlarımızı bulunduğunuz yere kadar getiriyoruz, zaman kaybetmeden yolculuğunuza başlayın.",
  },
  {
    icon: Plane,
    title: "Havalimanına Teslimat",
    description:
      "Uçuşunuza uygun şekilde aracınızı havalimanında teslim alıyor, dönüşte de teslim edebiliyorsunuz.",
  },
  {
    icon: BusFront,
    title: "Otogara Teslimat",
    description:
      "Şehirlerarası seyahatlerinizde otogara araç teslimatı hizmeti sunuyoruz.",
  },
  {
    icon: Car,
    title: "Zengin Araç Çeşitliliği",
    description:
      "Yüksek model, bakımlı ve farklı ihtiyaçlara uygun geniş bir araç yelpazesiyle hizmetinizdeyiz.",
  },
  {
    icon: Wrench,
    title: "Periyodik Bakım",
    description:
      "Kiraya verilen tüm araçlarımızın periyodik bakımları düzenli olarak yapılmaktadır.",
  },
  {
    icon: Gauge,
    title: "Düşük Kilometre",
    description:
      "Araçlarımız düşük kilometreye sahip, mükemmel kondisyonda araçlardan oluşmaktadır.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Hizmetlerimiz
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Konforunuz İçin Buradayız
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Zengin çeşit ve yüksek model bakımlı araçlarımızla hizmetinizdeyiz.
            Kiraya verilen tüm araçlarımız periyodik bakımları yapılan ve düşük
            kilometreye sahip mükemmel kondisyona sahip araçlardır.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

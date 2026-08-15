import Image from "next/image";
import { Fuel, MessageCircle, Settings2 } from "lucide-react";
import { VEHICLES, formatTL, vehicleWhatsAppLink } from "@/lib/constants";

export default function VehicleFleet() {
  return (
    <section id="filo" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Araç Filomuz
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Size Uygun Aracı Seçin
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Bakımlı ve düşük kilometreli araçlarımızdan birini seçin, WhatsApp
            üzerinden hemen rezervasyon oluşturun.
          </p>
        </div>

        <div className="mx-auto mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-surface-2">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                {vehicle.year && (
                  <span className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                    {vehicle.year}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {vehicle.brand} <span className="text-accent">{vehicle.model}</span>
                </h3>

                {(vehicle.fuel || vehicle.transmission) && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {vehicle.fuel && (
                      <span className="flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-xs font-medium text-muted">
                        <Fuel size={14} className="text-accent" />
                        {vehicle.fuel}
                      </span>
                    )}
                    {vehicle.transmission && (
                      <span className="flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-xs font-medium text-muted">
                        <Settings2 size={14} className="text-accent" />
                        {vehicle.transmission}
                      </span>
                    )}
                  </div>
                )}

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted">
                      Günlük
                    </span>
                    <div className="text-2xl font-extrabold text-foreground">
                      {formatTL(vehicle.dailyPrice)} TL
                    </div>
                  </div>
                </div>

                <a
                  href={vehicleWhatsAppLink(vehicle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle size={18} />
                  Hemen Kirala (WhatsApp)
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

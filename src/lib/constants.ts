export const COMPANY_NAME = "A&G OTO KİRALAMA";

export const ADDRESS =
  "Subayevleri Mah. Fahrettin Altay Cad. Güzin Sokak No:48/B, Keçiören/Ankara";

export const PHONE_DISPLAY = "+90 532 507 00 35";
export const PHONE_TEL = "+905325070035";
export const WHATSAPP_NUMBER = "905325070035";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK_GENERAL = buildWhatsAppLink(
  "Merhaba, A&G OTO KİRALAMA hakkında bilgi almak istiyorum."
);

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  year?: number;
  fuel?: string;
  transmission?: string;
  dailyPrice: number;
  image: string;
};

export const VEHICLES: Vehicle[] = [
  {
    id: "audi-a4",
    brand: "AUDI",
    model: "A4",
    year: 2023,
    fuel: "TDI (Dizel)",
    transmission: "Otomatik",
    dailyPrice: 4500,
    image: "/vehicles/audi-a4.jpeg",
  },
  {
    id: "mercedes-c200",
    brand: "MERCEDES-BENZ",
    model: "C200 4MATIC AMG",
    year: 2025,
    transmission: "Otomatik",
    dailyPrice: 5900,
    image: "/vehicles/mercedes-c200.jpeg",
  },
  {
    id: "vw-taigo",
    brand: "VOLKSWAGEN",
    model: "TAIGO",
    year: 2025,
    fuel: "Benzinli",
    transmission: "Otomatik",
    dailyPrice: 2500,
    image: "/vehicles/vw-taigo.jpeg",
  },
  {
    id: "vw-passat",
    brand: "VOLKSWAGEN",
    model: "PASSAT",
    year: 2020,
    fuel: "Benzinli",
    transmission: "Manuel",
    dailyPrice: 2500,
    image: "/vehicles/vw-passat.jpeg",
  },
  {
    id: "hyundai-i20",
    brand: "HYUNDAI",
    model: "İ20",
    year: 2023,
    fuel: "Benzinli",
    transmission: "Otomatik",
    dailyPrice: 1750,
    image: "/vehicles/hyundai-i20.jpeg",
  },
  {
    id: "renault-megane-4",
    brand: "RENAULT",
    model: "MEGANE 4",
    year: 2020,
    fuel: "Dizel",
    transmission: "Otomatik",
    dailyPrice: 1900,
    image: "/vehicles/renault-megane-4.jpeg",
  },
  {
    id: "vw-jetta",
    brand: "VOLKSWAGEN",
    model: "JETTA",
    fuel: "Dizel",
    transmission: "Otomatik",
    dailyPrice: 1900,
    image: "/vehicles/vw-jetta.jpeg",
  },
  {
    id: "citroen-c-elysee",
    brand: "CITROËN",
    model: "C-ELYSÉE",
    year: 2020,
    fuel: "Dizel",
    transmission: "Manuel",
    dailyPrice: 1500,
    image: "/vehicles/citroen-c-elysee.jpeg",
  },
  {
    id: "fiat-egea",
    brand: "FIAT",
    model: "EGEA",
    fuel: "Benzinli",
    transmission: "Manuel",
    dailyPrice: 1500,
    image: "/vehicles/fiat-egea.jpeg",
  },
  {
    id: "hafif-ticari",
    brand: "HAFİF TİCARİ",
    model: "ARAÇLAR",
    dailyPrice: 1500,
    image: "/vehicles/hafif-ticari.jpeg",
  },
];

export function formatTL(amount: number) {
  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 0,
  }).format(amount);
}

export function vehicleWhatsAppLink(vehicle: Vehicle) {
  const yearPart = vehicle.year ? ` (${vehicle.year})` : "";
  return buildWhatsAppLink(
    `Merhaba, ${vehicle.brand} ${vehicle.model}${yearPart} modelini kiralamak istiyorum. Müsaitlik hakkında bilgi alabilir miyim?`
  );
}

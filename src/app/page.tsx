import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ServiceAreas from "@/components/ServiceAreas";
import Services from "@/components/Services";
import VehicleFleet from "@/components/VehicleFleet";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <ServiceAreas />
      <VehicleFleet />
      <Contact />
    </>
  );
}

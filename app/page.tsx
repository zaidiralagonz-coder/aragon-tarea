import HeroSection from "@/components/HeroSection";
import ServiciosSection from "@/components/ServiciosSection";
import ComoFuncionaSection from "@/components/ComoFuncionaSection";
import Cotizador from "@/components/Cotizador";
import ContactoSection from "@/components/ContactoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiciosSection />
      <ComoFuncionaSection />
      <Cotizador />
      <ContactoSection />
    </main>
  );
}
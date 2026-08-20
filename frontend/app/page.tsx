import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientsMarquee />
      <About />
      <Services />
      <SelectedWork />
      <Process />
      <ContactFooter />
    </main>
  );
}
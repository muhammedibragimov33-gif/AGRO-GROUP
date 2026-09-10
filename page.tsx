import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Ledger } from "@/components/sections/Ledger";
import { Activities } from "@/components/sections/Activities";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Ledger />
      <Activities />
      <About />
      <Footer />
    </>
  );
}

import { Artigos } from "@/components/artigos/Artigos";
import Banner from "@/components/banner/Banner";
import { Depoimentos } from "@/components/depoimentos/Depoimentos";
import { Footer } from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import { Navbar } from "@/components/navbar/Navbar";
import { NewsLetter } from "@/components/newsletter/NewsLetter";
import { Participe } from "@/components/participe/Participe";

export default function Home() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <Banner />
      <Participe />
      <Artigos />
      <Depoimentos />
        <NewsLetter />
      <Footer />
    </div>
  );
}

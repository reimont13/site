import { FormHero } from "../form/FormHero";

export default function Hero() {
  return (
    <div className="w-full bg-[url('/congresso_em_foco-hero.png')] bg-top bg-no-repeat bg-cover opacity-100">
      <div
        className="2xl:py-16 2xl:px-30
                    xl:py-12 xl:px-22
                    lg:py-10 lg:px-16
                    md:py-8 md:px-10
                    py-6 px-6"
      >
        <FormHero />
      </div>
    </div>
  );
}

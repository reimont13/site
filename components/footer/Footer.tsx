import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <section className="bg-gray-400 text-white pt-80 pb-27">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-6">
      <Image
              src="/logo.svg"
              alt="Interface da plataforma Site.Set"
              width={690}
              height={84}
              className="pt-6"
            />
        
        {/* Social Media Icons */}
        <div className="flex gap-6 items-center pt-10">
          <a href="#" className="hover:text-coral-banner transition-colors">
            <Facebook size={60} strokeWidth={2} />
          </a>
          <a href="#" className="hover:text-coral-banner transition-colors">
            <Instagram size={60} strokeWidth={2} />
          </a>
          <a href="#" className="hover:text-coral-banner transition-colors">
            <Youtube size={75} strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}



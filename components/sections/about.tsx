import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";

export function About() {
  return (
    <section id="about" className="relative">
      <div className="relative mb-6">
        <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-800 mx-auto transform hover:scale-105 transition-all duration-300 hover:ring-4">
          <Image
            src="/profile.jpg"
            alt="Emre Kentli"
            fill
            className="object-cover transform hover:scale-110 transition-transform duration-500"
            priority
          />
        </div>
      </div>

      <div className="text-center space-y-2 relative">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
          Emre Kentli
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Software Engineer
        </p>
      </div>

      <div className="text-center space-y-3 text-sm relative">
        <p className="text-zinc-600 dark:text-zinc-400">
          Merhaba 👋, şu anda <Link href="https://www.yapikredi.com.tr" className="text-black dark:text-white hover:underline font-medium">@Yapı Kredi Teknoloji</Link>'de <Link href="https://infonal.com" className="text-black dark:text-white hover:underline font-medium">@Infonal</Link> bünyesinde Software Engineer olarak çalışıyorum.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Kart Yetkilendirme uygulamaları geliştirme ve bakımı üzerine çalışıyorum.
        </p>
      </div>

      <SocialLinks />
    </section>
  );
} 
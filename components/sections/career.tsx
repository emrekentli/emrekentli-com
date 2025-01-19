interface JobProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

function Job({ title, company, location, period, description }: JobProps) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-xl transition-all duration-200 ease-in-out hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-sm group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold group-hover:text-black dark:group-hover:text-white transition-colors">{title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{company}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">{location}</p>
        </div>
        <span className="text-xs text-zinc-500 dark:text-zinc-500">{period}</span>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}

export function Career() {
  const jobs = [
    {
      title: "Software Engineer",
      company: "@Yapı Kredi Teknoloji via @Infonal",
      location: "İstanbul, Türkiye",
      period: "Eylül 2024 - Güncel",
      description: "Kart Yetkilendirme uygulamalarının geliştirilmesi ve bakımında görev alıyorum. .NET, Spring Boot ve C++ teknolojilerini kullanarak uygulamaların performansını artırmak için optimizasyonlar yapıyorum."
    },
    {
      title: "Software Developer",
      company: "@Catchsoft",
      location: "İstanbul, Türkiye",
      period: "Kasım 2023 - Ağustos 2024",
      description: "E-ticaret, Omnilook ve Foundation CRM projelerinde görev aldım. Spring Boot ve Next.js teknolojilerini kullanarak mikroservis mimarisi üzerinde çalıştım."
    },
    {
      title: "Jr. Java Developer",
      company: "@Venhancer",
      location: "İstanbul, Türkiye",
      period: "Temmuz 2023 - Kasım 2023",
      description: "FibaEmeklilik sigorta projesi için REST API'ler geliştirdim. Spring Boot kullanarak Redis, EDD ve DDD teknolojileri ile çalıştım."
    },
    {
      title: "Jr. Full Stack Developer",
      company: "@MS Teknoloji",
      location: "İstanbul, Türkiye",
      period: "Temmuz 2022 - Mayıs 2023",
      description: "Java, Laravel ve Vue.js ile CMS ve ERP projeleri geliştirdim. Cache sistemleri ve MVC mimarisi üzerinde çalıştım."
    }
  ];

  return (
    <section id="career" className="w-full pt-16">
      <h2 className="text-2xl font-bold mb-4">Kariyer</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        Toplamda <span className="text-black dark:text-white font-medium">2+ yıllık</span> yazılım geliştirme deneyimim var.
      </p>

      <div className="space-y-6">
        {jobs.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </div>
    </section>
  );
} 
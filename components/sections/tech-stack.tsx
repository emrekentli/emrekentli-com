interface TechCardProps {
  title: string;
  technologies: string;
}

function TechCard({ title, technologies }: TechCardProps) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl text-center">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">{technologies}</p>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="stack" className="w-full pt-16">
      <h2 className="text-2xl font-bold mb-4">Teknolojiler</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        Kullandığım teknolojiler ve araçlar
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <TechCard
          title="Backend"
          technologies="Java, Spring Boot, Go"
        />
        <TechCard
          title="Frontend"
          technologies="React, Angular, Next.js, Vue.js"
        />
        <TechCard
          title="DevOps"
          technologies="Docker, Kubernetes, AWS"
        />
        <TechCard
          title="Veritabanı"
          technologies="PostgreSQL, MongoDB, Redis"
        />
      </div>
    </section>
  );
} 
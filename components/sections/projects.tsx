interface ProjectCardProps {
  title: string;
  description: string;
}

function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-xl transition-all duration-200 ease-in-out hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">{title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Foundation CRM",
      description: "12 mikroservis ile geliştirilmiş, DDD, EDD, RabbitMQ ve Redis teknolojilerini kullanan CRM projesi"
    },
    {
      title: "OmniLook",
      description: "Restoran sektörü için geliştirilen analitik uygulama - Vue.js & Spring Boot"
    }
  ];

  return (
    <section id="projects" className="w-full pt-16">
      <h2 className="text-2xl font-bold mb-4">Projeler</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">Çalıştığım önemli projeler.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
} 
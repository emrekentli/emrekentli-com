import { Navigation } from "@/components/navigation";

const projects = [
  {
    number: "01",
    title: "Foundation CRM",
    description:
      "12 mikroservisli CRM altyapısında çağrı merkezi, GSM ve banka entegrasyonları geliştirdim; XLSX, DOCX, CSV ve XML dosya işleme kabiliyetleri ekledim.",
    tags: ["Spring Boot", "Vue.js", "DDD", "RabbitMQ", "Redis", "SOAP"],
    tone: "violet",
    mark: "CRM",
  },
  {
    number: "02",
    title: "OmniLook",
    description:
      "Restoran POS cihazlarından gerçek zamanlı veri alan; açık masalar, kapanan masalar ve satış performansı gibi metrikleri anlamlı içgörülere dönüştüren analitik ürün.",
    tags: ["Vue.js", "React Native", "Spring Boot", "Queues", "SQL"],
    tone: "amber",
    mark: "OL",
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "Kullanıcıların kendi mağazalarını kurup farklı pazaryerleriyle entegre edebildiği, tenant tabanlı ve ölçeklenebilir bulut e-ticaret platformu.",
    tags: ["Spring Boot", "Next.js", "Multi-tenant", "SEO", "Cloud"],
    tone: "mint",
    mark: "EC",
  },
  {
    number: "04",
    title: "Altın Barkod",
    description:
      "Masaüstü ve .NET uygulamalarını modern yapılara taşıdım; masaüstü deneyimini Vue.js tabanlı web ürününe dönüştürüp backend kodunu yeniden yapılandırdım.",
    tags: ["Vue.js", ".NET", "Modernization", "Web Migration"],
    tone: "coral",
    mark: "AB",
  },
] as const;

const roles = [
  {
    period: "Tem 2025 — bugün",
    role: "Software Engineer",
    company: "Yapı Kredi Teknoloji",
    detail:
      "Temel bankacılık uygulamalarının modernizasyonunda; yüksek trafikli sistemler, olay güdümlü mimariler, performans, izlenebilirlik ve bankacılık standartları üzerine çalışıyorum.",
  },
  {
    period: "Eyl 2024 — Tem 2025",
    role: "Software Engineer",
    company: "Yapı Kredi Teknoloji · Infonal",
    detail:
      "Kart provizyon sistemlerinde .NET, Spring Boot ve C++ ile kritik ödeme akışları; idempotency, retry ve hata yönetimi mekanizmaları geliştirdim.",
  },
  {
    period: "Kas 2023 — Ağu 2024",
    role: "Software Engineer",
    company: "Catchsoft",
    detail:
      "E-ticaret, CRM ve omni-channel ürünlerinde Spring Boot mikroservisleri, Next.js ve Vue.js arayüzleri; DDD, EDD, Redis ve asenkron süreçler geliştirdim.",
  },
  {
    period: "Tem 2023 — Kas 2023",
    role: "Java Developer",
    company: "Venhancer",
    detail:
      "FibaSigorta için Spring Boot REST servisleri ve Next.js özellikleri geliştirdim; üçüncü taraf sigorta servisleriyle güvenilir entegrasyonlar kurdum.",
  },
  {
    period: "Tem 2022 — May 2023",
    role: "Full Stack Developer",
    company: "MS Teknoloji",
    detail:
      "Kurumsal backend uygulamaları, REST servisleri ve ilişkisel veri tabanı çözümlerinin analiz, geliştirme ve bakım süreçlerinde görev aldım.",
  },
] as const;

const stack = [
  ["Backend", "Java · Go · Spring · JPA · Hibernate · .NET"],
  ["Architecture", "Microservices · DDD · EDA · Unit Testing"],
  ["Messaging", "Kafka · RabbitMQ · Redis · Hazelcast"],
  ["Frontend", "Next.js · React · Vue.js · Angular"],
  ["Data & API", "Oracle · PostgreSQL · MongoDB · REST · SOAP · gRPC"],
  ["Platform", "AWS · Docker · Kubernetes · CI/CD · DigitalOcean"],
] as const;

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function GithubIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>;
}

function LinkedinIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.5 8.2H3V21h3.5V8.2ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.65c0-3.85-2.05-5.64-4.8-5.64a4.15 4.15 0 0 0-3.75 2.06V8.2H9V21h3.5v-6.34c0-1.67.32-3.29 2.4-3.29 2.05 0 2.08 1.92 2.08 3.4V21H21v-7.35Z" /></svg>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">İçeriğe geç</a>
      <Navigation />
      <main id="content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow reveal reveal-1"><span className="status-dot" />Core banking · Card authorisation</div>
            <h1 id="hero-title" className="reveal reveal-2">Merhaba, ben <span>Emre.</span><br />Sağlam sistemler geliştiririm.</h1>
            <p className="hero-lede reveal reveal-3">Yüksek trafikli, kritik iş süreçlerini hızlı, güvenilir ve sürdürülebilir yazılım sistemlerine dönüştüren bir software engineer&apos;ım.</p>
            <div className="hero-actions reveal reveal-4">
              <a className="button button-primary" href="#projects">Ürettiklerime göz at <ArrowIcon /></a>
              <a className="button button-quiet" href="mailto:emrekentlii@gmail.com">Birlikte çalışalım</a>
            </div>
          </div>

          <div className="hero-visual hero-code reveal reveal-3" aria-label="Yazılım mimarisi illüstrasyonu">
            <div className="orbit orbit-one">Java</div><div className="orbit orbit-two">Spring</div>
            <div className="console-glow" />
            <div className="console-card">
              <div className="console-top"><span /><span /><span /><b>authorisation.service</b></div>
              <pre><code><i>public</i> Result authorize(Request request) &#123;{"\n"}  validate(request);{"\n"}  ensureIdempotency();{"\n"}  publish(<strong>APPROVED</strong>);{"\n"}{"\n"}  <i>return</i> Result.success();{"\n"}&#125;</code></pre>
              <div className="console-status"><span /> All systems operational</div>
            </div>
            <div className="system-chip chip-one">EDA</div><div className="system-chip chip-two">99.9%</div>
            <svg className="hero-squiggle" aria-hidden="true" viewBox="0 0 130 70"><path d="M4 54c25-2 23-42 48-40 23 2 19 41 43 40 17-1 19-19 31-28" /></svg>
            <div className="spark spark-one">✦</div><div className="spark spark-two">✦</div>
          </div>
        </section>

        <div className="marquee" aria-label="Uzmanlık alanları"><div className="marquee-track"><span>Backend Engineering</span><i>✦</i><span>Distributed Systems</span><i>✦</i><span>Event-Driven Architecture</span><i>✦</i><span>Core Banking</span><i>✦</i><span aria-hidden="true">Backend Engineering</span><i aria-hidden="true">✦</i><span aria-hidden="true">Distributed Systems</span><i aria-hidden="true">✦</i></div></div>

        <section id="about" className="about section-shell section-pad" aria-labelledby="about-title">
          <div className="section-kicker"><span>01</span> Hakkımda</div>
          <div className="about-grid">
            <h2 id="about-title">Kodun ötesinde,<em> güvenilir sistemler.</em></h2>
            <div className="about-copy">
              <p>Finans, sigorta, CRM, analitik ve e-ticaret alanlarında; insanların her gün güvendiği servisler geliştiriyorum. Benim için iyi yazılım yalnızca çalışan kod değil, değişime dayanıklı ve anlaşılır bir sistemdir.</p>
              <p>Yapı Kredi Teknoloji&apos;de temel bankacılık ve kart provizyon uygulamalarının modernizasyonu; performansı, dayanıklılığı ve izlenebilirliği üzerine çalışıyorum.</p>
              <a className="text-link" href="#experience">Yolculuğumu gör <ArrowIcon /></a>
            </div>
          </div>
          <div className="profile-notes">
            <div><span>Eğitim</span><strong>Beykent Üniversitesi</strong><p>Bilgisayar Mühendisliği · 2020–2024</p></div>
            <div><span>Dil</span><strong>İngilizce</strong><p>B2 · Professional working proficiency</p></div>
            <div><span>Odak</span><strong>Dağıtık Sistemler</strong><p>Performans · Scalability · Resilience</p></div>
          </div>
          <div className="stack-grid">{stack.map(([title, technologies], index) => <article className="stack-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{technologies}</p></article>)}</div>
        </section>

        <section id="projects" className="projects section-pad" aria-labelledby="projects-title"><div className="section-shell">
          <div className="section-heading"><div><div className="section-kicker light"><span>02</span> Seçili işler</div><h2 id="projects-title">Fikirden çalışan ürüne.</h2></div><p>Teknik kararların gerçek iş sonuçlarına dönüştüğü projeler.</p></div>
          <div className="project-list">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.title}><div className="project-content"><span className="project-number">{project.number}</span><h3>{project.title}</h3><p>{project.description}</p><ul aria-label={`${project.title} teknolojileri`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div><div className="project-art" aria-hidden="true"><div className="code-window"><div className="window-bar"><i /><i /><i /></div><div className="project-mark">{project.mark}</div><span className="code-line long" /><span className="code-line medium" /><span className="code-line short" /></div></div></article>)}</div>
        </div></section>

        <section id="experience" className="experience section-shell section-pad" aria-labelledby="experience-title"><div className="section-kicker"><span>03</span> Deneyim</div><div className="experience-layout"><div className="experience-intro"><h2 id="experience-title">Her durakta daha iyi sistemler.</h2><p>2022&apos;den beri kurumsal ürünler ve kritik altyapılar geliştiriyorum.</p></div><ol className="timeline">{roles.map((item) => <li key={`${item.company}-${item.period}`}><span className="timeline-dot" /><time>{item.period}</time><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.detail}</p></li>)}</ol></div></section>

        <section id="contact" className="contact section-shell" aria-labelledby="contact-title"><div className="contact-card"><span className="contact-spark" aria-hidden="true">✦</span><p>Sıradaki iyi fikir için</p><h2 id="contact-title">Birlikte bir şeyler üretelim.</h2><a className="button button-inverse" href="mailto:emrekentlii@gmail.com">emrekentlii@gmail.com <ArrowIcon /></a></div></section>
      </main>

      <footer className="footer section-shell"><div><a className="brand footer-brand" href="#content" aria-label="Sayfanın başına dön">EK<span>.</span></a><p>Merakla tasarlandı, özenle kodlandı.</p></div><div className="socials"><a href="https://github.com/emrekentlii" target="_blank" rel="noreferrer noopener"><GithubIcon /> GitHub</a><a href="https://www.linkedin.com/in/emrekentli" target="_blank" rel="noreferrer noopener"><LinkedinIcon /> LinkedIn</a></div><small>© {new Date().getFullYear()} Emre Kentli</small></footer>
    </>
  );
}

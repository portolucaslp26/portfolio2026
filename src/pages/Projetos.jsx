export default function Projetos() {
  const projects = [
    {
      title: "Core Banking Modernization",
      role: "Lead Backend Engineer",
      description: "Migração de monólito legado para arquitetura de microsserviços orientada a eventos, aumentando a resiliência e a taxa de transferência.",
      tags: ["[Java]", "[Spring Boot]", "[Kafka]", "[PostgreSQL]"],
      github: "./assets/IMG_1.svg"
    },
    {
      title: "Real-time Analytics Pipeline",
      role: "Data Engineer",
      description: "Desenvolvimento de pipeline de ingestion de dados em tempo real processando mais de 1M eventos/minuto para detecção de fraudes.",
      tags: ["[Python]", "[FastAPI]", "[Redis]", "[Kubernetes]"],
      github: "./assets/IMG_1.svg"
    },
    {
      title: "Global Payments Gateway",
      role: "Software Engineer",
      description: "Integração de múltiplos provedores de pagamento com roteamento dinâmico baseado em taxas e disponibilidade.",
      tags: ["[Node.js]", "[NestJS]", "[MongoDB]", "[Docker]"],
      github: "./assets/IMG_1.svg"
    },
    {
      title: "Internal Developer Portal",
      role: "Fullstack Developer",
      description: "Catálogo de serviços e plataforma de self-service para provisionamento de infraestrutura, reduzindo o onboarding em 40%.",
      tags: ["[React]", "[TypeScript]", "[Go]", "[Terraform]"],
      github: "./assets/IMG_1.svg"
    },
    {
      title: "Identity & Access Management",
      role: "Security Engineer",
      description: "Implementação de serviço de autenticação centralizado com suporte a OAuth2, OIDC e MFA.",
      tags: ["[Go]", "[gRPC]", "[PostgreSQL]", "[Redis]"],
      github: "./assets/IMG_1.svg"
    },
    {
      title: "Legacy Mainframe Sync",
      role: "Backend Developer",
      description: "Bridge bidirecional segura entre sistemas de mainframe antigos e APIs REST modernas.",
      tags: ["[Java]", "[Apache Camel]", "[IBM MQ]"],
      github: "./assets/IMG_1.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-[#bdc1ca] font-['IBM_Plex_Mono'] selection:bg-white selection:text-black">
      <main className="pt-32 pb-20 px-6 lg:px-28 max-w-[1440px] mx-auto">
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl font-bold text-[#E0E0E0]">&gt;</span>
            <h1 className="text-3xl font-bold text-white font-['Space_Mono'] tracking-tighter">
              ls ./projetos
            </h1>
          </div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#bdc1ca] border-b border-[#323743] pb-8">
            Um registro técnico de MVPs construídos, monolitos modernizados e integrações sistêmicas. Foco em escalabilidade, resiliência e código limpo.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#1e2128] border border-[#323743] p-6 flex flex-col h-full group hover:border-[#E0E0E0]/30 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-[#f3f4f6] leading-tight font-['IBM_Plex_Mono']">
                  {project.title}
                </h3>
                <img src={project.github} alt="Github" className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs mb-6">
                <span className="text-[#E0E0E0]">role: </span>
                <span className="text-[#BDC1CA]">{project.role}</span>
              </p>
              <p className="text-sm leading-relaxed text-[#bdc1ca] mb-8 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-1 bg-[#171a1f] border border-[#323743] text-[10px] text-[#bdc1ca]">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full py-2.5 px-4 bg-black border border-[#323743] flex items-center justify-between group/btn hover:bg-white hover:text-black transition-all">
                <span className="text-[10px] font-bold uppercase tracking-widest">Ver case completo</span>
                <img src="./assets/IMG_5.svg" alt="Arrow" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </section>

        <section className="relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-4 z-10">
            <span className="text-[10px] text-[#bdc1ca] tracking-widest">[ STATIC_TEMPLATE_VIEW ]</span>
          </div>
          <div className="border-t border-dashed border-[#323743]/50 pt-16">
            <div className="bg-[#1e2128]/30 border border-[#323743] p-6 lg:p-12 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 border border-[#E0E0E0]/50 text-[10px] font-bold text-[#E0E0E0]">STATUS: COMPLETED</span>
                    <span className="text-xs text-[#bdc1ca]">2023</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white font-['Space_Mono'] tracking-tighter">
                    Core Banking Modernization
                  </h2>
                  <div className="flex gap-4 border-l-2 border-[#E0E0E0] pl-6 py-2 max-w-2xl">
                    <p className="text-lg leading-relaxed text-[#bdc1ca]">
                      Substituição de um monólito legado crítico por uma arquitetura distribuída, resiliente e altamente escalável, melhorando a disponibilidade do sistema de pagamentos em 99.99%.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="w-10 h-10 flex items-center justify-center bg-black border border-[#323743] hover:bg-white/10 transition-colors">
                    <img src="./assets/IMG_1.svg" alt="Github" className="w-5 h-5" />
                  </button>
                  <button className="flex items-center gap-3 px-4 py-2 bg-black border border-[#323743] hover:bg-white hover:text-black transition-all group">
                    <img src="./assets/IMG_6.svg" alt="External" className="w-4 h-4 group-hover:invert" />
                    <span className="text-xs font-bold uppercase tracking-wider">Live Demo</span>
                  </button>
                </div>
              </div>

              <div className="mb-16">
                <div className="flex items-center gap-2 mb-6">
                  <img src="./assets/IMG_7.svg" alt="Layers" className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Architecture Topology</span>
                </div>
                <div className="relative aspect-video lg:aspect-[21/9] border border-[#323743] bg-[#171a1f] overflow-hidden">
                  <img 
                    src="./assets/IMG_8.webp" 
                    alt="Architecture Diagram" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4 space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#323743]">
                    <img src="./assets/IMG_9.svg" alt="Code" className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Tech Stack</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Language", value: "Java 17, Go" },
                      { label: "Framework", value: "Spring Boot 3" },
                      { label: "Messaging", value: "Apache Kafka" },
                      { label: "Database", value: "PostgreSQL, Redis" },
                      { label: "Infra", value: "AWS (EKS), Terraform" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm border-b border-[#323743]/30 pb-2">
                        <span className="text-[#bdc1ca]">{item.label}</span>
                        <span className="text-white font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#323743]">
                    <img src="./assets/IMG_10.svg" alt="Server" className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Key Contributions</span>
                  </div>
                  <ul className="space-y-6">
                    {[
                      "Liderança técnica de um squad de 6 engenheiros durante o ciclo completo de refatoração.",
                      "Desenho e implementação de uma arquitetura Event-Sourcing para rastreabilidade de transações.",
                      "Automação completa do pipeline de CI/CD utilizando GitHub Actions e ArgoCD.",
                      "Migração zero-downtime da base de dados monolítica para instâncias isoladas por domínio."
                    ].map((text, i) => (
                      <li key={i} className="flex gap-4 text-sm leading-relaxed">
                        <span className="text-[#E0E0E0] shrink-0">[*]</span>
                        <span className="text-[#bdc1ca]">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-16">
                <div className="flex items-center gap-2 mb-6 pb-2 border-b border-[#323743]">
                  <img src="./assets/IMG_11.svg" alt="Activity" className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Outcomes</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { value: "99.99%", label: "Uptime" },
                    { value: "+400%", label: "Throughput" },
                    { value: "-60ms", label: "Latency" },
                    { value: "5x/day", label: "Deployments" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#171a1f] border border-[#323743] p-6 text-center">
                      <div className="text-2xl font-bold text-white font-['Space_Mono'] mb-1">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#bdc1ca]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
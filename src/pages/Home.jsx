import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const getAlternateTitle = (title) => {
    const alternates = {
      'Arquitetura Escalável': 'Sistemas Distribuídos',
      'Integrações Complexas': 'API Management',
      'CI/CD & Automação': 'DevOps Pipeline'
    };
    return alternates[title] || title;
  };
  return (
    <div className="min-h-screen bg-black text-[#E0E0E0] font-['IBM_Plex_Mono'] selection:bg-white selection:text-black">
      <main className="py-16 sm:py-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E0E0E0]/5 border border-[#E0E0E0]/30 rounded-full mb-8">
                <div className="w-2 h-2 bg-[#E0E0E0] rounded-full opacity-90" />
                <span className="text-[10px] sm:text-xs uppercase tracking-wider">Status: Disponível para novos desafios</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8 tracking-tighter">
                  <span className="text-[#f3f4f6]">Lucas Porto —</span><br />
              </h3>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-8 tracking-tighter">
                  <TypeAnimation
                    sequence={[
                      "Soluções em Arquitetura e Desenvolvimento de Software.",
                      2000  
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-[#BDC1CA] font-['IBM_Plex_Mono']"
                    repeat={1}
                  />
                </h3>
              
              <p className="text-lg sm:text-xl text-[#bdc1ca] leading-relaxed max-w-2xl mb-12">
                Especialista na construção de arquiteturas de microsserviços escaláveis, integrações de sistemas e pipelines de CI/CD robustos, potencializados por metodologias de Inteligência Artificial.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-4">
                <div className="flex items-center gap-4">
                  <Link to="/contato" className="flex items-center gap-3 px-8 py-3 bg-[#E0E0E0] text-[#19191F] font-bold text-sm hover:bg-white transition-all shadow-lg">
                    <img src="./assets/IMG_4.svg" alt="Terminal" className="w-4 h-4 invert" />
                    Enviar e-mail
                  </Link>
                  <Link to="/contato" className="px-8 py-3 border border-[#323743] text-[#f3f4f6] font-medium text-sm hover:bg-[#323743]/20 transition-all">
                    Agendar reunião
                  </Link>
                </div>
                
                <div className="hidden sm:block w-px h-8 bg-[#323743] mx-2" />
                
                <div className="flex items-center gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-[#bdc1ca] hover:text-white">
                    <img src="./assets/IMG_1.svg" alt="GitHub" className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-[#bdc1ca] hover:text-white">
                    <img src="./assets/IMG_2.svg" alt="LinkedIn" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0A0A0A] border border-[#323743] rounded-md shadow-2xl overflow-hidden">
                <div className="bg-[#131313] px-4 py-2 border-b border-[#323743] flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                  </div>
                  <span className="text-[10px] text-[#bdc1ca]">root@lporto-env:~</span>
                  <div className="w-12" />
                </div>
                <div className="p-6 text-sm leading-relaxed font-['IBM_Plex_Mono']">
                  <div className="flex gap-2 mb-1">
                    <span className="text-[#E0E0E0]">$</span>
                    <span className="text-[#f3f4f6]">./initialize_system.sh</span>
                  </div>
                  <div className="text-[#888888] mb-2">&gt; Loading core competencies...</div>
                  <div className="space-y-1 mb-6">
                    <div className="flex gap-4"><span className="text-[#bdc1ca]">[OK]</span> <span className="text-[#bdc1ca]">Microservices Architecture</span></div>
                    <div className="flex gap-4"><span className="text-[#bdc1ca]">[OK]</span> <span className="text-[#bdc1ca]">Event-Driven Systems</span></div>
                    <div className="flex gap-4"><span className="text-[#bdc1ca]">[OK]</span> <span className="text-[#bdc1ca]">CI/CD Delivery Pipelines</span></div>
                    <div className="flex gap-4"><span className="text-[#bdc1ca]">[OK]</span> <span className="text-[#bdc1ca]">AI Workflow Integrations</span></div>
                  </div>
                  <div className="flex gap-2 mb-1">
                    <span className="text-[#E0E0E0]">$</span>
                    <span className="text-[#f3f4f6]">systemctl status developer</span>
                  </div>
                  <div className="text-[#bdc1ca] font-semibold mb-4">● developer.service - Active (running)</div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#E0E0E0]">$</span>
                    <div className="w-2 h-4 bg-[#E0E0E0] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#171a1f] border-y border-[#323743] py-6 mb-24">
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { label: 'Anos de Experiência', value: '10+' },
               { label: 'Projetos Entregues', value: '50+' },
               { label: 'Foco em Escalabilidade', value: '100%' },
             ].map((stat, i) => (
               <div key={i} className="flex items-center gap-3">
                 <span className="text-[#E0E0E0] text-sm">[*]</span>
                 <span className="text-[#f3f4f6] font-bold text-lg">{stat.value}</span>
                 <span className="text-[#bdc1ca] text-sm">{stat.label}</span>
                 {i === 2 && <span className="w-3 h-3 bg-[#E0E0E0] animate-pulse ml-1" />}
               </div>
             ))}
          </div> */}
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-[#E0E0E0]">~/</span>
                <TypeAnimation
                  sequence={[
                    "habilidades-chave",
                    4000,
                    // "expertise-area",
                    // 4000
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-[#f3f4f6]"
                  repeat={1}
                />
              </h2>
            <p className="text-[#bdc1ca]">Fundamentos técnicos para construção de sistemas resilientes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Arquitetura Escalável',
                desc: 'Design e implementação de microsserviços e sistemas event-driven para alta disponibilidade e tolerância a falhas.',
                imgPath: './assets/IMG_5.svg'
              },
              {
                title: 'Integrações Complexas',
                desc: 'Orquestração de APIs, gateways e barramentos de mensageria conectando sistemas de forma segura.',
                imgPath: './assets/IMG_6.svg'
              },
              {
                title: 'CI/CD & Automação',
                desc: 'Construção de pipelines de entrega contínua, infraestrutura como código (IaC) e otimização de fluxos de DevOps.',
                imgPath: './assets/IMG_7.svg'
              }
            ].map((cap, i) => (
              <div key={i} className="bg-[#1e2128] p-8 border border-transparent hover:border-[#323743] transition-all group">
                <div className="w-12 h-12 bg-[#171a1f] border border-[#323743] flex items-center justify-center mb-8 group-hover:bg-[#323743] transition-colors">
                  <img src={cap.imgPath} alt={cap.title} className="w-6 h-6" />
                </div>
                  <h3 className="text-lg font-bold text-[#f3f4f6] mb-4">
                    {/* cap.title without animation */}
                    {cap.title}
                  </h3>
                <p className="text-sm text-[#bdc1ca] leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
                <h2 className="text-3xl font-bold mb-2">
                <span className="text-[#E0E0E0]">~/</span>
                <TypeAnimation
                  sequence={[
                    "projetos-recentes",
                    2000,
                    "recent-projects",
                    2000,
                    "últimos-trabalhos",
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-[#f3f4f6]"
                  repeat={Infinity}
                />
              </h2>
              <p className="text-[#bdc1ca]">Seleção de casos de estudo e modernização arquitetural.</p>
            </div>
            <Link to="/projetos" className="flex items-center gap-3 text-sm font-medium text-[#E0E0E0] hover:translate-x-1 transition-transform">
              Ver todos os projetos
              <img src="./assets/IMG_8.svg" alt="Arrow" className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fintech Core Banking',
                desc: 'Modernização de legado monolítico para arquitetura baseada em microsserviços reduzindo latência em 40%.',
                tags: ['Java', 'Spring Boot', 'Kafka', 'Kubernetes'],
                img: './assets/IMG_9.webp'
              },
              {
                title: 'AI Healthcare Pipeline',
                desc: 'Plataforma de ingestão de dados médicos em tempo real com processamento via modelos de IA.',
                tags: ['Python', 'FastAPI', 'AWS', 'TensorFlow'],
                img: './assets/IMG_10.webp'
              },
              {
                title: 'Global E-commerce API',
                desc: 'Desenvolvimento de gateway GraphQL escalável unificando serviços de inventário e pagamento globais.',
                tags: ['Node.js', 'GraphQL', 'Redis', 'Docker'],
                img: './assets/IMG_11.webp'
              }
            ].map((project, i) => (
              <div key={i} className="bg-black border border-[#323743] group overflow-hidden shadow-xl">
                <div className="relative h-48 overflow-hidden border-b border-[#323743]">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#f3f4f6] mb-3 font-['Space_Mono']">{project.title}</h3>
                  <p className="text-sm text-[#bdc1ca] mb-6 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[#171a1f] border border-[#323743] text-[10px] font-semibold text-[#bdc1ca]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/projetos" className="w-full flex items-center justify-between px-4 py-2 border border-[#f3f4f6] text-sm font-medium text-[#f3f4f6] hover:bg-white hover:text-black transition-all">
                    Ver case completo
                    <img src="./assets/IMG_8.svg" alt="Arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
         </section> */}

         <section className="bg-[#171a1f]/50 border-y border-[#323743] py-24">
           <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f3f4f6] mb-6 font-['Space_Mono']">
              Pronto para otimizar sua engenharia de software?
            </h2>
            <p className="text-[#bdc1ca] mb-10 leading-relaxed">
              Vamos conversar sobre como metodologias modernas e arquiteturas robustas podem acelerar seus resultados.
            </p>
            <Link to="/contato" className="inline-flex items-center gap-4 px-10 py-3 bg-[#E0E0E0] text-[#19191F] font-bold text-sm hover:bg-white transition-all">
              Iniciar projeto
              <img src="./assets/IMG_8.svg" alt="Arrow" className="w-4 h-4 invert" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
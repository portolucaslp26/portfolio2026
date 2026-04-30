import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';


function SkillCard({ icon, title, module, description, skills }) {
  return (
    <div className="bg-[#1e2128] border border-[#323743] flex flex-col overflow-hidden">
      <div className="bg-[#171a1f]/50 p-6 border-b border-[#323743]/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black border border-[#323743] flex items-center justify-center">
              <img src={icon} alt={title} className="w-5 h-5 text-[#E0E0E0]" />
            </div>
            <h2 className="text-lg font-bold text-white uppercase tracking-tight">{title}</h2>
          </div>
          <span className="text-[10px] opacity-50">[{module}]</span>
        </div>
        <p className="text-xs leading-relaxed opacity-70">{description}</p>
      </div>

      <div className="p-6 space-y-6 flex-grow">
        {skills.map((skill, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-50">&gt;</span>
                <span className="text-sm font-bold text-white">{skill.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-black border border-[#323743] uppercase">
                  {skill.level}
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                      key={i} 
                      className={`w-3 h-4 ${i <= skill.score ? 'bg-[#E0E0E0]' : 'bg-[#262a33]'} ${i === skill.score ? 'animate-pulse' : ''}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3 pl-4">
              <div className="w-[1px] bg-[#323743]/30 h-4" />
              <p className="text-[11px] opacity-70 leading-tight">{skill.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [currentFilter, setCurrentFilter] = useState('all');

  const skillCardsData = [
    {
      category: 'backend',
      icon: "./assets/IMG_5.svg",
      title: "Backend",
      module: "MOD_01",
      description: "// Arquiteturas robustas, microsserviços e APIs de alta performance.",
      skills: [
        { name: 'Java', level: 'Expert', score: 5, detail: 'Desenvolvimento core, concorrência e JVM tuning.' },
        { name: 'Spring Boot', level: 'Expert', score: 5, detail: 'Microsserviços, REST APIs, Security, Data.' },
        { name: 'Python', level: 'Avançado', score: 4, detail: 'Scripts de automação, FastAPI, integração AI.' },
        { name: 'Node.js', level: 'Intermediário', score: 3, detail: 'BFFs (Backend for Frontend) e serverless.' },
      ]
    },
    {
      category: 'frontend',
      icon: "./assets/IMG_6.svg",
      title: "Frontend",
      module: "MOD_02",
      description: "// Interfaces interativas, SPAs responsivas e componentização.",
      skills: [
        { name: 'Angular', level: 'Avançado', score: 4, detail: 'SPAs complexas, RxJS, gerenciamento de estado.' },
        { name: 'TypeScript', level: 'Avançado', score: 4, detail: 'Tipagem estática, interfaces, generics.' },
        { name: 'React', level: 'Intermediário', score: 3, detail: 'Componentes funcionais, hooks, ecossistema.' },
        { name: 'Tailwind CSS', level: 'Avançado', score: 4, detail: 'Estilização utilitária, design systems fluidos.' },
      ]
    },
    {
      category: 'data',
      icon: "./assets/IMG_7.svg",
      title: "Mensageria & Dados",
      module: "MOD_03",
      description: "// Persistência, caching e comunicação assíncrona entre sistemas.",
      skills: [
        { name: 'PostgreSQL', level: 'Avançado', score: 4, detail: 'Modelagem relacional, queries complexas, otimização.' },
        { name: 'Apache Kafka', level: 'Avançado', score: 4, detail: 'Arquiteturas orientadas a eventos (EDA).' },
        { name: 'Redis', level: 'Intermediário', score: 3, detail: 'Caching distribuído, filas em memória.' },
        { name: 'MongoDB', level: 'Intermediário', score: 3, detail: 'Modelagem de documentos, schema flexível.' },
      ]
    },
    {
      category: 'devops',
      icon: "./assets/IMG_8.svg",
      title: "DevOps & Cloud",
      module: "MOD_04",
      description: "// Infraestrutura como código, containers e orquestração.",
      skills: [
        { name: 'Docker', level: 'Expert', score: 5, detail: 'Containerização, multi-stage builds, otimização de imagens.' },
        { name: 'Kubernetes', level: 'Avançado', score: 4, detail: 'Orquestração, deployments, services, pods.' },
        { name: 'AWS', level: 'Intermediário', score: 3, detail: 'EC2, S3, RDS, ECS (serviços core).' },
        { name: 'Terraform', level: 'Intermediário', score: 3, detail: 'Provisão de infraestrutura automatizada (IaC).' },
      ]
    },
    {
      category: 'qa',
      icon: "./assets/IMG_9.svg",
      title: "Engenharia & Qualidade",
      module: "MOD_05",
      description: "// Garantia de software, testes automatizados e pipelines CI/CD.",
      skills: [
        { name: 'CI/CD Pipelines', level: 'Avançado', score: 4, detail: 'GitHub Actions, Jenkins, automação de builds.' },
        { name: 'JUnit / Mockito', level: 'Expert', score: 5, detail: 'Testes unitários e de integração em Java.' },
        { name: 'SonarQube', level: 'Avançado', score: 4, detail: 'Análise estática de código, code coverage.' },
        { name: 'Design Patterns', level: 'Avançado', score: 4, detail: 'GoF, SOLID, Clean Architecture.' },
      ]
    }
  ];

  const filteredCards = currentFilter === 'all' 
    ? skillCardsData 
    : skillCardsData.filter(card => card.category === currentFilter);

  return (
    <div className="min-h-screen bg-black text-[#bdc1ca] font-mono selection:bg-white/20 selection:text-white relative overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <img src="./assets/IMG_4.svg" alt="terminal" className="w-6 h-6 sm:w-8 sm:h-8" />
            <h1 className="text-2xl sm:text-4xl text-white tracking-tighter">
            &gt;
            <TypeAnimation
                    sequence={[
                      "principais_competencias.sh",
                      4000
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-[#BDC1CA] font-['IBM_Plex_Mono']"
                    repeat={1}
                  />
            </h1>
          </div>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed opacity-80">
            [INFO] Os níveis de proficiência nas stacks descritas são calibrados com base em experiência prática em ambientes de produção de alta demanda.
          </p>
        </section>

        <section className="mb-12 flex flex-wrap items-center gap-4">
          <span className="text-sm opacity-70">$ filter_by</span>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setCurrentFilter('all')}
              className={`px-4 py-3 border text-sm font-bold transition-colors min-h-[44px] ${
                currentFilter === 'all' 
                  ? 'bg-[#E0E0E0] text-black border-[#E0E0E0]' 
                  : 'bg-[#1e2128] text-[#bdc1ca] border-[#323743] hover:border-[#E0E0E0]'
              }`}
            >
              --all
            </button>
            {['backend', 'frontend', 'data', 'devops', 'qa'].map((filter) => (
              <button 
                key={filter} 
                onClick={() => setCurrentFilter(filter)}
                className={`px-4 py-3 border text-sm transition-colors min-h-[44px] ${
                  currentFilter === filter 
                    ? 'bg-[#E0E0E0] text-black border-[#E0E0E0] font-bold' 
                    : 'bg-[#1e2128] text-[#bdc1ca] border-[#323743] hover:border-[#E0E0E0]'
                }`}
              >
                --{filter}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <SkillCard 
                key={index}
                icon={card.icon}
                title={card.title}
                module={card.module}
                description={card.description}
                skills={card.skills}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-[#bdc1ca]">Nenhum resultado encontrado para o filtro selecionado.</p>
            </div>
          )}
        </section>

        {filteredCards.length > 0 && filteredCards.length < 5 && (
          <div className="bg-black border border-[#323743] p-8 flex flex-col items-center justify-center text-center space-y-6 min-h-[449px]">
            <img src="./assets/IMG_10.svg" alt="cpu" className="w-8 h-8 opacity-50" />
            <div className="space-y-2">
              <p className="text-sm">[SYSTEM_STATUS: NOMINAL]</p>
              <p className="text-sm font-bold uppercase tracking-wider">Capacidade de aprendizado contínuo: Ativada</p>
            </div>
            <p className="text-xs opacity-50 animate-pulse">
              <TypeAnimation
                sequence={[
                  "Aguardando novos desafios...",
                  4000
                ]}
                wrapper="span"
                speed={50}
                className="text-[#BDC1CA] font-['IBM_Plex_Mono']"
                repeat={1}
              />
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
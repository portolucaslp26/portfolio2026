import { TypeAnimation } from 'react-type-animation';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-black text-[#bdc1ca] font-['IBM_Plex_Mono'] selection:bg-white selection:text-black">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        <section>
          <div className="mb-8 text-sm">
            <div className="block sm:inline font-bold text-[#E0E0E0]">lucas@porto</div>
            {/* <div className="flex items-center gap-2 sm:inline-flex sm:ml-2"> */}
              <span className="text-[#f3f4f6]">&nbsp;</span>
              <span className="text-[#bdc1ca]">$</span>
              <span className="text-[#f3f4f6]">&nbsp;
                <TypeAnimation
                  sequence={[
                    "cat ./profile.md",
                    4000
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-[#BDC1CA] font-['IBM_Plex_Mono']"
                  repeat={1}
                />
              </span>
            {/* </div> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-8">
              <div className="aspect-square bg-[#171a1f] border border-[#323743] p-2 relative overflow-hidden group">
                <div className="w-full h-full l overflow-hidden bg-[#e1f1fd]/90">
                  <img src="\assets\profile-pic.png" alt="Lucas Porto" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="absolute inset-0 border border-[#323743] pointer-events-none" />
              </div>

              <div className="border-l-2 border-[#E0E0E0] pl-4 space-y-2 text-sm">
                <div className="mb- flex justify-between">
                  {/* <span className="text-[#bdc1ca]">ROLE:</span> */}
                  <span className="text-[#f3f4f6]">Desenvolvedor de Software</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#bdc1ca]">STATUS:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[#f3f4f6]">Disponível</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#bdc1ca]">LOCATION:</span>
                  <span className="text-[#f3f4f6]">Curitiba, PR</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-[36px] leading-tight font-['Space_Mono']">
                Desenvolvimento de sistemas 
                <span className="text-[#E0E0E0] font-['IBM_Plex_Mono']">
                  <TypeAnimation
                    sequence={[
                      " escaláveis, seguros e resilientes."
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-[#BDC1CA] font-['IBM_Plex_Mono']"
                    repeat={1}
                    />
                </span>
              </h1>
              
              <div className="space-y-6 text-lg leading-relaxed max-w-3xl">
                <p>
                  Especialista na construção de ecossistemas resilientes, desenhar arquiteturas de microsserviços e implementar pipelines de CI/CD eficientes. Com forte base em Angular, React, Java, Spring Boot e Python, meu foco é traduzir requisitos de negócio em soluções técnicas escaláveis, de alta disponibilidade e performance.
                </p>
                <p>
                  Minha abordagem é metódica: do planejamento rigoroso da arquitetura à automação de testes e deployments. Acredito que código limpo é fundamental, mas sistemas escaláveis e observáveis são o que garantem a estabilidade de longo prazo em produção.
                </p>
              </div>

              <div className="bg-[#171a1f] border border-[#323743] p-6 max-w-2xl">
                <p className="text-sm text-[#f3f4f6] mb-2">/* Filosofia */</p>
                <p className="italic text-[#bdc1ca]">
                <TypeAnimation
                    sequence={[
                      '"Complexidade deve ser encapsulada, não exposta. Construa sistemas que sejam difíceis de quebrar e fáceis de monitorar."',
                      5000
                    ]}
                    wrapper="span"
                    speed={70}
                    className="text-[#BDC1CA] font-['IBM_Plex_Mono']"
                    repeat={1}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-8 text-sm">
            <div className="block sm:inline font-bold text-[#E0E0E0]">lucas@porto</div>
            {/* <div className="flex items-center gap-2 sm:inline-flex sm:ml-2"> */}
              <span className="text-[#f3f4f6]">&nbsp;</span>
              <span className="text-[#bdc1ca]">$</span>
              <span className="text-[#f3f4f6]">&nbsp;
                <TypeAnimation
                  sequence={[
                    "./metodologia_de_execucao.sh",
                    4000
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-[#BDC1CA] font-['IBM_Plex_Mono']"
                  repeat={1}
                />
              </span>
            {/* </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1e2128] border border-[#323743] rounded-sm overflow-hidden flex flex-col">
              <div className="bg-[#171a1f] border-b border-[#323743] px-4 py-2 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                </div>
                <span className="text-[12px] text-[#bdc1ca]">phase_01_plan.yml</span>
                <div className="w-12" />
              </div>
              <div className="p-8 space-y-8">
                <div className="flex items-center gap-3">
                  <img src="./assets/IMG_6.svg" alt="plan" className="w-6 h-6" />
                  <h2 className="text-xl font-bold tracking-widest uppercase">Plan</h2>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-[#E0E0E0] shrink-0">[*]</span>
                    <p className="text-sm leading-relaxed">
                      <span className="text-[#f3f4f6] font-bold">Descoberta & Escopo:</span> Alinhamento profundo com stakeholders para mapear fluxos de valor e definir SLAs não-funcionais críticos.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#E0E0E0] shrink-0">[*]</span>
                    <p className="text-sm leading-relaxed">
                      <span className="text-[#f3f4f6] font-bold">Desenho de Arquitetura:</span> Modelagem de domínios (DDD), escolha de padrões arquiteturais (Event-Driven, Microsserviços) e definição de limites de contexto.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#E0E0E0] shrink-0">[*]</span>
                    <p className="text-sm leading-relaxed">
                      <span className="text-[#f3f4f6] font-bold">Especificações de API:</span> Contratos API-first utilizando OpenAPI/Swagger, garantindo governança e desenvolvimento frontend/backend em paralelo.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#E0E0E0] shrink-0">[*]</span>
                    <p className="text-sm leading-relaxed">
                      <span className="text-[#f3f4f6] font-bold">Modelagem de Dados:</span> Design de schemas para bancos relacionais (PostgreSQL) e NoSQL (MongoDB), focando em performance de leitura/escrita.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1e2128] border border-[#323743] rounded-sm overflow-hidden flex flex-col">
              <div className="bg-[#171a1f] border-b border-[#323743] px-4 py-2 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                </div>
                <span className="text-[12px] text-[#bdc1ca]">phase_02_build.yml</span>
                <div className="w-12" />
              </div>
              <div className="p-8 space-y-8">
                <div className="flex items-center gap-3">
                  <img src="./assets/IMG_7.svg" alt="build" className="w-6 h-6" />
                  <h2 className="text-xl font-bold tracking-widest uppercase">Build</h2>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-[#E0E0E0] shrink-0">[*]</span>
                    <p className="text-sm leading-relaxed">
                      <span className="text-[#f3f4f6] font-bold">Implementação Core:</span> Desenvolvimento backend utilizando Java/Spring Boot ou Python/FastAPI, priorizando clean code e princípios SOLID.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#E0E0E0] shrink-0">[*]</span>
                    <p className="text-sm leading-relaxed">
                      <span className="text-[#f3f4f6] font-bold">Engenharia de Qualidade:</span> Automação severa via TDD, testes de integração contínuos e análise de código estática (SonarQube).
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#E0E0E0] shrink-0">[*]</span>
                    <p className="text-sm leading-relaxed">
                      <span className="text-[#f3f4f6] font-bold">Automação CI/CD:</span> Construção de pipelines declarativas (GitHub Actions/GitLab CI) para linting, testes, build de imagens Docker e deploy.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#E0E0E0] shrink-0">[*]</span>
                    <p className="text-sm leading-relaxed">
                      <span className="text-[#f3f4f6] font-bold">Observabilidade & Cloud:</span> Instrumentação de aplicações, orquestração no Kubernetes e monitoramento configurado via Prometheus/Grafana.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-8 text-sm">
            <div className="block sm:inline font-bold text-[#E0E0E0]">lucas@porto</div>
            {/* <div className="flex items-center gap-2 sm:inline-flex sm:ml-2"> */}
              <span className="text-[#f3f4f6]">&nbsp;</span>
              <span className="text-[#bdc1ca]">$</span>
              <span className="text-[#f3f4f6]">&nbsp;
                <TypeAnimation
                  sequence={[
                    "./servicos_disponiveis.sh",
                    4000
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-[#BDC1CA] font-['IBM_Plex_Mono']"
                  repeat={1}
                />
              </span>
            {/* </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1e2128] border border-[#323743] p-8 space-y-4 hover:border-[#E0E0E0] transition-colors group">
              <div className="flex items-center gap-3">
                <img src="./assets/IMG_8.svg" alt="server" className="w-5 h-5 text-[#f3f4f6]" />
                <h3 className="text-base font-bold text-[#f3f4f6]">Sistemas Backend</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#bdc1ca]">
                Desenho e implementação de APIs RESTful resilientes e sistemas orientados a mensagens (Kafka/RabbitMQ). Foco em redução de latência e alta disponibilidade.
              </p>
            </div>

            <div className="bg-[#1e2128] border border-[#323743] p-8 space-y-4 hover:border-[#E0E0E0] transition-colors group">
              <div className="flex items-center gap-3">
                <img src="./assets/IMG_9.svg" alt="cloud" className="w-5 h-5 text-[#f3f4f6]" />
                <h3 className="text-base font-bold text-[#f3f4f6]">Cloud & Infraestrutura</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#bdc1ca]">
                Provisionamento via IaC (Terraform) na AWS. Proficiente em orquestração de containers com Docker e Kubernetes, garantindo deploy e scaling automatizados.
              </p>
            </div>

            <div className="bg-[#1e2128] border border-[#323743] p-8 space-y-4 hover:border-[#E0E0E0] transition-colors group">
              <div className="flex items-center gap-3">
                <img src="./assets/IMG_10.svg" alt="database" className="w-5 h-5 text-[#f3f4f6]" />
                <h3 className="text-base font-bold text-[#f3f4f6]">Persistência de Dados</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#bdc1ca]">
                Otimização de queries e modelagem avançada em PostgreSQL. Experiência com bancos NoSQL para cache (Redis) e dados não estruturados (MongoDB).
              </p>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="flex items-center gap-2 mb-8 text-sm">
            <span className="font-bold text-[#E0E0E0]">lucas@porto</span>
            <span className="text-[#f3f4f6]"></span>
            <span className="text-[#bdc1ca]">$</span>
            <span className="text-[#f3f4f6]">history | grep 'career_milestones'</span>
          </div>

          <div className="bg-[#1e2128] border border-[#323743] p-8 md:p-12 relative">
            <div className="absolute left-8 md:left-[125px] top-12 bottom-12 w-[1px] bg-[#323743]" />

            <div className="space-y-16">
              <div className="relative pl-12 md:pl-0 grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-2 text-[#E0E0E0] font-bold text-sm pt-1">2023_ATUAL</div>
                <div className="absolute left-0 md:left-[121px] top-2 w-2 h-2 rounded-full bg-[#E0E0E0] z-10" />
                <div className="md:col-span-10 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#f3f4f6]">Engenheiro de Software Sênior</h3>
                    <p className="text-sm text-[#bdc1ca]">Fintech Confidencial</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-[#E0E0E0] shrink-0">[*]</span>
                      <p className="text-sm text-[#bdc1ca]">Liderou a modernização de um monólito legado para uma arquitetura baseada em microsserviços.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[#E0E0E0] shrink-0">[*]</span>
                      <p className="text-sm text-[#bdc1ca]">Implementou CI/CD automatizado, reduzindo o tempo médio de deploy de 2 dias para 45 minutos.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[#E0E0E0] shrink-0">[*]</span>
                      <p className="text-sm text-[#bdc1ca]">Otimizou a camada de persistência de dados, diminuindo a latência da API core em 40% sob alta carga.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-12 md:pl-0 grid grid-cols-1 md:grid-cols-12 gap-4 opacity-80">
                <div className="md:col-span-2 text-[#bdc1ca] font-bold text-sm pt-1">2020_2023</div>
                <div className="absolute left-0 md:left-[121px] top-2 w-2 h-2 rounded-full bg-[#323743] z-10" />
                <div className="md:col-span-10 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#f3f4f6]">Desenvolvedor Backend Pleno</h3>
                    <p className="text-sm text-[#bdc1ca]">E-commerce Solutions S.A.</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-[#E0E0E0] shrink-0">[*]</span>
                      <p className="text-sm text-[#bdc1ca]">Desenvolveu e manteve APIs críticas para o fluxo de checkout e integração com gateways de pagamento.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[#E0E0E0] shrink-0">[*]</span>
                      <p className="text-sm text-[#bdc1ca]">Introduziu testes de mutação e integração no fluxo da equipe, elevando a cobertura de código para &gt;85%.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[#E0E0E0] shrink-0">[*]</span>
                      <p className="text-sm text-[#bdc1ca]">Auxiliou na migração de infraestrutura on-premise para AWS, utilizando ECS e RDS.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-12 md:pl-0 grid grid-cols-1 md:grid-cols-12 gap-4 opacity-80">
                <div className="md:col-span-2 text-[#bdc1ca] font-bold text-sm pt-1">2018_2020</div>
                <div className="absolute left-0 md:left-[121px] top-2 w-2 h-2 rounded-full bg-[#323743] z-10" />
                <div className="md:col-span-10 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#f3f4f6]">Desenvolvedor Backend Júnior</h3>
                    <p className="text-sm text-[#bdc1ca]">Tech Startup Alpha</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-[#E0E0E0] shrink-0">[*]</span>
                      <p className="text-sm text-[#bdc1ca]">Criação de scripts em Python para automação de rotinas de processamento de dados (ETL base).</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[#E0E0E0] shrink-0">[*]</span>
                      <p className="text-sm text-[#bdc1ca]">Manutenção de serviços Java Spring, resolvendo bugs de produção e adicionando funcionalidades menores.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
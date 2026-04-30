import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#323743] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img src="./assets/IMG_12.svg" alt="Logo" className="w-5 h-5" />
              <span className="font-bold text-[#f3f4f6]">lucas porto - portfólio</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#bdc1ca]">
                <img src="./assets/IMG_13.svg" alt="Mail" className="w-4 h-4" />
                <a href="mailto:porto.lucas.lp@gmail.com" className="hover:text-white transition-colors">
                  porto.lucas.lp@gmail.com
                </a>
              </div>
              <Link to="/contato" className="flex items-center gap-3 text-sm text-[#bdc1ca] hover:text-white transition-colors">
                <img src="./assets/IMG_3.svg" alt="Calendar" className="w-4 h-4" />
                Agendar Reunião
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-[#f3f4f6] mb-4">Stacks Principais</h4>
            <p className="text-sm text-[#bdc1ca] leading-relaxed">
              Java, Spring Boot, Python,<br />
              FastAPI, Angular, Kubernetes,<br />
              Docker, CI/CD Pipelines
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-center md:items-end justify-between">
            <div className="flex gap-4 mb-8 md:mb-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-[#bdc1ca] hover:text-white transition-colors">
                <img src="./assets/IMG_1.svg" alt="GitHub" className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/lucasporto" target="_blank" rel="noopener noreferrer" className="p-2 text-[#bdc1ca] hover:text-white transition-colors">
                <img src="./assets/IMG_2.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
            <div className="text-center md:text-right text-[10px] sm:text-xs text-[#bdc1ca] leading-tight">
              © 2026 Lucas Porto.<br />
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
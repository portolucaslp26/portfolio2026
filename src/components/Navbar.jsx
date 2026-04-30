import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-[#323743]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src="./assets/IMG_4.svg" alt="Terminal" className="w-5 h-5" />
          <div className="flex items-center gap-2">
            <span className="font-['Space_Mono'] font-bold text-sm sm:text-base tracking-tight text-[#E0E0E0]">
              lucas porto - portfólio
            </span>
            <span className="text-[10px] sm:text-xs opacity-50 text-[#bdc1ca] tracking-wider font-medium">
              EM TESTES
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm ${isActive('/') ? 'font-semibold text-white' : 'text-[#bdc1ca] hover:text-white'} transition-colors`}>
            Home
          </Link>
          <Link to="/sobre" className={`text-sm ${isActive('/sobre') ? 'font-semibold text-white' : 'text-[#bdc1ca] hover:text-white'} transition-colors`}>
            Sobre
          </Link>
          <Link to="/skills" className={`text-sm ${isActive('/skills') ? 'font-semibold text-white' : 'text-[#bdc1ca] hover:text-white'} transition-colors`}>
            Skills
          </Link>
          <Link to="/contato" className={`text-sm ${isActive('/contato') ? 'font-semibold text-white' : 'text-[#bdc1ca] hover:text-white'} transition-colors`}>
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-[#bdc1ca] hover:text-white transition-colors">
            <img src="./assets/IMG_1.svg" alt="GitHub" className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-[#bdc1ca] hover:text-white transition-colors">
            <img src="./assets/IMG_2.svg" alt="LinkedIn" className="w-5 h-5" />
          </a>
          <Link to="/contato" className="hidden sm:flex items-center gap-2 px-4 py-2 border border-[#E0E0E0] text-xs font-medium hover:bg-white hover:text-black transition-all">
            <img src="./assets/IMG_3.svg" alt="Calendar" className="w-4 h-4" />
            Agendar
          </Link>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#bdc1ca] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <span className={`block h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#323743]">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" onClick={closeMenu} className={`text-sm py-2 ${isActive('/') ? 'font-semibold text-white' : 'text-[#bdc1ca] hover:text-white'} transition-colors`}>
              Home
            </Link>
            <Link to="/sobre" onClick={closeMenu} className={`text-sm py-2 ${isActive('/sobre') ? 'font-semibold text-white' : 'text-[#bdc1ca] hover:text-white'} transition-colors`}>
              Sobre
            </Link>
            <Link to="/skills" onClick={closeMenu} className={`text-sm py-2 ${isActive('/skills') ? 'font-semibold text-white' : 'text-[#bdc1ca] hover:text-white'} transition-colors`}>
              Skills
            </Link>
            <Link to="/contato" onClick={closeMenu} className={`text-sm py-2 ${isActive('/contato') ? 'font-semibold text-white' : 'text-[#bdc1ca] hover:text-white'} transition-colors`}>
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
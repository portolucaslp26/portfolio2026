import { useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';

export default function Contato() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: 'sending', message: 'Enviando mensagem...' });

    try {
      await emailjs.sendForm(
        'service_portfolio',
        'template_portfolio',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Erro ao enviar. Tente novamente.' });
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const openMailClient = () => {
    const subject = encodeURIComponent('Contato pelo Portfólio');
    const body = encodeURIComponent(`Olá Lucas,\n\nMeu nome é:\nMeu email para contato:\n\nMensagem:\n`);
    window.location.href = `mailto:porto.lucas.lp@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#f3f4f6] font-['IBM_Plex_Mono'] selection:bg-[#ffffff] selection:text-[#000000]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-12">
            <div className="inline-flex flex-col w-full max-w-sm">
              <div className="flex items-center gap-2 pb-2">
                <img src="./assets/IMG_4.svg" alt="terminal" className="w-4 h-4 text-[#bdc1ca]" />
                <span className="text-sm text-[#bdc1ca]">
                  <TypeAnimation
                    sequence={[
                      "~/iniciar-conexao.sh",
                      4000
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-[#BDC1CA] font-['IBM_Plex_Mono']"
                    repeat={1}
                  />
                </span>
              </div>
              <div className="h-[1px] bg-[#323743]" />
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
              Vamos <br />
              <TypeAnimation
                    sequence={[
                      " alavancar seu negócio.",
                      4000,
                      " implementar soluções inovadoras.",
                      4000,
                      " otimizar sua arquitetura.",
                      4000,
                      " modernizar seus sistemas.",
                      4000,
                    ]}
                    wrapper="p"
                    speed={60}
                    className="text-[#BDC1CA] font-['IBM_Plex_Mono']"
                    repeat={Infinity}
                  />
              </h1>
              <p className="text-[#bdc1ca] text-sm md:text-base leading-relaxed max-w-md">
                Pronto para otimizar sua arquitetura, modernizar sistemas legados ou implementar soluções inovadoras com tecnologia de ponta? Escolha o canal de sua preferência para iniciarmos a conversa.
              </p>
            </div>

            <div className="space-y-4 max-w-sm">
              <button 
                disabled
                className="w-full flex items-center justify-between px-6 py-4 bg-[#E0E0E0] text-[#19191F] rounded-[4px] font-medium opacity-50 cursor-not-allowed"
              >
                <div className="flex items-center gap-4">
                  <img src="./assets/IMG_8.svg" alt="mail" className="w-5 h-5" />
                  <span>Enviar e-mail direto</span>
                </div>
                <img src="./assets/IMG_9.svg" alt="arrow" className="w-4 h-4 opacity-50" />
              </button>

              <button 
                disabled
                className="w-full flex items-center justify-between px-6 py-4 bg-black border border-[#323743] text-[#bdc1ca] rounded-[4px] font-medium opacity-50 cursor-not-allowed"
              >
                <div className="flex items-center gap-4">
                  <img src="./assets/IMG_3.svg" alt="calendar" className="w-5 h-5" />
                  <span>Agendar reunião de 30 min</span>
                </div>
                <img src="./assets/IMG_9.svg" alt="arrow" className="w-4 h-4 opacity-50" />
              </button>
            </div>

            <div className="pt-8 border-t border-[#323743]/50 space-y-6">
              <h3 className="text-xs tracking-[0.1em] uppercase text-[#bdc1ca] font-normal">
                // Status Operacional
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#171a1f]/30 border border-[#323743]/50 rounded-[4px] flex items-center gap-4">
                  <img src="./assets/IMG_10.svg" alt="location" className="w-4 h-4 text-[#bdc1ca]" />
                  <div className="text-sm">
                    <span className="text-[#bdc1ca]">local: </span>
                    <span className="font-semibold text-[#f3f4f6]">Curitiba, PR - Brasil</span>
                  </div>
                </div>

                <div className="p-4 bg-[#171a1f]/30 border border-[#323743]/50 rounded-[4px] flex items-center gap-4">
                  <img src="./assets/IMG_11.svg" alt="clock" className="w-4 h-4 text-[#bdc1ca]" />
                  <div className="text-sm">
                    <span className="text-[#bdc1ca]">response_time: </span>
                    <span className="font-semibold text-[#f3f4f6]">&lt; 24 horas</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <span className="text-sm text-[#bdc1ca]">Conectar via:</span>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <img src="./assets/IMG_2.svg" alt="linkedin" className="w-5 h-5 text-[#bdc1ca]" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <img src="./assets/IMG_1.svg" alt="github" className="w-5 h-5 text-[#bdc1ca]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#1e2128] border border-[#323743] rounded-md shadow-2xl overflow-hidden">
              <div className="bg-[#171a1f] border-b border-[#323743] px-4 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
                </div>
                <div className="flex items-center gap-2">
                  <img src="./assets/IMG_5.svg" alt="msg" className="w-3 h-3 text-[#bdc1ca]" />
                  <span className="text-[12px] text-[#bdc1ca]">nova_mensagem.txt</span>
                </div>
                <div className="w-12" />
              </div>

              <div className="p-8 space-y-6">
                {status.message && (
                  <div className={`p-3 rounded text-sm ${
                    status.type === 'success' ? 'bg-green-900/30 text-green-400' :
                    status.type === 'error' ? 'bg-red-900/30 text-red-400' :
                    status.type === 'sending' ? 'bg-yellow-900/30 text-yellow-400' :
                    ''
                  }`}>
                    {status.message}
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                   <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#bdc1ca]">&lt;email_corporativo&gt;</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="maria@email.com"
                      required
                      className="w-full bg-[#171a1f]/50 border border-[#323743] rounded-[4px] px-4 py-3 text-base text-[#bdc1ca] placeholder:text-[#bdc1ca]/50 focus:border-white/40 focus:bg-white/5 outline-none transition-all min-h-[44px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#bdc1ca]">&lt;nome_completo&gt;</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Maria da Silva"
                      required
                      className="w-full bg-[#171a1f]/50 border border-[#323743] rounded-[4px] px-4 py-3 text-base text-[#bdc1ca] placeholder:text-[#bdc1ca]/50 focus:border-white/40 focus:bg-white/5 outline-none transition-all min-h-[44px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#bdc1ca]">&lt;assunto&gt;</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Consultoria em IA"
                      required
                      className="w-full bg-[#171a1f]/50 border border-[#323743] rounded-[4px] px-4 py-3 text-base text-[#bdc1ca] placeholder:text-[#bdc1ca]/50 focus:border-white/40 focus:bg-white/5 outline-none transition-all min-h-[44px]"
                    />
                  </div>

                  <div className="space-y-2 relative">
                    <label className="block text-sm font-medium text-[#bdc1ca]">&lt;corpo_da_mensagem&gt;</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Descreva brevemente o desafio ou projeto..."
                      required
                      className="w-full bg-[#171a1f]/50 border border-[#323743] rounded-[4px] px-4 py-3 text-base text-[#bdc1ca] placeholder:text-[#bdc1ca]/50 focus:border-white/40 focus:bg-white/5 outline-none transition-all resize-none min-h-[44px]"
                    />
                    <div className="absolute bottom-2 right-2 pointer-events-none">
                      <img src="./assets/IMG_6.svg" alt="resize" className="w-3 h-3" />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled
                    className="w-full py-3 bg-[#E0E0E0] text-[#19191F] text-sm font-medium rounded-[4px] opacity-50 cursor-not-allowed min-h-[44px]"
                  >
                    {'> executar envio'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import { useState, useRef, useEffect } from 'react';

const GEMINI_API_KEY = 'AIzaSyBB4Z55BMWFpY7Fjs-mCqgX5hBhFx0a7Kk';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const portfolioContext = `
Voce e um assistente virtual do portfolio de Lucas Porto, um Engenheiro de Software especializado em:
- Backend: Java (Expert), Spring Boot (Expert), Python (Avancado), Node.js (Intermediario)
- Frontend: Angular (Avancado), TypeScript (Avancado), React (Intermediario), Tailwind CSS (Avancado)
- Mensageria e Dados: PostgreSQL (Avancado), Apache Kafka (Avancado), Redis (Intermediario), MongoDB (Intermediario)
- DevOps e Cloud: Docker (Expert), Kubernetes (Avancado), AWS (Intermediario), Terraform (Intermediario)
- Engenharia e Qualidade: CI/CD Pipelines (Avancado), JUnit/Mockito (Expert), SonarQube (Avancado), Design Patterns (Avancado)

Lucas e especialista em arquiteturas de microsservicos, sistemas event-driven, pipelines CI/CD, e integracao com IA.
Localizado em Curitiba, PR. Status: Disponivel.

Responda apenas perguntas relacionadas ao portfolio, skills, experiencia e projetos do Lucas.
Se perguntarem algo fora do contexto, responda: "Esta informacao nao esta disponivel no meu portfolio atual."
Mantenha respostas concisas e em portugues brasileiro.
Use formatacao de terminal (prefixos $, >) quando apropriado.
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '> Sistema inicializado. Como posso ajudar sobre o portfolio do Lucas?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${portfolioContext}\n\nUsuario: ${input}\n\nAssistente:`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        })
      });

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || '> Erro ao processar resposta.';

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: '> Erro de conexao. Tente novamente.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-8 w-[calc(100vw-2rem)] sm:w-96 h-[500px] sm:h-[600px] z-50 flex flex-col bg-[#0A0A0A] border border-[#323743] rounded-md shadow-2xl overflow-hidden">
          <div className="bg-[#131313] px-4 py-2 border-b border-[#323743] flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
              <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
              <div className="w-3 h-3 rounded-full bg-[#323743]/50" />
            </div>
            <span className="text-[10px] text-[#bdc1ca]">root@lporto-env:~</span>
            <button onClick={() => setIsOpen(false)} className="text-[#bdc1ca] hover:text-white transition-colors w-4 h-4 flex items-center justify-center">
              &times;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm font-['IBM_Plex_Mono']">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <span className={`shrink-0 ${msg.role === 'user' ? 'text-[#E0E0E0]' : 'text-[#bdc1ca]'}`}>
                  {msg.role === 'user' ? '$' : '>'}
                </span>
                <span className={`${msg.role === 'user' ? 'text-[#f3f4f6]' : 'text-[#bdc1ca]'} whitespace-pre-wrap`}>
                  {msg.content}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2">
                <span className="text-[#bdc1ca]">{'>'}</span>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-[#bdc1ca] rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
                  <span className="w-1.5 h-1.5 bg-[#bdc1ca] rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
                  <span className="w-1.5 h-1.5 bg-[#bdc1ca] rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-[#323743] p-3 bg-[#0A0A0A]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Digite sua pergunta..."
                className="flex-1 bg-[#131313] border border-[#323743] rounded px-3 py-2 text-sm text-[#f3f4f6] placeholder:text-[#323743] focus:outline-none focus:border-[#bdc1ca] font-['IBM_Plex_Mono']"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-[#323743] text-[#bdc1ca] rounded hover:bg-[#424752] transition-colors text-sm disabled:opacity-50"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:right-8 z-50 w-14 h-14 bg-[#0A0A0A] border border-[#323743] rounded-full shadow-2xl hover:border-[#E0E0E0] transition-all flex items-center justify-center group"
        aria-label="Chatbot"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#bdc1ca] group-hover:text-[#E0E0E0] transition-colors">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </>
  );
}

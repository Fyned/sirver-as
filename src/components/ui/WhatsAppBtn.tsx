import { MessageCircle } from 'lucide-react';

export default function WhatsAppBtn() {
  return (
    <a 
      href="https://wa.me/905309235033?text=Merhaba,%20odun%20cipsi%20tedariği%20hakkında%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle size={28} className="fill-white text-[#25D366]" />
      <div className="flex flex-col items-start">
        <span className="text-[10px] uppercase font-bold opacity-90 leading-tight">Hızlı İletişim</span>
        <span className="font-bold text-sm">WhatsApp</span>
      </div>
    </a>
  );
}
import Link from 'next/link';
import { FiCalendar } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-full px-8 py-4 bg-[#f5f5f5] shadow text-black">
      <ul>
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2 font-bold text-lg">
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <FiCalendar className="text-blue-600 text-2xl" style={{ marginRight: 8 }} />
              <Link href="/">PsiAgenda</Link>
            </li>
          </div>

          <div className="flex items-center gap-4 font-medium text-sm font-base">
            <li>
              <Link href="/Politica" className="flex items-center gap-1">Política de Privacidade</Link>
            </li>
            <li>
              <Link href="/TermosUso" className="flex items-center gap-1">Termos de Uso</Link>
            </li>
            <li>
              <Link href="/Suporte" className="flex items-center gap-1">Suporte</Link>
            </li>
          </div>

          <div className="text-xs text-gray-600 whitespace-nowrap">
            © 2025 PsiAgenda. Todos os direitos reservados.
          </div>

        </div>
      </ul>
    </footer>
  );
};

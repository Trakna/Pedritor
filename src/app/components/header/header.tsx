import Link from 'next/link';
import { FiCalendar, FiArrowLeft, FiLogIn } from "react-icons/fi";

export enum HeaderItems {
  RESOURCES = 'resources',
  PRICES = 'pricing',
  CONTACTS = 'contacts',
}

interface HeaderProps {
  enabledLinks: HeaderItems[];
  showBackButton: boolean;
  adminStyle?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ enabledLinks, showBackButton, adminStyle }) => {
  return (
    <nav className={`w-full px-8 py-4 shadow ${adminStyle ? "bg-[#181f2a] text-white" : "bg-[#f5f5f5] text-black"}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-lg">
          <FiCalendar className={`text-2xl mr-2 ${adminStyle ? "text-blue-400" : "text-blue-600"}`} />
          <Link href="/agenda" className={adminStyle ? "text-white" : "text-black"}>
            PsiAgenda
          </Link>
        </div>
        <div className="flex items-center gap-4 font-medium text-sm">
          {showBackButton ? (
            <Link
              href="/"
              className={`flex items-center gap-1 font-bold transition-colors ${adminStyle ? "text-white hover:text-blue-300" : "hover:text-gray-400"}`}
            >
              <FiArrowLeft className="text-base" />
              Voltar ao Início
            </Link>
          ) : (
            <>
              <ul className="flex gap-4">
                {enabledLinks.includes(HeaderItems.RESOURCES) && (
                  <li>
                    <Link
                      href="/resources"
                      className={`flex items-center gap-1 transition-colors ${adminStyle ? "text-white hover:text-blue-300" : "hover:text-gray-400"}`}
                    >
                      Recursos
                    </Link>
                  </li>
                )}
                {enabledLinks.includes(HeaderItems.PRICES) && (
                  <li>
                    <Link
                      href="/pricing"
                      className={`flex items-center gap-1 transition-colors ${adminStyle ? "text-white hover:text-blue-300" : "hover:text-gray-400"}`}
                    >
                      Preços
                    </Link>
                  </li>
                )}
                {enabledLinks.includes(HeaderItems.CONTACTS) && (
                  <li>
                    <Link
                      href="/contacts"
                      className={`flex items-center gap-1 transition-colors ${adminStyle ? "text-white hover:text-blue-300" : "hover:text-gray-400"}`}
                    >
                      Contatos
                    </Link>
                  </li>
                )}
              </ul>
              <Link
                href="/login"
                className={`ml-4 flex items-center border rounded px-4 py-1 transition
                  ${adminStyle
                    ? "border-gray-700 bg-[#232b3a] text-white hover:bg-[#232b3a]/80 hover:text-blue-300"
                    : "hover:bg-gray-100"
                  }`}
              >
                <FiLogIn className="mr-2" />
                Entrar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
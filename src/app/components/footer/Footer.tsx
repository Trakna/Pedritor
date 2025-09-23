import Link from "next/link";
import { FiCalendar } from "react-icons/fi";

export const Footer = ({ adminStyle }: { adminStyle?: boolean }) => {
  return (
    <footer
      className={`w-full px-8 py-4 shadow ${
        adminStyle ? "bg-[#181f2a] text-white" : "bg-[#f5f5f5] text-black"
      }`}
    >
      <ul>
        <div className="flex justify-between items-center">
          {/* Logo / Nome */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <li style={{ display: "flex", alignItems: "center" }}>
              <FiCalendar
                className={
                  adminStyle
                    ? "text-blue-400 text-2xl"
                    : "text-blue-600 text-2xl"
                }
                style={{ marginRight: 8 }}
              />
              <Link
                href="/agenda"
                className={adminStyle ? "text-white" : "text-black"}
              >
                PsiAgenda
              </Link>
            </li>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 font-medium text-sm font-base">
            <li>
              <Link
                href="/policy"
                className={`flex items-center gap-1 ${
                  adminStyle ? "text-white" : ""
                }`}
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-use"
                className={`flex items-center gap-1 ${
                  adminStyle ? "text-white" : ""
                }`}
              >
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className={`flex items-center gap-1 ${
                  adminStyle ? "text-white" : ""
                }`}
              >
                Suporte
              </Link>
            </li>
          </div>

          {/* Direitos */}
          <div
            className={`text-xs whitespace-nowrap ${
              adminStyle ? "text-gray-300" : "text-gray-600"
            }`}
          >
            © 2025 PsiAgenda. Todos os direitos reservados.
          </div>
        </div>
      </ul>
    </footer>
  );
};

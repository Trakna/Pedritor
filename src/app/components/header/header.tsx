import Link from 'next/link';
import { FiCalendar } from "react-icons/fi";

export enum HeaderItems {
  RESOURCES = 'resources',
  PRICES = 'pricing',
  CONTACTS = 'contacts',
}

interface HeaderProps {
  enabledLinks: HeaderItems[];
  showBackButton: boolean;
}

export const Header: React.FC<HeaderProps> = ({ enabledLinks, showBackButton }) => {
  return (
    <nav className='w-full px-8 py-4 bg-[#f5f5f5] shadow text-black'> 
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 font-bold text-lg'>
          <FiCalendar className='text-blue-600 text-2xl mr-2' />
          <Link href="/agenda">PsiAgenda</Link>
        </div>
        
        <div className='flex item-center gap-4 font-medium text-sm'>
          {showBackButton ? (
            <Link href="/" className='flex items-center gap-1 hover:text-gray-600 transition-colors'>
              {'<'} Voltar ao Início
            </Link>
          ) : (
            <ul className='flex gap-4'>
              {enabledLinks.includes(HeaderItems.RESOURCES) && (
                <li>
                  <Link href="/resources" className='flex items-center gap-1 hover:text-gray-600 transition-colors'>Recursos</Link>
                </li>
              )}
              {enabledLinks.includes(HeaderItems.PRICES) && (
                <li>
                  <Link href="/pricing" className='flex items-center gap-1 hover:text-gray-600 transition-colors'>Preços</Link>
                </li>
              )}
              {enabledLinks.includes(HeaderItems.CONTACTS) && (
                <li>
                  <Link href="/contacts" className='flex items-center gap-1 hover:text-gray-600 transition-colors'>Contatos</Link>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
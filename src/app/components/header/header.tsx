import Link from 'next/link';
import { FiCalendar } from "react-icons/fi";



export const Header = () =>{
    return(
        <nav className='w-full px-8 py-4 bg-[#f5f5f5] shadow text-black'> 
            <ul>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2 font-bold text-lg'>
                        <li style={{ display: 'flex', alignItems: 'center'}}>
                            <FiCalendar className='text-blue-600 text-2xl' style={{ marginRight: 8 }} />
                            <Link  href="/Agenda">PsiAgenda</Link>
                        </li>
                    </div>
                    <div className='flex item-center gap-4 font-medium text-sm font-base'>
                        <li>
                            <Link href="/Recursos" className='flex items-center gap-1'>Recursos</Link>
                        </li>
                        <li>
                            <Link href="/Precos" className='flex items-center gap-1'>Preços</Link>
                        </li>
                        <li>
                            <Link href="/Contatos" className='flex items-center gap-1'>Contatos</Link>
                        </li>
                    </div>
                </div>
            </ul>    
        </nav>
    );
};

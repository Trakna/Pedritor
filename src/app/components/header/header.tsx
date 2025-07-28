import Link from 'next/link';
import { CiCalendar } from "react-icons/ci";

export const Header = () =>{
//flex items-center justify-center bg-white py-4 text-black shadow
    return(
        <nav className='w-full px-8 py-4 bg-white shadow text-black'> 
            <ul>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2 font-semibold text-lg'>
                        <li style={{ display: 'flex', alignItems: 'center'}}>
                            <CiCalendar className='text-sky-500 text-2xl' style={{ marginRight: 8 }} />
                            <Link  href="/Agenda">PsiAgenda</Link>
                        </li>
                    </div>
                    <div className='flex item-center gap-4 font-medium text-base font-semibold'>
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

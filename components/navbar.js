import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/images/logo.png';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='grid grid-cols-3 p-3 '>
                <div className={`${active ? '' : 'hidden'
                        }   md:inline-flex md:flex-grow md:w-auto md:order-1`}
                >
                    <div className='md:inline-flex md:flex-row  w-full md:items-center items-start  flex flex-col md:h-auto'>
                        <Link href='/'>
                            <a className='md:inline-flex md:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center  '>
                                CASE STUDIES
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='md:inline-flex md:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center '>
                                INSIGHTS
                            </a>
                        </Link>
                    </div>
                </div>
                <Link href='/'>
                    <a className='order-2 inline-flex items-center p-2 mr-4 relative'>
                       <Image src={Logo} className=""></Image>
                    </a>
                </Link>
                <button
                    className=' inline-flex p-3 rounded md:hidden ml-auto outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div className={`${active ? '' : 'hidden'
                        }   md:inline-flex md:flex-grow  order-3`}
                >
                    <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto'>
                        <Link href='/'>
                            <a className='md:inline-flex md:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center '>
                                SERVICES
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='md:inline-flex md:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center '>
                                TEAM
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};
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
            <nav className='flex md:flex-row flex-wrap items-center py-8 md:px-16 px-3'>
                <div className={`${active ? ' w-full' : 'hidden'
                    }  md:block md:order-first order-last md:w-2/12`}>
                    <div className='inline-flex md:flex-row flex-col justify-between w-full text-xs leading-5'>
                        <Link href='/'>
                            <a className=''>
                                CASE STUDIES
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className=' '>
                                INSIGHTS
                            </a>
                        </Link>
                    </div>
                </div>
                <Link href='/'>
                    <a className='md:w-8/12 flex md:justify-center'>
                        <Image src={Logo} className=""></Image>
                    </a>
                </Link>
                <button
                    className='md:hidden ml-auto'
                    onClick={handleClick}
                >
                    <svg
                        className='w-8 h-10'
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
                <div className={`${active ? ' w-full' : 'hidden'
                    }  md:block md:text-end order-last md:w-2/12`}>
                    <div className='inline-flex md:flex-row flex-col justify-between w-full text-xs leading-5'>
                        <Link href='/'>
                            <a className=' '>
                                SERVICES
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className=' '>
                                TEAM
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};
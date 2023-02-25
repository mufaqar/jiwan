import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../public/images/logo.svg';
import WhiteLogo from '../public/images/whiteLogo.svg';

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4 font-abc-fav`}>
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [headerClr, setHeaderClr] = useState(false);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= '10' ? setHeaderClr(true) : setHeaderClr(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <>
      <Head>
        <title>Jiwan - Dhillon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav
        className={`flex fixed z-10 w-full ${
          headerClr ? 'bg-[#fffff7] shadow-md' : ''
        }  top-0  md:px-16 px-8 py-8 h-[100px] items-center`}
      >
        {/* mobile Menu Starts */}

        <div
          className={`lg:hidden absolute top-0 left-0  h-screen w-screen z-50 bg-gradient-to-bl to-[#1B4582] from-[#BBC5D1] transform ${
            open ? '-translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out  `}
        >
          <div
            className="flex items-center justify-center mx-auto h-24 px-20"
            onClick={() => setOpen(false)}
          >
            {' '}
            {/*logo container*/}
            <Link href="/">
              <a className="text-xl font-semibold flex justify-center items-center">
                <Image src={WhiteLogo} alt="" className=""></Image>
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-10 text-white mt-16 font-ITCGaramondStdLight text-[40px]">
            <div onClick={() => setOpen(false)}>
              <NavLink to="/case-studies">Case Studies</NavLink>
            </div>
            <div onClick={() => setOpen(false)}>
              <NavLink to="/insights">Insights</NavLink>
            </div>
            <div onClick={() => setOpen(false)}>
              <NavLink to="/#services">Services</NavLink>
            </div>
            <div onClick={() => setOpen(false)}>
              <NavLink to="/#team">Team</NavLink>
            </div>
          </div>
        </div>

        {/* mobile Menu End*/}

        {/* Main Menu Starts*/}

        <div className="w-full flex justify-between items-center">
          <div className="hidden lg:flex justify-between w-3/12 text-xs">
            <NavLink to="/case-studies">CASE STUDIES</NavLink>
            <NavLink to="/insights">INSIGHTS</NavLink>
          </div>

          <div
            className="z-50  flex relative w-8 h-6 flex-col gap-2 items-center lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-[3px]  w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'rotate-45 translate-y-2.5 bg-[#FFFFF7]' : ''
              }`}
            />
            <span
              className={`h-[3px]  w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? '-rotate-45 -translate-y-2.5 mt-1 bg-[#FFFFF7]' : ''
              }`}
            />
          </div>

          <div className="md:w-6/12 w-8/12 mx-auto flex items-center justify-center  lg:px-28">
            <Link href="/">
              <a className="text-2xl font-semibold">
                <Image src={Logo} alt="" className=""></Image>
              </a>
            </Link>
          </div>

          <div className="hidden lg:flex justify-between w-3/12 text-xs">
            <NavLink to="/#services">SERVICES</NavLink>
            <NavLink to="/#team">TEAM</NavLink>
          </div>
        </div>
        {/* mobile Menu End*/}
      </nav>
    </>
  );
}

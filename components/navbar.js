import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/images/logo.png';
import WhiteLogo from '../public/images/whiteLogo.png';

function NavLink({ to, children }) {
  return <a href={to} className={`mx-4`}>
    {children}
  </a>
}


export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (<>
    <Head>
      <title>Jiwan - Dhillon</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <nav className="flex  bg-white md:px-16 px-8 py-8 h-[100px] items-center">

      {/* mobile Menu Starts */}

      <div className={`md:hidden absolute top-0 left-0 h-screen w-screen z-50 bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out  `}>
        <div className="flex items-center justify-center mx-auto bg-black h-24" onClick={() => setOpen(false)}> {/*logo container*/}
          <Link href="/">
            <a className="text-xl font-semibold flex justify-center items-center">
              <Image src={WhiteLogo} alt=''></Image>
            </a></Link>
        </div>
        <div className="flex flex-col gap-10 text-white text-[15px] mt-16">
          <div onClick={() => setOpen(false)}>
            <NavLink to="/case-studies">
              CASE STUDIES
            </NavLink>
          </div>
          <div onClick={() => setOpen(false)}>
            <NavLink to="/insights">
              INSIGHTS
            </NavLink>
          </div>
          <div onClick={() => setOpen(false)}>
            <NavLink to="/#services">
              SERVICES
            </NavLink>
          </div>
          <div onClick={() => setOpen(false)}>
            <NavLink to="/#team" >
              TEAM
            </NavLink>
          </div>
        </div>
      </div>

      {/* mobile Menu End*/}


      {/* Main Menu Starts*/}

      <div className="w-full flex justify-between items-center">

        <div className="hidden md:flex justify-between w-3/12 text-xs">
          <NavLink to="/case-studies">
            CASE STUDIES
          </NavLink>
          <NavLink to="/insights">
            INSIGHTS
          </NavLink>
        </div>

        <div className="z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden" onClick={() => {
          setOpen(!open)
        }}>
          {/* hamburger button */}
          <span className={`h-[3px] w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5 bg-white" : ""}`} />
          <span className={`h-[3px] w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5 bg-white" : ""}`} />
        </div>

        <div className="md:w-6/12 w-8/12 mx-auto flex items-center justify-center">
          <Link href="/">
            <a className="text-2xl font-semibold"><Image src={Logo} alt=''></Image></a>
          </Link>
        </div>

        <div className="hidden md:flex justify-between w-3/12 text-xs">
          <NavLink to="/#services">
            SERVICES
          </NavLink>
          <NavLink to="/#team">
            TEAM
          </NavLink>
        </div>
      </div>
      {/* mobile Menu End*/}
    </nav>
  </>

  )
}
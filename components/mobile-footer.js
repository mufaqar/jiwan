import Link from "next/link";


export default function Footer() {
    return (
        <>
            <footer className="bg-black md:py-10 pb-0 pt-9 mt-16">
                <div className="container mx-auto items-center grid gap-16 p-4">
                    <div>
                        <h2 className="lg:text-[65px] md:leading-[70px] md:text-[53px] text-4xl font-ITCGaramondStdLight tracking-tighter text-white"><span className="underline">Reach out</span> & discover what your business can buy you. </h2>
                    </div>
                    <div className="md:grid md:grid-cols-3 grid-cols-2 md:gap-0 gap-14">
                        <div className="md:order-first ">
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a className="md:text-sm text-[10px] text-white">client@jiwandhillon.ca</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="md:text-sm text-[10px] text-white">+1 604 592 0602</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="md:text-sm text-[10px] text-white">211-12830 80 Ave</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="md:text-sm text-[10px] text-white">Surrey BC  V3W 3A8</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="grid gap-3 mb-3 md:mb-0 md:gap-14 md:col-span-1 col-span-2 md:order-first order-last">
                            <h2 className="font-ITCGaramondStdLight tracking-tighter md:text-[27px] text-[22px] md:text-center text-white">© Jiwan Dhillon & Company CPA</h2>
                            <p className="font-AdobCaslonRegular italic md:text-base text-xs text-left md:text-center text-white">c/o Maker Brothers Worldwide®</p>
                        </div>
                        <div>
                            <ul className="md:text-right">
                                <li>
                                    <Link href="#">
                                        <a className="md:text-sm text-[10px] text-white">YouTube</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="md:text-sm text-[10px] text-white">Facebook</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="md:text-sm text-[10px] text-white">Instagram</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="md:text-sm text-[10px] text-white">LinkedIn</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

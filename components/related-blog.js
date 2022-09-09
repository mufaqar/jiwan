import Image from "next/image";
import Link from "next/link";


export default function RelatedBlog(props) {
    return (
        <>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-5 border-b md:border-black border-transparent md:pb-4 pb-0 md:mb-5 mb-10">
                <div className="md:col-span-2 md:order-first order-last flex flex-col justify-between">
                    <Link href='#'><a>
                        <h3 className="font-ITCGaramondStdLight tracking-tighter md:text-[32px] md:leading-[38px] text-[24px] leading-[27px]">{props.title}</h3></a>
                    </Link>
                    <p className="md:text-sm text-[10px]">{props.excerpt}</p>
                </div>
                <div>
                    <Link href='#'><a>
                        <figure className="relative md:h-[131px] h-[189px] w-full">
                            <Image src={props.icon} alt='' layout="fill"></Image>
                        </figure></a>
                    </Link>
                </div>
            </div>
        </>
    )
}

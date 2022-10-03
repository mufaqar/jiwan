import Image from "next/image";
import Link from "next/link";
import OwnImage from "./OwnImage";


export default function RelatedBlog(props) {
    return (
        <>
            <div className="grid items-center grid-cols-1 gap-5 pb-0 mb-10 border-b border-transparent md:grid-cols-3 md:gap-20 md:border-black md:pb-4 md:mb-5">
                <div className="flex flex-col justify-between order-last md:col-span-2 md:order-first">
                    <Link href={props.link}>
                        <h3 className="font-ITCGaramondStdLight tracking-tighter md:text-[32px] md:leading-[38px] text-[24px] leading-[27px]">{props.title}</h3>
                    </Link>
                    <p className="md:text-sm text-[10px]">{props.excerpt}</p>
                </div>
                <div>
                    <Link href={props.link}>
                        <figure className="relative w-full">
                            <OwnImage path={props.imageUrl} alt={props.link} ></OwnImage>
                        </figure>
                    </Link>
                </div>
            </div>
        </>
    )
}

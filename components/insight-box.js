import Image from "next/image"
import Link from "next/link";

export default function InsightBox(props) {
    return (
        <>
            <div className="grid grid-cols-2 items-center">
                <div className="shadow-3xl h-full flex items-center p-3 pr-5">
                    <Link href='insights/single-article'><a>
                        <h2 className="lg:text-[31px] lg:leading-[37px] md:text-[24px] md:leading-[28px] text-lg font-ITCGaramondStdLight tracking-tighter">{props.title}</h2></a>
                    </Link>
                </div>
                <div>
                    <Link href='insights/single-article'><a>
                        <figure className="relative h-[269px] w-full">
                            <Image src={props.icon} layout="fill" alt=""></Image>
                        </figure></a>
                    </Link>
                </div>
            </div>
        </>
    )
}

import Image from "next/image"
import Link from "next/link";
import btn from '../public/images/btn.png'
import plySign from '../public/images/play-sign.png'

export default function InsightBox({insight}) {
    console.log("🚀 ~ file: index.js ~ line 19 ~ Home ~ insight", insight)
    return (
        <>
            <div className="grid items-center grid-cols-2">
                <div className="flex items-center h-full p-3 pr-5 shadow-3xl">
                    <Link href={`insights/${insight.slug.current}`}><a>
                        <h2 className="lg:text-[31px] lg:leading-[37px] md:text-[24px] md:leading-[28px] text-lg font-ITCGaramondStdLight tracking-tighter">{insight.sub_title}</h2></a>
                    </Link>
                </div>
                <div className="relative">
                    <div><a>
                        <figure className="relative h-[269px] w-full">
                            <Image src={insight.feature_image.asset.url} layout="fill" alt={insight.sub_title}></Image>
                        </figure></a>
                    </div>
                    <a href={insight.feature_image?.video_url} target="_blank" className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer playbtn top-1/2 left-1/2">
                        <Image src={btn} alt="btn" width={85} height={52}></Image>
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <Image src={plySign} alt="btn" width={18} height={18}></Image>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

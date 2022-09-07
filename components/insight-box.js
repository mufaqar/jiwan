import Image from "next/image"
import InsightImg from '../public/images/insightImg.png';

export default function InsightBox() {
    return (
        <>
            <div className="grid grid-cols-2 items-center">
                <div>
                    <h2 className="lg:text-[31px] lg:leading-[37px] md:text-[24px] md:leading-[28px] text-lg font-ITCGaramondStdLight tracking-tighter">Lifetime Capital Gains Exemption</h2>
                </div>
                <div>
                    <figure className="relative h-[269px] w-full">
                        <Image src={InsightImg} layout="fill" alt=""></Image>
                    </figure>
                </div>
            </div>
        </>
    )
}

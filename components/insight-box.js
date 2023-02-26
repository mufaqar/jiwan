import Image from 'next/image';
import Link from 'next/link';
import btn from '../public/images/btn.png';
import plySign from '../public/images/play-sign.png';

export default function InsightBox({ insight }) {
  return (
    <>
      <div className="grid items-center group grid-cols-2">
        <div className="flex items-center h-full p-3 pr-5 shadow-3xl">
          <Link href={`insights/${insight?.slug}`}>
            <a>
              <h2 className="lg:text-[31px] lg:leading-[37px] group-hover:text-[#1A4685] md:text-[24px] md:leading-[28px] text-lg font-ITCGaramondLightCondensed tracking-tighter">
                {insight.title}
              </h2>
            </a>
          </Link>
        </div>
        <div className="relative">
          <div>
            <a>
              <figure className="relative h-[269px] w-full">
                <Image
                  src={insight.featuredImage?.node.mediaItemUrl}
                  layout="fill"
                  alt={insight.title}
                ></Image>
              </figure>
            </a>
          </div>
          <a
            href={insight.feature_image?.video_url}
            target="_blank"
            rel="noreferrer"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer playbtn top-1/2 left-1/2"
          >
            <Image src={btn} alt="btn" width={85} height={52}></Image>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <Image src={plySign} alt="btn" width={18} height={18}></Image>
            </div>
          </a>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 top-0 right-0 left-0 bottom-0 bggradient"></div>
        </div>
      </div>
    </>
  );
}

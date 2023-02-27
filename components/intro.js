import Image from 'next/image';
import IntroImg from '../public/images/Jiwan-Dhillon-Company-Surrey-Accountants-Hero-Desktop.webp';
import MblIntro from '../public/images/Jiwan-Dhillon-Company-Surrey-Accountants-Hero-Mobile.webp';

export default function Intro() {
  return (
    <>
      <section className="py-14 flex md:pt-14 pt-0 min-h-screen mt-[100px]">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-9 items-center">
          <div className="md:order-first order-last md:px-0 px-4">
            <h2 className="lg:text-[64px] md:leading-[64px] md:text-[54px] text-[36px] leading-[36px] font-ITCGaramondLightCondensed tracking-tighter capitalize">
              What does your business <br></br>
              <span>buy you?</span>
            </h2>
          </div>
          <div>
            <figure className="md:flex hidden md:justify-end -z-10">
              <Image src={IntroImg} alt=""></Image>
            </figure>
            <figure className="md:hidden flex w-full h-screen -mt-[100px] relative -z-10">
              <Image
                src={MblIntro}
                layout="fill"
                className="object-cover"
                alt=""
              ></Image>
            </figure>
            <div className="text-xs max-w-[539px] ml-auto py-3 md:px-0 px-3">
              <p>Mah Ji preparing sugar canes for Sukhanoop Singh Dhillon.</p>
              <p>Kanjli, Dist. Sangrur, 1989.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from 'next/image'
import IntroImg from '../public/images/introImg.png';

export default function Intro() {
    return (
        <>
            <section>
                <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 '>
                    <div>
                        <h2 className='lg:text-[64px] md:leading-[64px] font-ITCGaramondStdLight tracking-tighter capitalize'>What does your business <span className='italic'>buy you?</span></h2>
                    </div>
                    <div>
                        <Image src={IntroImg}></Image>
                    </div>
                </div>
            </section>
        </>
    )
}

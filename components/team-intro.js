import Image from 'next/image';
import Company from '../public/images/company.png';

export default function TeamIntro() {
    return (
        <>

            <section className="py-10 px-4">
                <div className="container mx-auto mb-10">
                    <h3 className="text-sm ">OUR TEAM</h3>
                </div>
                <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
                    <h2 className='font-ITCGaramondStdLight lg:text-[56px] lg:leading-[67px] md:text-[48px] text-[42px] leading-[45px] tracking-tighter'>Jiwan Dhillon & Company</h2>
                    <p className='text-sm max-w-[477px]'>A twenty-six year old family-run enterprise dealing with over $526 million dollars of client capital.</p>
                </div>
            </section>

            <section className='py-10 items-center relative'>
                <div className='flex justify-center md:px-0 px-4 '>
                    <Image src={Company}></Image>
                </div>
                <div className='bg-[#6794CF] md:max-h-[107px] max-h-[81px] absolute inset-0 top-[40%] -z-30'></div>
            </section>
        </>
    )
}

import Image from 'next/image'
import Partner1 from '../public/images/partner1.png';
import Partner2 from '../public/images/partner2.png';

export default function Partners() {
    return (
        <>
            <section className="py-10 mb-10 px-4">
                <div className="container mx-auto">
                    <h3 className="text-sm mb-10">PROFFESIONAL ASSOCIATIONS</h3>
                    <div className='grid grid-cols-2 gap-5 md:max-w-[898px] mx-auto'>
                        <figure>
                            <Image src={Partner1} alt=''></Image>
                        </figure>
                        <figure>
                            <Image src={Partner2} alt=''></Image>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

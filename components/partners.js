import Image from 'next/image';
import Partner1 from '../public/images/cpa.svg';
import Partner2 from '../public/images/ctf.svg';

export default function Partners() {
  return (
    <>
      <section className="py-10 px-4 ">
        <div className="container mx-auto">
          <h3 className="text-sm mb-10">PROFFESIONAL ASSOCIATIONS</h3>
          <div className="grid grid-cols-2 gap-5 md:max-w-[898px] mx-auto">
            <figure>
              <Image src={Partner1} alt="" width={340} height={96}></Image>
            </figure>
            <figure>
              <Image src={Partner2} alt="" width={340} height={96}></Image>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

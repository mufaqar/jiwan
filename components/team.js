import Image from "next/image";
import Team1 from '../public/images/team1.png';
import Team2 from '../public/images/team2.png';
import Team3 from '../public/images/team3.png';
import Team4 from '../public/images/team4.png';
import Team5 from '../public/images/team5.png';
import Team6 from '../public/images/team6.png';

export default function Team() {
    return (
        <>
            <section className="py-10 px-4">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
                        <div className="group relative">
                            <figure className="relative h-[330px] w-full">
                                <Image src={Team1} layout='fill' alt=''></Image>
                            </figure>
                            <div className="hidden group-hover:block h-full bg-black text-white absolute inset-0 p-5">
                                <h2 className="md:text-sm text-[10px]">SUKHANOOP DHILLON</h2>
                                <p className="md:text-sm text-[10px]">Director</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <figure className="relative h-[330px] w-full">
                                <Image src={Team2} layout='fill' alt=''></Image>
                            </figure>
                            <div className="hidden group-hover:block h-full bg-black text-white absolute inset-0 p-5">
                                <h2 className="md:text-sm text-[10px]">SUKHANOOP DHILLON</h2>
                                <p className="md:text-sm text-[10px]">Director</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <figure className="relative h-[330px] w-full">
                                <Image src={Team3} layout='fill' alt=''></Image>
                            </figure>
                            <div className="hidden group-hover:block h-full bg-black text-white absolute inset-0 p-5">
                                <h2 className="md:text-sm text-[10px]">SUKHANOOP DHILLON</h2>
                                <p className="md:text-sm text-[10px]">Director</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <figure className="relative h-[330px] w-full">
                                <Image src={Team4} layout='fill' alt=''></Image>
                            </figure>
                            <div className="hidden group-hover:block h-full bg-black text-white absolute inset-0 p-5">
                                <h2 className="md:text-sm text-[10px]">SUKHANOOP DHILLON</h2>
                                <p className="md:text-sm text-[10px]">Director</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <figure className="relative h-[330px] w-full">
                                <Image src={Team5} layout='fill' alt=''></Image>
                            </figure>
                            <div className="hidden group-hover:block h-full bg-black text-white absolute inset-0 p-5">
                                <h2 className="md:text-sm text-[10px]">SUKHANOOP DHILLON</h2>
                                <p className="md:text-sm text-[10px]">Director</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <figure className="relative h-[330px] w-full">
                                <Image src={Team6} layout='fill' alt=''></Image>
                            </figure>
                            <div className="hidden group-hover:block h-full bg-black text-white absolute inset-0 p-5">
                                <h2 className="md:text-sm text-[10px]">SUKHANOOP DHILLON</h2>
                                <p className="md:text-sm text-[10px]">Director</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <figure className="relative h-[330px] w-full">
                                <Image src={Team6} layout='fill' alt=''></Image>
                            </figure>
                            <div className="hidden group-hover:block h-full bg-black text-white absolute inset-0 p-5">
                                <h2 className="md:text-sm text-[10px]">SUKHANOOP DHILLON</h2>
                                <p className="md:text-sm text-[10px]">Director</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <figure className="relative h-[330px] w-full">
                                <Image src={Team6} layout='fill' alt=''></Image>
                            </figure>
                            <div className="hidden group-hover:block h-full bg-black text-white absolute inset-0 p-5">
                                <h2 className="md:text-sm text-[10px]">SUKHANOOP DHILLON</h2>
                                <p className="md:text-sm text-[10px]">Director</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

import Image from "next/image";
import Article1 from '../../public/images/article1.png';
import { FaEnvelope, FaFacebookF, FaLink, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from "next/link";
import RelatedBlog from "../../components/related-blog";

export default function SingleArticle({title, icon, excerpt}) {
    return (
        <main>
            <section className='py-10 '>
                <div className="container mx-auto">
                    <div className="md:max-w-[815px] mx-auto md:px-0 px-4 mb-10">
                        <h2 className="font-ITCGaramondStdLight tracking-tighter md:text-[56px] md:leading-[56px] text-[38px] leading-[41px] mb-3">Planning for the Sale of an Agricultural Property</h2>
                        <p className="font-ITCGaramondStdLight tracking-tighter md:text-[25px] md:leading-[28px] text-[22px] leading-[25px]">In order to save paying taxes on a newely sold property, what are the considerations to put in place to help you save your money?</p>
                    </div>
                    <figure className="md:max-w-[976px] w-full mx-auto mb-14">
                        <Image src={Article1} alt='' className="mx-auto"></Image>
                        <figcaption className="text-xs md:px-0 px-4">The Fraser Valley / Klassen Farms</figcaption>
                    </figure>

                    <div className="md:max-w-[815px] mx-auto md:px-0 px-4">
                        <div className="flex justify-between">
                            <p className="text-[13px]">JANUARY 17, 2022</p>
                            <div className="socials">
                                <details className="">
                                    <summary className="after:content-['_^'] text-right text-[13px]">
                                        SHARE
                                    </summary>
                                    <div className="mt-2">
                                        <ul className="flex space-x-2">
                                            <li className="bg-black text-white px-2 py-2"><Link href='#'><a><FaFacebookF /></a></Link> </li>
                                            <li className="bg-black text-white px-2 py-2"><Link href='#'><a><FaTwitter /></a></Link> </li>
                                            <li className="bg-black text-white px-2 py-2"><Link href='#'><a><FaLinkedinIn /></a></Link> </li>
                                            <li className="bg-black text-white px-2 py-2"><Link href='#'><a><FaEnvelope /></a></Link> </li>
                                            <li className="bg-black text-white px-2 py-2"><Link href='#'><a><FaLink /></a></Link> </li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div className="border-t border-black mt-10 pt-10">
                            <p className="text-xl mb-5">When I was first approached to plan for sale of agricultural land i talked to my friend who had two things to say 1) farm on your land or 2) get someone else to so you wont have to pay tax later.  That would be my summary for this article.</p>
                            <p className="text-xl mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus vel lacus et fermentum. Etiam scelerisque tellus nunc, a consectetur tellus pellentesque vitae. Duis rutrum, urna sed venenatis dictum, nunc lorem ullamcorper mauris, sed ultrices elit odio eget diam. Pellentesque sollicitudin rhoncus elit, ut imperdiet ipsum convallis sed. Nullam egestas congue elit sit amet hendrerit. Aenean rutrum sem quis orci congue vehicula. Donec rutrum eros vel erat pellentesque, luctus blandit tellus rutrum. Nunc rhoncus leo vel condimentum commodo. Donec a eros in ex facilisis tristique non eu sapien.</p>
                            <p className="text-xl mb-5">Nam scelerisque euismod vehicula. Sed mauris nisi, varius in luctus non, facilisis id mauris. Integer varius, tortor ut gravida scelerisque, augue risus scelerisque metus, quis sagittis ante mauris fermentum dui. Vivamus sed dolor posuere, scelerisque libero at, congue dui. Nulla augue odio, porttitor vitae efficitur a, pulvinar a mi. Donec luctus ipsum sed risus commodo, eget interdum massa pulvinar. Fusce a dignissim eros. Aliquam quis tincidunt dui.</p>
                            <p className="text-xl mb-5">Vivamus rhoncus felis a ligula porta, in mattis ex pharetra. Suspendisse sed feugiat nisi, in rhoncus elit. Donec dignissim quis libero quis volutpat. Cras non velit leo. Mauris a nunc elit. Integer nec efficitur erat, et sollicitudin risus. Ut tincidunt ligula sit amet tellus tempor, eu fringilla arcu faucibus. Mauris ligula dui, bibendum id molestie vel, semper sit amet augue. Sed imperdiet vehicula sagittis. Morbi scelerisque leo quis lacinia facilisis. Nunc dignissim auctor tellus, iaculis dictum elit.</p>
                            <p className="text-xl mb-5">facilisis felis. Maecenas eleifend vitae erat nec ultricies. Suspendisse pretium felis dolor, eu fermentum nunc aliquet in.</p>
                            <p className="text-xl ">Praesent at ipsum id massa volutpat interdum. Cras sed metus semper, lacinia metus nec, congue massa. Vivamus congue molestie fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eget viverra turpis. Maecenas in felis ac arcu imperdiet dignissim. Suspendisse id egestas lacus.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-10 '>
                <div className="container mx-auto">
                    <div className="md:max-w-[815px] mx-auto md:px-0 px-4">
                        <h2 className="font-ITCGaramondStdLight tracking-tighter md:text-[36px] leading-[21px] text-[31px] border-b border-black pb-4 mb-3">READ MORE</h2>
                        <div>
                            <RelatedBlog title="Taking Salary vs. Dividends in Your Company" icon="/images/related1.png" excerpt="Nulla elementum placerat consectetur. Cras luctus, lacus nec convallis auctor?"/>
                            <RelatedBlog title="What is Differing to Save?" icon="/images/related2.png" excerpt="Nulla elementum placerat consectetur. Cras luctus, lacus nec convallis auctor?"/>
                            <RelatedBlog title="Getting Family Members into your Business" icon="/images/related3.png" excerpt="Nulla elementum placerat consectetur. Cras luctus, lacus nec convallis auctor?"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

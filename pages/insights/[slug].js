import Image from "next/image";
import OwnImage from '../../components/OwnImage'
import { FaEnvelope, FaFacebookF, FaLink, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from "next/link";
import RelatedBlog from "../../components/related-blog";
import { sanityClient } from "../../lib/client";
import PortableText from "react-portable-text"
import { useRef, useState } from "react";
import { useEffect } from "react";
import Router from "next/router";



// query 
const insightSlug = `*[_type == "insights" && slug.current == $slug][0]{
    sub_title,
    title,
    slug,
    feature_image{
      asset->{
        url
      },
      caption,
      video_url,
    },
    banner_image{
        asset->{
          url
        },
        caption,
    },
    excerpt,
    date,
    content,
    related_project[]->{
        title,
        banner_image{
            asset->{
              url
            },
            caption,
        },
        slug,
        excerpt,
    }
}`;


export default function SingleArticle({ project }) {

    const [domainName, setDomainName] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDomainName(window.origin);
        }
    }, [])

    return (
        <main>
            <section className='py-10 '>
                <div className="container mx-auto">
                    <div className="md:max-w-[815px] mx-auto md:px-0 px-4 mb-10">
                        <h2 className="font-ITCGaramondStdLight tracking-tighter md:text-[56px] md:leading-[56px] text-[38px] leading-[41px] mb-3">{project?.title}</h2>
                        <p className="font-ITCGaramondStdLight tracking-tighter md:text-[25px] md:leading-[28px] text-[22px] leading-[25px]">{project?.excerpt}</p>
                    </div>
                    <figure className="md:max-w-[976px] w-full mx-auto mb-14">
                        <OwnImage path={project?.banner_image?.asset.url} alt={project?.title} className="mx-auto"></OwnImage>
                        <figcaption className="px-4 text-xs md:px-0">{project?.banner_image?.caption}</figcaption>
                    </figure>

                    <div className="md:max-w-[815px] mx-auto md:px-0 px-4">
                        <div className="flex justify-between">
                            <p className="text-[13px]">{project?.date}</p>
                            <div className="socials">
                                <details className="">
                                    <summary className="after:content-['_^'] text-right text-[13px]">
                                        SHARE
                                    </summary>
                                    <div className="mt-2">
                                        <ul className="flex space-x-2">
                                            <li className="px-2 py-2 text-white bg-black"><a href={`https://www.facebook.com/sharer/sharer.php?u=https://${domainName}/insights/${project?.slug.current}`} target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
                                            <li className="px-2 py-2 text-white bg-black"><a href={`https://twitter.com/intent/tweet?url=https://${domainName}/insights/${project?.slug.current}/&text=`} target="_blank" rel="noreferrer"><FaTwitter /></a></li>
                                            <li className="px-2 py-2 text-white bg-black"><a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://${domainName}/insights/${project?.slug.current}`} target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                                            <li className="px-2 py-2 text-white bg-black"><a href={`mailto:info@example.com?&subject=&cc=&bcc=&body=https://${domainName}/insights/${project?.slug.current}/%0A`} target="_blank" rel="noreferrer"><FaEnvelope /></a></li>
                                            <li className="px-2 py-2 text-white bg-black" ><div><FaLink /></div></li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                        
                        <div className="pt-10 mt-4 text-xl border-t border-black _content ">
                            { project?.content &&  <PortableText
                                content={project.content}
                                serializers={{
                                    p: ({ children }) => <p className="">{children}</p>
                                }}   
                            /> }
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-10 '>
                <div className="container mx-auto">
                    <div className="md:max-w-[815px] mx-auto md:px-0 px-4">
                        <h2 className="font-ITCGaramondStdLight tracking-tighter md:text-[36px] leading-[21px] text-[31px] border-b border-black pb-4 mb-3">READ MORE</h2>
                        <div>
                            {
                                project?.related_project?.slice(0, 3).map((item, index) => (
                                    <RelatedBlog title={item.title} excerpt={item.excerpt} link={item.slug.current} imageUrl={item.banner_image?.asset.url} key={index} />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}





export async function getStaticPaths() {
    const paths = await sanityClient.fetch(`
  *[_type == "insights" && defined(slug.current)]{
       "params": {
         "slug" : slug.current
       }
     }
  `);
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const project = await sanityClient.fetch(insightSlug, { slug });
    return {
        props: {
            project,
            preview: true
        }
    };
}
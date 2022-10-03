import InsightBox from '../../components/insight-box';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import { sanityClient } from '../../lib/client';

// Query 
export const FetchInsight = `*[_type == "insights"]{
    sub_title,
    feature_image{
      asset->{
        url
      },
      caption,
      video_url,
    },
    slug,
  }`;
  

export default function index({ insight }) {
    return (
        <main>
            <section className='px-4 py-10'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                        {
                            insight.map((item, index) => (
                                <InsightBox key={index} insight={item} />
                            ))
                        }
                    </div>
                    <div className='flex items-center justify-center mt-10'>
                        <Link href="#">
                            <a className="md:text-[14px] text-[11px] text-[#1A4782] underline flex space-x-7 items-center">
                                SEE MORE INSIGHTS <AiOutlinePlus />
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}


export async function getStaticProps() {
    const insight = await sanityClient.fetch(FetchInsight);
  
    return {
      props: {
        insight
      }
    };
  }
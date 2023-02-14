import InsightBox from '../../components/insight-box';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import { client } from '../../lib/client';
import { gql } from '@apollo/client';



export default function index({ insights }) {
    return (
        <main>
            <section className='px-4 py-10'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                        {
                            insights?.map((item, index) => (
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


export async function getServerSideProps(context) {
  
    const GET_INSIGHT = gql`
      query insights {
        insights {
          nodes {
            excerpt
            title
            slug
            seo {
              fullHead
              title
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            content
            insights {
              image {
                mediaItemUrl
              }
              imageCaption
            }
          }
        }
      }
    `;
  
    const GET_INSIGHT_RESPONCE = await client.query({ query: GET_INSIGHT });
  
    return {
      props: {
        insights: GET_INSIGHT_RESPONCE?.data?.insights?.nodes 
      },
    };
  }
  
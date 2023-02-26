import OwnImage from '../../components/OwnImage';
import {
  FaEnvelope,
  FaFacebookF,
  FaLink,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import RelatedBlog from '../../components/related-blog';
import { client, sanityClient } from '../../lib/client';
import PortableText from 'react-portable-text';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { gql } from '@apollo/client';

export default function SingleArticle({ allinsights, insight }) {
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDomainName(window.origin);
    }
  }, []);

  return (
    <main>
      <section className="py-10 mt-[124px]">
        <div className="container mx-auto">
          <div className="md:max-w-[815px] mx-auto md:px-0 px-4 mb-10">
            <h2 className="font-ITCGaramondLightCondensed tracking-tighter md:text-[56px] md:leading-[56px] text-[38px] leading-[41px] mb-3">
              {insight?.title}
            </h2>

            <div
              className="font-ITCGaramondLightCondensed tracking-tighter md:text-[25px] md:leading-[28px] text-[22px] leading-[25px]"
              dangerouslySetInnerHTML={{
                __html: insight?.excerpt,
              }}
            ></div>
          </div>
          <figure className="md:max-w-[976px] w-full mx-auto mb-14">
            <OwnImage
              path={insight?.insights?.image?.mediaItemUrl}
              alt={insight?.title}
              className="mx-auto"
            ></OwnImage>
            <figcaption className="px-4 text-xs md:px-0">
              {insight?.insights?.imageCaption}
            </figcaption>
          </figure>

          <div className="md:max-w-[815px] mx-auto md:px-0 px-4">
            <div className="flex justify-between">
              <p className="text-[13px]">{insight?.date}</p>
              <div className="socials">
                <details className="">
                  <summary className="after:content-['_^'] text-right text-[13px]">
                    SHARE
                  </summary>
                  <div className="mt-2">
                    <ul className="flex space-x-2">
                      <li className="px-2 py-2 text-white bg-black">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=https://${domainName}/insights/${insight?.slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebookF />
                        </a>
                      </li>
                      <li className="px-2 py-2 text-white bg-black">
                        <a
                          href={`https://twitter.com/intent/tweet?url=https://${domainName}/insights/${insight?.slug}/&text=`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                      <li className="px-2 py-2 text-white bg-black">
                        <a
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=https://${domainName}/insights/${insight?.slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li className="px-2 py-2 text-white bg-black">
                        <a
                          href={`mailto:info@example.com?&subject=&cc=&bcc=&body=https://${domainName}/insights/${insight?.slug}/%0A`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaEnvelope />
                        </a>
                      </li>
                      <li className="px-2 py-2 text-white bg-black">
                        <div>
                          <FaLink />
                        </div>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>

            <div className="pt-10 mt-4 text-xl border-t border-black _content ">
              {insight?.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: insight?.content,
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 ">
        <div className="container mx-auto">
          <div className="md:max-w-[815px] mx-auto md:px-0 px-4">
            <h2 className="font-ITCGaramondLightCondensed tracking-tighter md:text-[36px] leading-[21px] text-[31px] border-b border-black pb-4 mb-3">
              READ MORE
            </h2>
            <div>
              {allinsights?.slice(0, 1).map((item, index) => (
                <RelatedBlog
                  title={item.title}
                  excerpt={item.excerpt}
                  link={item.slug}
                  imageUrl={item.insights?.image?.mediaItemUrl}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps({ params }) {
  console.log('params.slug', params.slug);
  const GET_INSIGHT = gql`
    query insight($id: ID!) {
      insight(id: $id, idType: URI) {
        date
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
  `;

  const GET_ALL_INSIGHT = gql`
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

  const response = await client.query({
    query: GET_INSIGHT,
    variables: {
      id: params.slug,
    },
  });

  const ALL_INSIGHT = await client.query({ query: GET_ALL_INSIGHT });

  return {
    props: {
      insight: response?.data?.insight,
      allinsights: ALL_INSIGHT?.data?.insights?.nodes,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: 'blocking',
  };
}

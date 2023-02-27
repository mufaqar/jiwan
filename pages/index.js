import Link from 'next/link';
import CaseStudy from '../components/case-study';
import InsightBox from '../components/insight-box';
import Intro from '../components/intro';
import Partners from '../components/partners';
import ServiceBox from '../components/service-box';
import Team from '../components/team';
import TeamIntro from '../components/team-intro';
import { AiOutlinePlus } from 'react-icons/ai';
import { client, sanityClient } from '../lib/client';
import { gql } from '@apollo/client';

export default function Home({
  insights,
  casestudy,
  team,
  taxation,
  accounting,
  assurance,
  consulting,
}) {
  return (
    <main>
      <Intro />

      <section className="min-h-screen px-4 py-10" id="case-studies">
        <div className="container mx-auto mb-10">
          <h3 className="text-sm">CASE STUDY</h3>
        </div>
        <CaseStudy casestudy={casestudy} />
      </section>

      <section className="px-4 py-10">
        <div className="container mx-auto mb-10">
          <h3 className="text-sm">INSIGHTS</h3>
        </div>
        <div className="container items-center mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {insights.slice(0, 4).map((item, index) => (
              <InsightBox key={index} insight={item} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-10">
            <Link href="/insights">
              <a className="md:text-[14px] text-[11px] text-[#1A4782] underline flex space-x-7 items-center">
                SEE MORE INSIGHTS
                <span className="pl-[5px]">
                  <AiOutlinePlus />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="px-0 py-10 md:px-4">
        <div className="container mx-auto ">
          <h3 className="px-4 mb-5 text-sm md:px-0">SERVICES</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
            <div className="hidden md:block">
              <p className="text-sm max-w-[183px]">
                We work with a limited number of personal and corporate clients.
                Here’s how:
              </p>
            </div>
            <div className="col-span-3">
              <ServiceBox
                taxation={taxation}
                accounting={accounting}
                assurance={assurance}
                consulting={consulting}
              />
            </div>
          </div>
        </div>
      </section>

      <TeamIntro />

      <Team team={team} />

      <Partners />
    </main>
  );
}

export async function getServerSideProps(context) {
  const GET_CASESTUDY = gql`
    query CaseStudies {
      caseStudies {
        nodes {
          title
          slug
          excerpt
          content
          seo {
            fullHead
            title
          }
          caseStudy {
            name
            stats {
              amountAndPersontage
              fieldGroupName
              info
            }
          }
        }
      }
    }
  `;

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

  const GET_TEAM = gql`
    query Team {
      teams {
        nodes {
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          team {
            designation
            name
          }
          content
        }
      }
    }
  `;

  const GET_CASESTUDY_RESPONCE = await client.query({ query: GET_CASESTUDY });
  const GET_INSIGHT_RESPONCE = await client.query({ query: GET_INSIGHT });
  const GET_TEAM_RESPONCE = await client.query({ query: GET_TEAM });

  return {
    props: {
      casestudy: GET_CASESTUDY_RESPONCE?.data?.caseStudies?.nodes,
      insights: GET_INSIGHT_RESPONCE?.data?.insights?.nodes,
      team: GET_TEAM_RESPONCE?.data?.teams?.nodes,
    },
  };
}

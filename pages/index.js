import Link from 'next/link';
import CaseStudy from '../components/case-study';
import InsightBox from '../components/insight-box';
import Intro from '../components/intro';
import Partners from '../components/partners';
import ServiceBox from '../components/service-box';
import Team from '../components/team';
import TeamIntro from '../components/team-intro';
import {AiOutlinePlus} from 'react-icons/ai';
import { sanityClient } from '../lib/client';

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
const caseStudy = `*[_type == "casestudy"]{
  title,
  short_info,
  profit[]->{
      value,
      detail
  },
  description,
  name
}`;
const fetchTeam = `*[_type == "team"]{
  _id,
  name,
  position,
  profile_image
}`;
const TaxationQuery = `*[_type == "services_taxation"]{
  type,
  name,
  price
}`;
const accountingQuery = `*[_type == "services_accounting"]{
  type,
  name,
  price,
  from
}`;
const assuranceQuery = `*[_type == "services_assurance"]{
  type,
  name,
  price,
  from
}`;
const consultingQuery = `*[_type == "services_consulting"]{
  type,
  name,
  price,
  from
}`;





export default function Home({ insight, casestudy, team, taxation, accounting, assurance, consulting }) {
  
  return (
    <main>
      <Intro />

      <section className="min-h-screen px-4 py-10">
        <div className="container mx-auto mb-10">
          <h3 className="text-sm">CASE STUDY</h3>
        </div>
        <CaseStudy casestudy={casestudy}/>
      </section>

      <section className="px-4 py-10">
        <div className="container mx-auto mb-10">
          <h3 className="text-sm">INSIGHTS</h3>
        </div>
        <div className="container items-center mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {
              insight.slice(0,4).map((item, index)=> (
                <InsightBox key={index} insight={item} />
              ))
            }
            
            
          </div>
          <div className='flex items-center justify-center mt-10'>
            <Link href="/insights">
              <a className="md:text-[14px] text-[11px] text-[#1A4782] underline flex space-x-7 items-center">
                SEE MORE INSIGHTS <AiOutlinePlus />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section id='services' className="px-0 py-10 md:px-4">
        <div className="container mx-auto ">
          <h3 className="px-4 mb-5 text-sm md:px-0">SERVICES</h3>
          <div className='grid grid-cols-1 md:grid-cols-4 md:gap-10'>
            <div className='hidden md:block'>
              <p className='text-sm max-w-[183px]'>We work with a limited number of personal and corporate clients. Here’s how:</p>
            </div>
            <div className='col-span-3'>
              <ServiceBox taxation={taxation} accounting={accounting} assurance={assurance} consulting={consulting}/>
            </div>
          </div>
        </div>
      </section>

      <TeamIntro />

      <Team team={team}/>

      <Partners />
    </main>
  );
}



export async function getStaticProps() {
  const insight = await sanityClient.fetch(FetchInsight);
  const casestudy = await sanityClient.fetch(caseStudy);
  const team = await sanityClient.fetch(fetchTeam);
  const taxation = await sanityClient.fetch(TaxationQuery);
  const accounting = await sanityClient.fetch(accountingQuery);
  const assurance = await sanityClient.fetch(assuranceQuery);
  const consulting = await sanityClient.fetch(consultingQuery);

  return {
    props: {
      insight,
      casestudy,
      team,
      taxation,
      accounting,
      assurance,
      consulting
    }
  };
}
import Link from 'next/link';
import CaseStudy from '../components/case-study';
import InsightBox from '../components/insight-box';
import Intro from '../components/intro';
import Partners from '../components/partners';
import ServiceBox from '../components/service-box';
import Team from '../components/team';
import TeamIntro from '../components/team-intro';
import {AiOutlinePlus} from 'react-icons/ai';


export default function Home({ title, icon }) {
  return (
    <main>
      <Intro />

      <section className="py-10 px-4 min-h-screen">
        <div className="container mx-auto mb-10">
          <h3 className="text-sm">CASE STUDY</h3>
        </div>
        <CaseStudy />
      </section>

      <section className="py-10 px-4">
        <div className="container mx-auto mb-10">
          <h3 className="text-sm">INSIGHTS</h3>
        </div>
        <div className="container mx-auto items-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <InsightBox title="Lifetime Capital Gains Exemption" icon="/images/insightImg.png" />
            <InsightBox title="Sale of a Business" icon="/images/insightImg.png" />
            <InsightBox title="Corporate Reorganization" icon="/images/insightImg.png" />
            <InsightBox title="Transferring Property to a Family Member" icon="/images/insightImg.png" />
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

      <section id='services' className="py-10 md:px-4 px-0">
        <div className="container mx-auto ">
          <h3 className="text-sm mb-5 md:px-0 px-4">SERVICES</h3>
          <div className='grid md:grid-cols-4 grid-cols-1 md:gap-10'>
            <div className='md:block hidden'>
              <p className='text-sm max-w-[183px]'>We work with a limited number of personal and corporate clients. Here’s how:</p>
            </div>
            <div className='col-span-3'>
              <ServiceBox />
            </div>
          </div>
        </div>
      </section>

      <TeamIntro />

      <Team />

      <Partners />
    </main>
  );
}

import CaseStudy from '../components/case-study';
import { sanityClient } from '../lib/client';

// Query 
const caseStudy = `*[_type == "casestudy"]{
    title,
    short_info,
    profit[]->{
        value,
        detail
    },
    description,
    name
  }`

export default function Case_Studies({casestudy}) {
    return (
        <main>
            <section className='min-h-screen px-4 py-10 md:px-0'>
                <div className="container mx-auto mb-10 ">
                    <h3 className="text-sm">CASE STUDY</h3>
                </div>
                <CaseStudy casestudy={casestudy}/>
            </section>
        </main>
    )
}


export async function getStaticProps() {
    const casestudy = await sanityClient.fetch(caseStudy);
  
    return {
      props: {
        casestudy
      }
    };
  }

import CaseStudy from '../components/case-study';
import Intro from '../components/intro';

export default function Home() {
  return (
    <main>
      <Intro/>

      <section className='py-12 px-3'>
        <div className='container mx-auto mb-10'>
          <h3 className='text-sm'>CASE STUDY</h3>
        </div>
        <CaseStudy/>
      </section>
    </main>
  );
}

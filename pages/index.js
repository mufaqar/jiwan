import Link from 'next/link';
import CaseStudy from '../components/case-study';
import InsightBox from '../components/insight-box';
import Intro from '../components/intro';

export default function Home() {
  return (
    <main>
      <Intro />

      <section className="py-12 px-3">
        <div className="container mx-auto mb-10">
          <h3 className="text-sm">CASE STUDY 01</h3>
        </div>
        <CaseStudy />
      </section>

      <section className="py-12 px-3">
        <div className="container mx-auto mb-10">
          <h3 className="text-sm">INSIGHTS</h3>
        </div>
        <div className="container mx-auto items-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <InsightBox />
            <InsightBox />
            <InsightBox />
            <InsightBox />
          </div>
          <Link href="#">
            <a className="md:text-[14px] text-[11px] text-[#1A4782] underline">
              SEE MORE INSIGHTS
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}

import InsightBox from '../../components/insight-box';
import Link from 'next/link';
import {AiOutlinePlus} from 'react-icons/ai';

export default function index() {
    return (
            <main>
                <section className='py-10 px-4'>
                    <div className='container mx-auto'>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                            <InsightBox title="Lifetime Capital Gains Exemption" icon="/images/insightImg.png" />
                            <InsightBox title="Sale of a Business" icon="/images/insightImg.png" />
                            <InsightBox title="Corporate Reorganization" icon="/images/insightImg.png" />
                            <InsightBox title="Transferring Property to a Family Member" icon="/images/insightImg.png" />
                            <InsightBox title="Lifetime Capital Gains Exemption" icon="/images/insightImg.png" />
                            <InsightBox title="Sale of a Business" icon="/images/insightImg.png" />
                            <InsightBox title="Corporate Reorganization" icon="/images/insightImg.png" />
                            <InsightBox title="Transferring Property to a Family Member" icon="/images/insightImg.png" />
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

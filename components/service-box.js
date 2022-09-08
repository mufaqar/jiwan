import Image from "next/image";
import Textation from '../public/images/textation.png';
import Accounting from '../public/images/accounting.png';
import Assurance from '../public/images/assurance.png';
import Consulting from '../public/images/consulting.png';

export default function ServiceBox() {
    return (
        <>
            <div className="Textation">
                <details className="border-y border-black md:border-transparent open:border-y open:border-black md:mb-14 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2" closed>
                    <summary className="">
                        <div className="flex items-center">
                            <h2 className="lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5 open:italic">Taxation</h2>
                            <figure className="relative ">
                                <Image src={Textation} alt=''></Image>
                            </figure>
                        </div>
                    </summary>
                    <div className="mt-5 md:w-1/2">
                        <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">PERSONAL</h3>
                        <ul className="mb-10">
                            <li className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2">
                                <span>T1 Personal Tax Return</span><span>$100</span>
                            </li>
                        </ul>
                        <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">ADDITIONAL SERVICES</h3>
                        <ul className="mb-10">
                            <li className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2">
                                <span>Business Income (Per Business)</span><span>$300</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Rental income (per business) </span><span>$100</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Moving expenses</span><span>$100</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Employment expenses</span><span>$100</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Automobile expense</span><span>$35</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Meals and Lodging Expenses</span><span>$100</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Childcare expenses</span><span>$100</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Capital gains</span><span>$30</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Sale of Principle Residence</span><span>$50</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Eligible/Infirm/Dependants</span><span>$30</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Donations</span><span>$10</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Medical expenses</span><span>$10</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>RRSP deductions</span><span>$10</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Other deductions</span><span>$10</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Request for Loss Carryback</span><span>$30</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Authorize a Representative</span><span>$30</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Training credits</span><span>$30</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Joint Election to Split Pension Income</span><span>$40</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Foreign income statement (T1135)</span><span>$100</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Federal foreign tax credit</span><span>$30</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Foreign income (per slip)</span><span>$50</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Net capital losses</span><span>$20</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Net non-capital loses</span><span>$20</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Northern resident deduction</span><span>$50</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Bookkeeping</span><span>$70/hr</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Complex investments, capital gains</span><span>$100/hr</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Complex reconciliations</span><span>$100/hr</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>CRA post assessment review</span><span>$70/hr</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>CRA audit support</span><span>$250/hr</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Complex tax planning</span><span>$250/hr</span>
                            </li>
                        </ul>
                        <p className="text-[9px] mb-3">Additional charges will be applied for services not listed.</p>
                        <p className="text-[9px]">Our pricing assumes that the company's bookkeeping is completed and correct. Additional fees will be charged to bring the company's books and records to an acceptable standard to start your tax filings.</p>
                    </div>
                </details>
            </div>

            <div className="Accounting">
                <details className="border-b border-black md:border-transparent open:border-b open:border-black md:mb-14 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2" closed>
                    <summary className="">
                        <div className="flex items-center">
                            <h2 className="lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5 open:italic">Accounting</h2>
                            <figure className="relative ">
                                <Image src={Accounting} alt=''></Image>
                            </figure>
                        </div>
                    </summary>
                    <div className="mt-5">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                            <div>
                                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">III</h3>
                                <ul className="mb-10">
                                    <li className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2">
                                        <span>$250/month</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Annual accounting</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Year end financial statements 1</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>T2 corporate tax return</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Annual CPA tax planning</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>-</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Annual GST/HST/PST</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>-</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>-</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Support (3 day response time)</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>-</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">II</h3>
                                <ul className="mb-10">
                                    <li className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2">
                                        <span>$600/month</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Quarterly accounting</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Year end financial statements 1</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>T2 corporate tax return</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Quarterly CPA tax planning</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Bookkeeping 2</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Quarterly GST/HST/PST</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Payroll/WCB</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>T5/T4a/T5013 statements</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Support (1 day response time)</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Xero bookkeeping software 3</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">I</h3>
                                <ul className="mb-10">
                                    <li className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2">
                                        <span>$1000/month</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Monthly accounting</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Year end financial statements 1</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>T2 corporate tax return</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Monthly CPA tax planning</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Bookkeeping 2</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Monthly GST/HST/PST</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Payroll/WCB</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>T5/T4a/T5013 statements</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Support (1 day response time)</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Xero bookkeeping software 3</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">ADDITIONAL SERVICES</h3>
                                <ul className="mb-10">
                                    <li className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2">
                                        <span>Trust returns</span><span>From</span><span>$1,000</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Amalgamations and Wind Ups</span><span>From</span><span>$6,000</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Corporate Reorganizations</span><span>From</span><span>$6,000</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Asset transfers</span><span>From</span><span>$6,000</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Tax Planning and Compliance</span><span>$250/hr</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>CRA post assessment review</span><span>$70/hr</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>CRA Audit support</span><span>$250/hr</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Additional reconcillation accounts</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Year-end bookkeeping cleanup 4</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Structuring and Tax Planning</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>CRA Post Assesment Review and Audit Support</span>
                                    </li>
                                </ul>
                                <p className="text-[9px] mb-3">1. Includes financial reports or statements, corporate tax returns, annual GST return filing and preparation, annual T5-slip filing and preparation, and a meeting with your CPA. Fixed monthly pricing is available.</p>
                                <p className="text-[9px] mb-3">2. Includes up to four reconcilliation accounts. Examples of reconcillation accounts include bank, credit card, lines of credit, or loans.</p>
                                <p className="text-[9px] mb-3">3. Personal access to Xero bookkeeping software.</p>
                                <p className="text-[9px]">4. For corporate year-end work, our pricing assumes that the company’s bookkeeping is completed and correct before we begin.
                                    We may charge additional fees based on incomplete or inaccurate bookkeeping depending on the amount of work that is required to bring the company’s books and records to an acceptable standard to facilitate your accounting.</p>
                            </div>
                        </div>
                    </div>
                </details>
            </div>

            <div className="Assurance">
                <details className="border-b border-black md:border-transparent open:border-b open:border-black md:mb-14 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2" closed>
                    <summary className="">
                        <div className="flex items-center">
                            <h2 className="lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5 open:italic">Assurance</h2>
                            <figure className="relative ">
                                <Image src={Assurance} alt=''></Image>
                            </figure>
                        </div>
                    </summary>
                    <div className="mt-5 md:w-1/2">
                        <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3 flex justify-between">AUDIT <span>From</span></h3>
                        <ul className="mb-10">
                            <li className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2">
                                <span>Audit engagement</span><span>$10,000</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Review engagement</span><span>$5,000</span>
                            </li>
                            <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                <span>Business review</span><span>$2,000</span>
                            </li>
                        </ul>
                        <p className="text-[9px]">Our pricing assumes that the company's bookkeeping is completed and correct. Additional fees will be charged to bring the company's books and records to an acceptable standard before starting the assurance process.</p>
                    </div>
                </details>
            </div>

            <div className="Consulting">
                <details className="border-b border-black md:border-transparent open:border-b open:border-black md:mb-14 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2" closed>
                    <summary className="">
                        <div className="flex items-center">
                            <h2 className="lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5 open:italic">Consulting</h2>
                            <figure className="relative ">
                                <Image src={Consulting} alt=''></Image>
                            </figure>
                        </div>
                    </summary>
                    <div className="mt-5 ">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">STRATEGY & PLANNING</h3>
                                <ul className="mb-5">
                                    <li className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2">
                                        <span>Strategic and Operational Plans</span><span>From</span><span>$5,000</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Business plans</span><span>From</span><span>$2,500</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Busines valuations</span><span>From</span><span>$2,500</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Financial projections</span><span>From</span><span>$2,500</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Purchase and Sale of a Business</span><span>$250/hr</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">TECHNOLOGY</h3>
                                <ul className="mb-5">
                                    <li className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2">
                                        <span>Technology Implementation</span><span>$250/hr</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Cyber Security</span><span>$250/hr</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Software Training</span><span>$250/hr</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">PERFORMANCE</h3>
                                <ul className="mb-5">
                                    <li className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2">
                                        <span>Business process improvement</span><span>$250/hr</span>
                                    </li>
                                    <li className="md:text-[13px] text-xs flex justify-between border-b border-black/30 py-2">
                                        <span>Supply chain management</span><span>$250/hr</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </>
    )
}
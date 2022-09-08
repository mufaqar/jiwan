import Image from "next/image";
import Textation from '../public/images/textation.png';
import Accounting from '../public/images/accounting.png';
import Assurance from '../public/images/assurance.png';
import Consulting from '../public/images/consulting.png';

export default function ServiceBox() {
    return (
        <>
            <div className="">
                <details className="border-y border-black md:border-transparent open:border-y open:border-black md:mb-14 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2" closed>
                    <summary class="">
                        <div className="flex items-center">
                            <h2 className="lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5 open:italic">Taxation</h2>
                            <figure className="relative ">
                                <Image src={Textation}></Image>
                            </figure>
                        </div>
                    </summary>
                    <div class="mt-5 md:w-1/2">
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

            <div className="">
                <details className="border-b border-black md:border-transparent open:border-b open:border-black md:mb-14 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2" closed>
                    <summary class="">
                        <div className="flex items-center">
                            <h2 className="lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5 open:italic">Accounting</h2>
                            <figure className="relative ">
                                <Image src={Accounting}></Image>
                            </figure>
                        </div>
                    </summary>
                    <div class="mt-5 md:w-1/2">
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

            <div className="">
                <details className="border-b border-black md:border-transparent open:border-b open:border-black md:mb-14 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2" closed>
                    <summary class="">
                        <div className="flex items-center">
                            <h2 className="lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5 open:italic">Assurance</h2>
                            <figure className="relative ">
                                <Image src={Assurance}></Image>
                            </figure>
                        </div>
                    </summary>
                    <div class="mt-5 md:w-1/2">
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

            <div className="">
                <details className="border-b border-black md:border-transparent open:border-b open:border-black md:mb-14 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2" closed>
                    <summary class="">
                        <div className="flex items-center">
                            <h2 className="lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5 open:italic">Consulting</h2>
                            <figure className="relative ">
                                <Image src={Consulting}></Image>
                            </figure>
                        </div>
                    </summary>
                    <div class="mt-5 md:w-1/2">
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
        </>
    )
}

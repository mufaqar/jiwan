import Image from 'next/image';
import Textation from '../public/images/textation.webp';
import Accounting from '../public/images/accounting.webp';
import Assurance from '../public/images/assurance.webp';
import Consulting from '../public/images/consulting.webp';
import { useState } from 'react';

export default function ServiceBox() {
  const [openService, setOpenService] = useState(null);
  const HandleOpen = (id) => {
    if (id === openService) {
      return setOpenService(null);
    }
    setOpenService(id);
  };

  return (
    <>
      <div className="services Textation">
        <details className="border-y border-black md:border-transparent open:border-y  md:mb-12 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2">
          <summary
            className="cursor-pointer  items-center gap-4"
            onClick={() => HandleOpen(1)}
          >
            <div
              className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
                openService === 1 ? 'md:w-full' : 'w-0'
              } `}
            ></div>
            <div className="flex items-center min-w-[300px]">
              <h2
                className={`service_heading ${
                  openService === 1 ? 'text-[#1A4781]' : ''
                }`}
              >
                Taxation
              </h2>
              <figure className="relative ">
                <Image src={Textation} alt="" width={42} height={42}></Image>
                {openService === 1 && (
                  <div className="absolute bg-[#1A4781] top-0 right-0 left-0 bottom-1"></div>
                )}
              </figure>
            </div>
          </summary>
          <div
            className={`mt-5 md:w-1/2 ${
              openService === 1 ? 'block' : 'hidden'
            }`}
          >
            <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
              PERSONAL
            </h3>
            <ul className="mb-10">
              <li className="servic_list_title">
                <span>T1 Personal Tax Return</span>
                <span className="price">$100</span>
              </li>
            </ul>
            <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
              ADDITIONAL SERVICES
            </h3>
            <ul className="mb-10">
              <li className="servic_list_title">
                <span>Business Income (Per Business)</span>
                <span className="price">$300</span>
              </li>
              <li className="servic_list_title2">
                <span>Rental income (per business) </span>
                <span className="price">$100</span>
              </li>
              <li className="servic_list_title2">
                <span>Moving expenses</span>
                <span className="price">$100</span>
              </li>
              <li className="servic_list_title2">
                <span>Employment expenses</span>
                <span className="price">$100</span>
              </li>
              <li className="servic_list_title2">
                <span>Automobile expense</span>
                <span className="price">$35</span>
              </li>
              <li className="servic_list_title2">
                <span>Meals and Lodging Expenses</span>
                <span className="price">$100</span>
              </li>
              <li className="servic_list_title2">
                <span>Childcare expenses</span>
                <span className="price">$100</span>
              </li>
              <li className="servic_list_title2">
                <span>Capital gains</span>
                <span className="price">$30</span>
              </li>
              <li className="servic_list_title2">
                <span>Sale of Principle Residence</span>
                <span className="price">$50</span>
              </li>
              <li className="servic_list_title2">
                <span>Eligible/Infirm/Dependants</span>
                <span className="price">$30</span>
              </li>
              <li className="servic_list_title2">
                <span>Donations</span>
                <span className="price">$10</span>
              </li>
              <li className="servic_list_title2">
                <span>Medical expenses</span>
                <span className="price">$10</span>
              </li>
              <li className="servic_list_title2">
                <span>RRSP deductions</span>
                <span className="price">$10</span>
              </li>
              <li className="servic_list_title2">
                <span>Other deductions</span>
                <span className="price">$10</span>
              </li>
              <li className="servic_list_title2">
                <span>Request for Loss Carryback</span>
                <span className="price">$30</span>
              </li>
              <li className="servic_list_title2">
                <span>Authorize a Representative</span>
                <span className="price">$30</span>
              </li>
              <li className="servic_list_title2">
                <span>Training credits</span>
                <span className="price">$30</span>
              </li>
              <li className="servic_list_title2">
                <span>Joint Election to Split Pension Income</span>
                <span className="price">$40</span>
              </li>
              <li className="servic_list_title2">
                <span>Foreign income statement (T1135)</span>
                <span className="price">$100</span>
              </li>
              <li className="servic_list_title2">
                <span>Federal foreign tax credit</span>
                <span className="price">$30</span>
              </li>
              <li className="servic_list_title2">
                <span>Foreign income (per slip)</span>
                <span className="price">$50</span>
              </li>
              <li className="servic_list_title2">
                <span>Net capital losses</span>
                <span className="price">$20</span>
              </li>
              <li className="servic_list_title2">
                <span>Net non-capital loses</span>
                <span className="price">$20</span>
              </li>
              <li className="servic_list_title2">
                <span>Northern resident deduction</span>
                <span className="price">$50</span>
              </li>
              <li className="servic_list_title2">
                <span>Bookkeeping</span>
                <span className="price">$70/hr</span>
              </li>
              <li className="servic_list_title2">
                <span>Complex investments, capital gains</span>
                <span className="price">$100/hr</span>
              </li>
              <li className="servic_list_title2">
                <span>Complex reconciliations</span>
                <span className="price">$100/hr</span>
              </li>
              <li className="servic_list_title2">
                <span>CRA post assessment review</span>
                <span className="price">$70/hr</span>
              </li>
              <li className="servic_list_title2">
                <span>CRA audit support</span>
                <span className="price">$250/hr</span>
              </li>
              <li className="servic_list_title2">
                <span>Complex tax planning</span>
                <span className="price">$250/hr</span>
              </li>
            </ul>
            <p className="text-[9px] mb-3">
              Additional charges will be applied for services not listed.
            </p>
            <p className="text-[9px]">
              Our pricing assumes that the company's bookkeeping is completed
              and correct. Additional fees will be charged to bring the
              company's books and records to an acceptable standard to start
              your tax filings.
            </p>
          </div>
        </details>
        <div
          className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
            openService === 1 ? 'md:w-full' : 'w-0'
          } `}
        ></div>
      </div>

      <div className="services Accounting">
        <details className="border-b border-black md:border-transparent open:border-b  md:mb-12 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2">
          <summary
            className="cursor-pointer  items-center gap-4"
            onClick={() => HandleOpen(2)}
          >
            <div
              className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
                openService === 2 ? 'md:w-full' : 'w-0'
              } `}
            ></div>
            <div className="flex items-center min-w-[350px]">
              <h2
                className={`service_heading ${
                  openService === 2 ? 'text-[#1A4781]' : ''
                }`}
              >
                Accounting
              </h2>
              <figure className="relative ">
                <Image src={Accounting} alt="" width={42} height={42}></Image>
                {openService === 2 && (
                  <div className="absolute bg-[#1A4781] top-0 right-0 left-0 bottom-1"></div>
                )}
              </figure>
            </div>
          </summary>
          <div className={`mt-5 ${openService === 2 ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  III
                </h3>
                <ul className="mb-10">
                  <li className="servic_list_title">
                    <span className="price">$250/month</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Annual accounting</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Year end financial statements 1</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>T2 corporate tax return</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Annual CPA tax planning</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>-</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Annual GST/HST/PST</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>-</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>-</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Support (3 day response time)</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>-</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  II
                </h3>
                <ul className="mb-10">
                  <li className="servic_list_title">
                    <span>$600/month</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Quarterly accounting</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Year end financial statements 1</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>T2 corporate tax return</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Quarterly CPA tax planning</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Bookkeeping 2</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Quarterly GST/HST/PST</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Payroll/WCB</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>T5/T4a/T5013 statements</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Support (1 day response time)</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Xero bookkeeping software 3</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  I
                </h3>
                <ul className="mb-10">
                  <li className="servic_list_title">
                    <span>$1000/month</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Monthly accounting</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Year end financial statements 1</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>T2 corporate tax return</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Monthly CPA tax planning</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Bookkeeping 2</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Monthly GST/HST/PST</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Payroll/WCB</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>T5/T4a/T5013 statements</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Support (1 day response time)</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Xero bookkeeping software 3</span>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  ADDITIONAL SERVICES
                </h3>
                <ul className="mb-10">
                  <li className="servic_list_title">
                    <span>Trust returns</span>
                    <span className="w-1/4 flex justify-between">
                      <span>From</span>
                      <span className="price">$1,000</span>
                    </span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Amalgamations and Wind Ups</span>
                    <span className="w-1/4 flex justify-between">
                      <span>From</span>
                      <span className="price">$6,000</span>
                    </span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Corporate Reorganizations</span>
                    <span className="w-1/4 flex justify-between">
                      <span>From</span>
                      <span className="price">$6,000</span>
                    </span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Asset transfers</span>
                    <span className="w-1/4 flex justify-between">
                      <span>From</span>
                      <span className="price">$6,000</span>
                    </span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Tax Planning and Compliance</span>
                    <span className="price">$250/hr</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>CRA post assessment review</span>
                    <span className="price">$70/hr</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>CRA Audit support</span>
                    <span className="price">$250/hr</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Additional reconcillation accounts</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Year-end bookkeeping cleanup 4</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Structuring and Tax Planning</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>CRA Post Assesment Review and Audit Support</span>
                  </li>
                </ul>
                <p className="text-[9px] mb-3">
                  1. Includes financial reports or statements, corporate tax
                  returns, annual GST return filing and preparation, annual
                  T5-slip filing and preparation, and a meeting with your CPA.
                  Fixed monthly pricing is available.
                </p>
                <p className="text-[9px] mb-3">
                  2. Includes up to four reconcilliation accounts. Examples of
                  reconcillation accounts include bank, credit card, lines of
                  credit, or loans.
                </p>
                <p className="text-[9px] mb-3">
                  3. Personal access to Xero bookkeeping software.
                </p>
                <p className="text-[9px]">
                  4. For corporate year-end work, our pricing assumes that the
                  company’s bookkeeping is completed and correct before we
                  begin. We may charge additional fees based on incomplete or
                  inaccurate bookkeeping depending on the amount of work that is
                  required to bring the company’s books and records to an
                  acceptable standard to facilitate your accounting.
                </p>
              </div>
            </div>
          </div>
        </details>

        <div
          className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
            openService === 2 ? 'md:w-full' : 'w-0'
          } `}
        ></div>
      </div>

      <div className="services Assurance">
        <details className="border-b border-black md:border-transparent open:border-b  md:mb-12 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2">
          <summary
            className="cursor-pointer  items-center gap-4"
            onClick={() => HandleOpen(3)}
          >
            <div
              className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
                openService === 3 ? 'md:w-full' : 'w-0'
              } `}
            ></div>
            <div className="flex items-center min-w-[350px]">
              <h2
                className={`service_heading ${
                  openService === 3 ? 'text-[#1A4781]' : ''
                }`}
              >
                Assurance
              </h2>
              <figure className="relative ">
                <Image src={Assurance} alt="" width={42} height={42}></Image>
                {openService === 3 && (
                  <div className="absolute bg-[#1A4781] top-0 right-0 left-0 bottom-1"></div>
                )}
              </figure>
            </div>
          </summary>
          <div
            className={`mt-5 md:w-1/2 ${
              openService === 3 ? 'block' : 'hidden'
            }`}
          >
            <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3 flex justify-between">
              AUDIT <span>From</span>
            </h3>
            <ul className="mb-10">
              <li className="servic_list_title">
                <span>Audit engagement</span>
                <span className="price">$10,000</span>
              </li>
              <li className="servic_list_title2">
                <span>Review engagement</span>
                <span className="price">$5,000</span>
              </li>
              <li className="servic_list_title2">
                <span>Business review</span>
                <span className="price">$2,000</span>
              </li>
            </ul>
            <p className="text-[9px]">
              Our pricing assumes that the company's bookkeeping is completed
              and correct. Additional fees will be charged to bring the
              company's books and records to an acceptable standard before
              starting the assurance process.
            </p>
          </div>
        </details>

        <div
          className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
            openService === 3 ? 'md:w-full' : 'w-0'
          } `}
        ></div>
      </div>

      <div className="services Consulting">
        <details className="border-b border-black md:border-transparent open:border-b  md:mb-14 open:md:mb-5 md:px-0 px-4 open:pb-5 py-2">
          <summary
            className="cursor-pointer items-center gap-4"
            onClick={() => HandleOpen(4)}
          >
            <div
              className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
                openService === 4 ? 'md:w-full' : 'w-0'
              } `}
            ></div>

            <div className="flex items-center min-w-[350px]">
              <h2
                className={`service_heading ${
                  openService === 4 ? 'text-[#1A4781]' : ''
                }`}
              >
                Consulting
              </h2>
              <figure className="relative ">
                <Image src={Consulting} alt="" width={42} height={42}></Image>
                {openService === 4 && (
                  <div className="absolute bg-[#1A4781] top-0 right-0 left-0 bottom-1"></div>
                )}
              </figure>
            </div>
          </summary>
          <div className={`mt-5 ${openService === 4 ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  STRATEGY & PLANNING
                </h3>
                <ul className="mb-5">
                  <li className="servic_list_title">
                    <span>Strategic and Operational Plans</span>
                    <span className="w-1/4 flex justify-between">
                      <span>From</span>
                      <span className="price">$5,000</span>
                    </span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Business plans</span>
                    <span className="w-1/4 flex justify-between">
                      <span>From</span>
                      <span className="price">$2,500</span>
                    </span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Busines valuations</span>
                    <span className="w-1/4 flex justify-between">
                      <span>From</span>
                      <span className="price">$2,500</span>
                    </span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Financial projections</span>
                    <span className="w-1/4 flex justify-between">
                      <span>From</span>
                      <span className="price">$2,500</span>
                    </span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Purchase and Sale of a Business</span>
                    <span className="price">$250/hr</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  TECHNOLOGY
                </h3>
                <ul className="mb-5">
                  <li className="servic_list_title">
                    <span>Technology Implementation</span>
                    <span className="price">$250/hr</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Cyber Security</span>
                    <span className="price">$250/hr</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Software Training</span>
                    <span className="price">$250/hr</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  PERFORMANCE
                </h3>
                <ul className="mb-5">
                  <li className="servic_list_title">
                    <span>Business process improvement</span>
                    <span className="price">$250/hr</span>
                  </li>
                  <li className="servic_list_title2">
                    <span>Supply chain management</span>
                    <span className="price">$250/hr</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </details>
        <div
          className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
            openService === 4 ? 'md:w-full' : 'w-0'
          } `}
        ></div>
      </div>
    </>
  );
}

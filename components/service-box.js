import Image from "next/image";
import Textation from "../public/images/textation.png";
import Accounting from "../public/images/accounting.png";
import Assurance from "../public/images/assurance.png";
import Consulting from "../public/images/consulting.png";
import { useState } from "react";

export default function ServiceBox({
  taxation,
  accounting,
  assurance,
  consulting,
}) {
  const [openService, setOpenService] = useState(null);
  const HandleOpen = (id) => {
    if (id === openService) {
      return setOpenService(null);
    }
    setOpenService(id);
  };

  return (
    <>
      {/* Taxation services section  */}
      <div className="services Textation">
        <details className="px-4 py-2 border-black border-y md:border-transparent open:border-y  md:mb-12 open:md:mb-5 md:px-0 open:pb-5">
          <summary
            className="cursor-pointer flex items-center gap-4"
            onClick={() => HandleOpen(1)}
          >
            <div className="flex items-center min-w-[300px]">
              <h2
                className={`lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5   ${
                  openService === 1 ? "text-[#1A4781] italic" : "text-black"
                }`}
              >
                Taxation
              </h2>
              <figure
                className={`relative ${openService === 1 && "after:hidden"}`}
              >
                <Image src={Textation} alt=""></Image>
                {openService === 1 && (
                  <div className="absolute bg-[#1A4781] top-0 right-0 left-0 bottom-1"></div>
                )}
              </figure>
            </div>
            <div
              className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
                openService === 1 ? "md:w-full" : "w-0"
              } `}
            ></div>
          </summary>

          <div className="mt-5 md:w-1/2">
            <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
              PERSONAL
            </h3>
            {/* Filtering the Taxation array and then mapping over the filtered array to display the
            name and price of each item.  */}
            <ul className="mb-10">
              {taxation
                .filter((type) => type.type === "PERSONAL")
                .map((item, index) => (
                  <li
                    key={index}
                    className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2"
                  >
                    <span>{item?.name}</span>
                    <span>${item?.price}</span>
                  </li>
                ))}
            </ul>
            <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
              ADDITIONAL SERVICES
            </h3>
            <ul className="mb-10">
              {taxation
                .filter((type) => type.type === "ADDITIONAL_SERVICES")
                .map((item, index) => (
                  <li
                    key={index}
                    className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2"
                  >
                    <span>{item?.name}</span>
                    <span>${item?.price}</span>
                  </li>
                ))}
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
      </div>

      {/* Accounting services section  */}
      <div className="services Accounting">
        <details className="px-4 py-2 border-b border-black md:border-transparent open:border-b open:border-black md:mb-12 open:md:mb-5 md:px-0 open:pb-5">
          <summary
            className="cursor-pointer flex items-center gap-8"
            onClick={() => HandleOpen(2)}
          >
            <div className="flex items-center min-w-[350px]">
              <h2
                className={`lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5   ${
                  openService === 2 ? "text-[#1A4781] italic" : "text-black"
                }`}
              >
                Accounting
              </h2>
              <figure
                className={`relative ${openService === 2 && "after:hidden"}`}
              >
                <Image src={Textation} alt=""></Image>
                {openService === 2 && (
                  <div className="absolute bg-[#1A4781] top-0 right-0 left-0 bottom-1"></div>
                )}
              </figure>
            </div>
            <div
              className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
                openService === 2 ? "md:w-full" : "w-0"
              } `}
            ></div>
          </summary>

          <div className="mt-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  III
                </h3>
                <ul className="mb-10">
                  {accounting
                    .filter((type) => type.type === "III")
                    .reverse()
                    .map((item, index) => (
                      <li
                        key={index}
                        className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2"
                      >
                        <span>{item.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  II
                </h3>
                <ul className="mb-10">
                  {accounting
                    .filter((type) => type.type === "II")
                    .reverse()
                    .map((item, index) => (
                      <li
                        key={index}
                        className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2"
                      >
                        <span>{item.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  I
                </h3>
                <ul className="mb-10">
                  {accounting
                    .filter((type) => type.type === "I")
                    .reverse()
                    .map((item, index) => (
                      <li
                        key={index}
                        className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2"
                      >
                        <span>{item?.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  ADDITIONAL SERVICES
                </h3>
                <ul className="mb-10">
                  {accounting
                    .filter((type) => type.type === "ADDITIONAL_SERVICES")
                    .reverse()
                    .map((item, index) => (
                      <li
                        key={index}
                        className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2"
                      >
                        <span>{item?.name}</span>
                        <span className="flex justify-between w-1/4">
                          <span className="capitalize">{item?.from}</span>
                          {item.price ? <span>${item?.price}</span> : ""}
                        </span>
                      </li>
                    ))}
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
      </div>

      {/* Assurance services section  */}
      <div className="services Assurance">
        <details className="px-4 py-2 border-b border-black md:border-transparent open:border-b open:border-black md:mb-12 open:md:mb-5 md:px-0 open:pb-5">
          
          <summary
            className="cursor-pointer flex items-center gap-4"
            onClick={() => HandleOpen(3)}
          >
            <div className="flex items-center min-w-[350px]">
              <h2
                className={`lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5   ${
                  openService === 3 ? "text-[#1A4781] italic" : "text-black"
                }`}
              >
              Assurance
              </h2>
              <figure
                className={`relative ${openService === 3 && "after:hidden"}`}
              >
                <Image src={Textation} alt=""></Image>
                {openService === 3 && (
                  <div className="absolute bg-[#1A4781] top-0 right-0 left-0 bottom-1"></div>
                )}
              </figure>
            </div>
            <div
              className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
                openService === 3 ? "md:w-full" : "w-0"
              } `}
            ></div>
          </summary>

          <div className="mt-5 md:w-1/2">
            <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3 flex justify-between">
              AUDIT <span>From</span>
            </h3>
            <ul className="mb-10">
              {assurance
                .filter((type) => type.type === "AUDIT")
                .reverse()
                .map((item, index) => (
                  <li
                    key={index}
                    className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2"
                  >
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
            </ul>
            <p className="text-[9px]">
              Our pricing assumes that the company's bookkeeping is completed
              and correct. Additional fees will be charged to bring the
              company's books and records to an acceptable standard before
              starting the assurance process.
            </p>
          </div>
        </details>
      </div>

      {/* Consulting services section  */}
      <div className="services Consulting">
        <details className="px-4 py-2 border-b border-black md:border-transparent open:border-b open:border-black md:mb-14 open:md:mb-5 md:px-0 open:pb-5">
          

          <summary
            className="cursor-pointer flex items-center gap-8"
            onClick={() => HandleOpen(4)}
          >
            <div className="flex items-center min-w-[350px]">
              <h2
                className={`lg:text-[65px] lg:leading-[78px] md:text-[56px] md:leading-[67px] text-[36px] leading-[43px] font-ITCGaramondStdLight tracking-tighter mr-5   ${
                  openService === 4 ? "text-[#1A4781] italic" : "text-black"
                }`}
              >
              Consulting
              </h2>
              <figure
                className={`relative ${openService === 4 && "after:hidden"}`}
              >
                <Image src={Textation} alt=""></Image>
                {openService === 4 && (
                  <div className="absolute bg-[#1A4781] top-0 right-0 left-0 bottom-1"></div>
                )}
              </figure>
            </div>
            <div
              className={`pt-[2px] transition-all duration-300 bg-[#1A4781] ${
                openService === 4 ? "md:w-full" : "w-0"
              } `}
            ></div>
          </summary>

          <div className="mt-5 ">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  STRATEGY & PLANNING
                </h3>
                <ul className="mb-5">
                  {consulting
                    .filter((type) => type.type === "STRATEGY_AND_PLANNIN")
                    .reverse()
                    .map((item, index) => (
                      <li
                        key={index}
                        className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2"
                      >
                        <span>{item.name}</span>
                        <span
                          className={`flex justify-between  ${
                            item.from ? "w-1/4" : ""
                          }`}
                        >
                          {item.from && <span>{item.from}</span>}
                          {item.price && <span>${item?.price}</span>}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  TECHNOLOGY
                </h3>
                <ul className="mb-5">
                  {consulting
                    .filter((type) => type.type === "TECHNOLOGY")
                    .reverse()
                    .map((item, index) => (
                      <li
                        key={index}
                        className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2"
                      >
                        <span>{item.name}</span>
                        <span
                          className={`flex justify-between  ${
                            item.from ? "w-1/4" : ""
                          }`}
                        >
                          {item.from && <span>{item.from}</span>}
                          {item.price && <span>${item?.price}</span>}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h3 className="md:text-[15px] md:leading-[20px] text-sm font-normal mb-3">
                  PERFORMANCE
                </h3>
                <ul className="mb-5">
                  {consulting
                    .filter((type) => type.type === "PERFORMANCE")
                    .reverse()
                    .map((item, index) => (
                      <li
                        key={index}
                        className="md:text-[13px] text-xs flex justify-between border-y border-black/30 py-2"
                      >
                        <span>{item.name}</span>
                        <span
                          className={`flex justify-between  ${
                            item.from ? "w-1/4" : ""
                          }`}
                        >
                          {item.from && <span>{item.from}</span>}
                          {item.price && <span>${item?.price}</span>}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}

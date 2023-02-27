import React, { Component } from 'react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  useCSS: false,
  useTransform: false,
};

const SimpleSlider = ({ casestudy }) => {
  return (
    <>
      <div className="container mx-auto">
        <Slider {...settings}>
          {casestudy?.map((slide, index) => (
            <div key={index} className="container mx-auto">
              <div className="grid border border-black/70 md:py-10 md:px-14 md:gap-14">
                <div className="grid grid-cols-1 gap-5 px-8 py-5 md:grid-cols-2 md:p-0">
                  <h2 className="case_slider_heading">{slide?.title}</h2>
                  <div className="text-sm max-w-[414px]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: slide?.excerpt,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="grid justify-around gap-10 px-8 py-5 sm:grid-cols-2 md:grid-cols-3 grid-col-1 lg:flex md:p-0 md:border-y-0 border-y border-black/70">
                  {slide?.caseStudy?.stats?.map((profit, index) => (
                    <div className="text-center" key={index}>
                      <h2 className="font-ITCGaramondLightCondensed md:text-[42px] md:leading-[50px] text-[34px] tracking-tighter">
                        {profit?.amountAndPersontage}
                      </h2>
                      <p className="md:text-[13px] text-[9px] text-[#1A4782] max-w-[241px] mx-auto">
                        {profit?.info}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="max-w-[900px] md:p-0 py-5 px-8">
                  <div
                    className="case_study_details"
                    dangerouslySetInnerHTML={{
                      __html: slide?.content,
                    }}
                  ></div>

                  <p className="mt-2 text-xs md:text-sm">
                    {slide?.caseStudy?.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SimpleSlider;

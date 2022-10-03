import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
    constructor(props) {
        super()
        this.props = props
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        
        return (

            <div className="container mx-auto">
                <Slider {...settings}>

                    {
                        this.props.casestudy?.map((slide, index) => (
                            <div key={index} className='container mx-auto'>
                                <div className='grid border border-black/70 md:py-10 md:px-14 md:gap-14'>
                                    <div className='grid grid-cols-1 gap-5 px-8 py-5 md:grid-cols-2 md:p-0'>
                                        <h2 className='font-ITCGaramondStdLight lg:text-[56px] lg:leading-[60px] md:text-[50px] text-[42px] leading-[47px] tracking-tighter max-w-[30rem]'>{slide.title}</h2>
                                        <p className='text-sm max-w-[414px]'>{slide.short_info}</p>
                                    </div>

                                    <div className='grid justify-around gap-10 px-8 py-5 sm:grid-cols-2 md:grid-cols-3 grid-col-1 lg:flex md:p-0 md:border-y-0 border-y border-black/70'>
                                       {
                                        slide.profit?.map((profit, index)=>(
                                            <div className='text-center' key={index}>
                                                <h2 className='font-ITCGaramondStdLight md:text-[42px] md:leading-[50px] text-[34px] tracking-tighter'>{profit.value}</h2>
                                                <p className='md:text-[13px] text-[9px] text-[#1A4782] max-w-[241px] mx-auto'>{profit.detail}</p>
                                            </div>
                                        ))
                                       }
                                       
                                        
                                    </div>

                                    <div className='max-w-[900px] md:p-0 py-5 px-8'>
                                        <p className='md:text-[22px] text-[18px] font-ITCGaramondStdLight tracking-tighter'>{slide?.description}</p>
                                        <p className='mt-2 text-xs md:text-sm'>{slide?.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }



                </Slider>
            </div>


        );
    }
}
import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
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
                    <div className='container mx-auto'>
                        <div className='border border-black/70 md:py-10 md:px-14 grid md:gap-14'>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:p-0 py-5 px-8'>
                                <h2 className='font-ITCGaramondStdLight lg:text-[56px] lg:leading-[60px] md:text-[50px] text-[42px] leading-[47px] tracking-tighter'>Farm Property <br></br>Planning</h2>
                                <p className='text-sm max-w-[414px]'>Four partners own three farms which began to generate profits. Each partner has a steady income, which makes the farms profit taxable at the highest marginal tax rate.</p>
                            </div>

                            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-6 md:p-0 py-5 px-8 md:border-y-0 border-y border-black/70'>
                                <div className='text-center'>
                                    <h2 className='font-ITCGaramondStdLight md:text-[42px] md:leading-[50px] text-[34px] tracking-tighter'>53.5% to 11%</h2>
                                    <p className='md:text-[13px] text-[9px] text-[#1A4782] max-w-[241px] mx-auto'>CHANGE OF TAX  RATE</p>
                                </div>
                                <div className='text-center'>
                                    <h2 className='font-ITCGaramondStdLight md:text-[42px] md:leading-[50px] text-[34px] tracking-tighter'>$212,500</h2>
                                    <p className='md:text-[13px] text-[9px] text-[#1A4782] max-w-[241px] mx-auto'>AMOUNT SAVED YEARLY THROUGH EFFECTIVE PLANNING BASED ON $500,000 REVENUE</p>
                                </div>
                                <div className='text-center'>
                                    <h2 className='font-ITCGaramondStdLight md:text-[42px] md:leading-[50px] text-[34px] tracking-tighter'>$1,070,000</h2>
                                    <p className='md:text-[13px] text-[9px] text-[#1A4782] max-w-[241px] mx-auto'>POTENTIAL TAX SAVINGS AT SALE OF FARMS</p>
                                </div>
                            </div>

                            <div className='max-w-[900px] md:p-0 py-5 px-8'>
                                <p className='md:text-[22px] text-[18px] font-ITCGaramondStdLight tracking-tighter'>If we didn’t have proper planning in place, our farms would simply be a tax burden because of our steady incomes. Because of Jiwan Dhillon & Company’s effective planning, we have additional capital for future ventures from the tax savings and a tax free pipeline from our new corporation. </p>
                                <p className='md:text-sm text-xs mt-2'>K. JOHAL</p>
                            </div>
                        </div>
                    </div>

                    <div className='container mx-auto '>
                    <div className='container mx-auto'>
                        <div className='border border-black/70 md:py-10 md:px-14 grid md:gap-14'>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:p-0 py-5 px-8'>
                                <h2 className='font-ITCGaramondStdLight lg:text-[56px] lg:leading-[60px] md:text-[50px] text-[42px] leading-[47px] tracking-tighter'>Farm Property <br></br>Planning</h2>
                                <p className='text-sm max-w-[414px]'>Four partners own three farms which began to generate profits. Each partner has a steady income, which makes the farms profit taxable at the highest marginal tax rate.</p>
                            </div>

                            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-6 md:p-0 py-5 px-8 md:border-y-0 border-y border-black/70'>
                                <div className='text-center'>
                                    <h2 className='font-ITCGaramondStdLight md:text-[42px] md:leading-[50px] text-[34px] tracking-tighter'>53.5% to 11%</h2>
                                    <p className='md:text-[13px] text-[9px] text-[#1A4782] max-w-[241px] mx-auto'>CHANGE OF TAX  RATE</p>
                                </div>
                                <div className='text-center'>
                                    <h2 className='font-ITCGaramondStdLight md:text-[42px] md:leading-[50px] text-[34px] tracking-tighter'>$212,500</h2>
                                    <p className='md:text-[13px] text-[9px] text-[#1A4782] max-w-[241px] mx-auto'>AMOUNT SAVED YEARLY THROUGH EFFECTIVE PLANNING BASED ON $500,000 REVENUE</p>
                                </div>
                                <div className='text-center'>
                                    <h2 className='font-ITCGaramondStdLight md:text-[42px] md:leading-[50px] text-[34px] tracking-tighter'>$1,070,000</h2>
                                    <p className='md:text-[13px] text-[9px] text-[#1A4782] max-w-[241px] mx-auto'>POTENTIAL TAX SAVINGS AT SALE OF FARMS</p>
                                </div>
                            </div>

                            <div className='max-w-[900px] md:p-0 py-5 px-8'>
                                <p className='md:text-[22px] text-[18px] font-ITCGaramondStdLight tracking-tighter'>If we didn’t have proper planning in place, our farms would simply be a tax burden because of our steady incomes. Because of Jiwan Dhillon & Company’s effective planning, we have additional capital for future ventures from the tax savings and a tax free pipeline from our new corporation. </p>
                                <p className='md:text-sm text-xs mt-2'>K. JOHAL</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </Slider>
            </div>


        );
    }
}
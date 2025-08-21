'use client';

import TextEmphasize from "@/components/textempasize";

const ServicesPage = () => {
    return (
        <section id="services" className="h-auto w-[100vw] relative">
            <div className="services-container h-auto flex flex-col p-3 relative">
                <div className="services-head h-[50vh] flex flex-col justify-center items-center gap-3 relative">
                    <div className="service-title text-2xl sm:text-3xl flex gap-1.5 items-baseline">
                        Custom 
                        <span className="text-lg sm:text-2xl"><TextEmphasize data="Coaching" /> </span>
                        for 
                        <span className="text-lg sm:text-2xl"><TextEmphasize data="Every Goal" /></span>
                    </div>
                    <div className="services-title-content text-center text-sm font-[family-name:--font-body] sm:text-md sm:w-[60vw]
                                    tracking-wide sm:tracking-wider">
                        Whether you're looking to 
                        lose fat
                        ,
                        gain muscle
                        ,
                        recover
                        from an injury, or simply build a
                        healthier routine
                        , I offer
                        structured
                        ,
                        science-backed
                        programs tailored to your individual needs. With over
                        8 years
                        of experience and a
                        Level 4
                        certification, I blend proven training methods with
                        personalized coaching
                        to help you succeed — wherever you are in your journey
                    </div>
                </div>


                <div className="service-content">
                    This is card format
                </div>
            </div>
        </section>
    )
}

export default ServicesPage;
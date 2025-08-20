'use client';

import TextCarousel from "@/components/textcarousel";
import HeroImage from "@/public/assets/ui/hero-pic.jpg"
import Image from "next/image";

const AboutPage = () => {
    return (
        <section id="about" className="h-[95vh] w-[100vw] z-5 pointer-events-none">
            <div className="about-container flex flex-col sm:flex-row gap-5 justify-center h-[90vh] w-[90vw]
                            justify-self-center place-items-center">
                <div className="hero-image z-5 sm:basis-auto">
                    <Image src={HeroImage} alt="Hero Image" className="h-[40vh] sm:h-[70vh] w-auto rounded-[250px]
                    shadow-lg/100 "/>
                </div>
                <div className="about-hero basis-6/12 flex flex-col gap-3">
                    <div className="about-head flex gap-0 sm:gap-1.5 items-end">
                        <span className="text-2xl sm:text-3xl flex gap-1.5 w-[170px] sm:w-auto">
                            Meet 
                            <span className="text-(--highlight-color) font-bold">
                                Yousuf Ali,
                            </span>
                        </span>
                        <span className="text-md text-nowrap sm:text-lg capitalize italic">
                            Your expert in transformation
                        </span>
                    </div>
                    <div className="about-content">
                        <div className="text-justify font-(family-name:--font-body) text-sm sm:text-md
                                tracking-wider sm:tracking-widest">
                            With over 8 years of hands-on experience and 
                            Level 4 certification, I&apos;ve helped countless 
                            individuals achieve lasting results in strength, 
                            mobility, and overall health. My approach is not 
                            just about lifting weights — it&apos;s about 
                            educating, motivating, and creating 
                            sustainable habits that fit your lifestyle.
                        </div>
                        <div className="">
                            <TextCarousel data="Level 4 Certified Personal Trainer" /> 
                            <TextCarousel data="Track record of client transformations and satisfaction" />
                            <TextCarousel data="Specialist in strength & conditioning, weight loss, and rehab" />
                            <TextCarousel data="Holistic focus on mindset, nutrition, and recovery" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;
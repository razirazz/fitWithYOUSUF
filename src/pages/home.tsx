'use client';

import BadgeCertifiedFitness from "@/components/badgefitness";
import { ButtonIconLeft, ButtonIconRight } from "@/components/button";
import heroPic from "@/public/assets/ui/hero-pic.jpg"
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
    return (
        <section id="home" className="home-page h-[100vh] w-[100vw] relative content-center">
            <div className="container-home-page m-3 p-1 place-items-center text-center">
                <div className="home-herorelative">
                    <div className="home-hero-main relative">
                        <span className="home-hero-image flex justify-center z-10">
                            <Image 
                                className="rounded-t-full mask-b-from-40% mask-b-to-90% justify-self-center"
                                src={heroPic} 
                                alt="hero-pic" 
                                height={100} 
                                width={111}
                            />
                        </span>
                        <BadgeCertifiedFitness data="Certified Fitness Trainer" />
                    </div>
                    <div className="home-hero-content place-items-center pointer-events-none flex flex-col pt-3">
                        <div className="home-content-main text-3xl m-3 dark:font-light sm:text-4xl sm:w-[50vw]">
                            Transform Your&nbsp;
                            <span className="font-bold sm:font-extrabold">
                                Body
                            </span>, 
                            Transform Your&nbsp; 
                            <span className="font-bold sm:font-extrabold">
                                Life
                            </span>
                            &nbsp;with &nbsp;
                            <span className="text-(--highlight-color) font-extrabold sm:font-black">
                                Yousuf Ali
                            </span>
                        </div>
                        <div className="home-content-body font-[--font-body] text-[14px] sm:text-[16px] dark:font-light sm:w-[70vw]">
                            <p className="tracking-wider leading-[1.7] p-2">
                                Welcome to the official website of&nbsp;&nbsp;
                                <span className="font-semibold italic text-[16px] sm:text-[17px]">Yousuf Ali</span>, 
                                Level 4 Certified Personal Trainer 
                                with over 8 years of experience 
                                transforming lives through tailored fitness 
                                and nutrition programs. 
                                Whether your goal is fat loss, 
                                muscle gain, improved athletic performance, 
                                or a healthier lifestyle — you&apos;re in the right place.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home-call-actions w-full h-fit p-2 flex
                font-[--font-body] sm:gap-1 justify-center"> 
                    <ButtonIconLeft data="Explore Services" icon={ Search } type="secondary"/>
                    <ButtonIconRight data="Free Consultation" icon={ ArrowRight } type="primary"/>
                    
                </div>
            </div>
        </section>
    )
}

export default  HomePage 
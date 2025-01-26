'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Link from 'next/link'
import Button from './ui/Button'
import { IoLogoGithub } from "react-icons/io5";
import { BackgroundBeams } from './ui/BackgroundBeams'

const Hero = () => {
    return (
        <div className="relative">
            <BackgroundBeams /> 
            <div className="pb-10 pt-16 md:pt-36 relative">
                <div className="relative">
                    <Spotlight
                        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                        fill="white"
                    />
                    <Spotlight
                        className="top-10 left-full h-[80vh] w-[50vw]"
                        fill="rgb(110, 7, 186)"
                    />
                    <Spotlight
                        className="top-28 left-80 h-[80vh] w-[50vw]"
                        fill="blue"
                    />
                </div>
            </div>

            

            <div className="flex justify-center relative z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h1 className="uppercase tracking-widest text-center text-blue-100 max-w-80">
                        Welcome to My Portfolio Website
                    </h1>
                </div>
            </div>

            <TextGenerateEffect
                className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-7 pt-1" words="Providing solutions to problems"
            />

            <p className="relative text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl my-3">
                Hi, I&apos;m Arsalan, a tech enthusiast and developer in India.
            </p>

            <div className='flex justify-center mt-8'>
                <Link href="https://github.com/arsalan9702?tab=repositories">
                    <Button 
                        icon = {<IoLogoGithub size={28}/>}
                        position = "right"
                        text = "Show My Work"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Hero

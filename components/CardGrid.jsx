"use client"

import React, { useState } from 'react';
import { gridItems } from '@/data';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from './ui/GradientBG';
import Button from './ui/Button';
import { IoCopyOutline } from "react-icons/io5";

export const CardGrid = ({ className }) => {
    return (
        <div className={`pb-12 pt-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 max-w-7xl mx-auto ${className}`}>
            {gridItems.map((item) => (
                <Card
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
};

export const Card = ({
    id,
    title,
    description,
    img,
    spareImg,
    className = "",
    imgClassName = "",
    titleClassName = ""
}) => {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText("arsalansayed9702@gmail.com");
        setCopied(true); 
        setTimeout(()=>{setCopied(false)}, 2000)
    }

    const sizeClasses = {
        1: "md:col-span-6 lg:col-span-3 row-span-2",
        2: "md:col-span-3 lg:col-span-2",
        3: "md:col-span-3 lg:col-span-2",
        4: "md:col-span-2 lg:col-span-2",
        5: "md:col-span-4 lg:col-span-3 row-span-2",
        6: "md:col-span-2 lg:col-span-2"
    };

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                sizeClasses[id],
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center")}
                        />
                    )}
                </div>

                {id === 6 && (
                    <div className="absolute inset-0 overflow-hidden">
                        <BackgroundGradientAnimation>
                            <div className="absolute inset-0 flex items-center justify-center text-white-100 font-bold" />
                        </BackgroundGradientAnimation>
                    </div>
                )}

                <div className={cn(
                    "absolute right-0 -bottom-5",
                    id === 5 && "w-full opacity-80"
                )}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>

                <div className={cn(
                    titleClassName,
                    "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                )}>
                    <div className="font-sans font-extralight md:max-w-32 text-bold lg:text-lg xl:text-xl text-[#C1C2D3] z-10 leading-relaxed md:leading-6 lg:leading-7 tracking-wide">
                        {description}
                    </div>

                    <div className="font-sans hover:text-[#a46ef6] text-lg lg:text-3xl max-w-96 font-bold z-10">
                        {title}
                    </div>

                    {id === 3 && (
                        <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
                            <div className='flex flex-col gap-3 lg:gap-4'>
                                {['React.js', 'Next.js', 'Typescript'].map((item) =>
                                    <span key={item} className=' border border-white-100/[0.1] py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#14194c]'>
                                        {item}
                                    </span>
                                )}
                                <span className='py-5 px-3 rounded-lg bg-[#14194c]' />
                            </div>

                            <div className='flex flex-col gap-3 lg:gap-4'>
                                <span className='py-5 px-3 rounded-lg bg-[#14194c]' />
                                {['React.js', 'Next.js', 'Typescript'].map((item) =>
                                    <span key={item} className='py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#14194c]'>
                                        {item}
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    {id === 6 && (
                        <div className='mt-5 relative' id="contact">
                            <div className="relative pointer-events-auto">
                                <Button
                                    icon={<IoCopyOutline />}
                                    position="right"
                                    text={copied ? 'Email Copied!' : 'Copy My Email'}
                                    onClick={handleClick}
                                    className={'hover:text-white-200'}
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};
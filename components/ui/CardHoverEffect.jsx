"use client"

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className
}) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        (<>
            <div
                className={cn("grid grid-cols-1 md:grid-cols-2 py-10", className)}>

                {items.map((item, idx) => (
                    <Link
                        href={item?.link}
                        key={item?.link}
                        className="relative group block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}>
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-[#23174d] block  rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }} />
                            )}
                        </AnimatePresence>

                        <Card>
                            <img
                                src={item.img}
                                alt={item.title}
                                className="object-cover"
                            />
                            <CardTitle>{item.title}</CardTitle>

                            <CardDescription>{item.des}</CardDescription>

                            <div className="flex space-x-2 mt-4">
                                {item.iconLists.map((icon, index) => (
                                    <div key={index} className="p-1 items-center justify-center border border-white/[0.2] bg-black-100 rounded-full flex" style={{
                                        transform: `translateX(-${5 * index * 4}px)`
                                    }}>
                                        <img
                                            src={icon}
                                            alt={`icon-${index}`}
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4">
                                <span
                                    className="hover:text-[#a46ef6] hover:underline font-medium"
                                >
                                    View Project
                                </span>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </>)
    );
};

export const Card = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#04091d] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}>
            <div className="relative z-50">
                <div className="p-6">{children}</div>
            </div>
        </div>)
    );
};
export const CardTitle = ({
    className,
    children
}) => {
    return (
        (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 hover:text-[#b085ef] text-3xl", className)}>
            {children}
        </h4>)
    );
};
export const CardDescription = ({
    className,
    children
}) => {
    return (
        (<p
            className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
            {children}
        </p>)
    );
};

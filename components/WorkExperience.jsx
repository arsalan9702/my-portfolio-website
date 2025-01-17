import { workExperience } from '@/data'
import React from 'react'
import { MovingBorderDemo } from './ui/MovingBorder'
import { Spotlight } from './ui/Spotlight'

const WorkExperience = () => {
    return (
        <div id="workexperience" className="py-20">
            <div className="relative size-full bg-slate-950">
                <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
                <div className="absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
            </div>
            <h1 className="heading">
                My
                <span className="text-purple"> Work Experience</span>
            </h1>
            <div className="w-full lg:w-[80vw] mx-auto items-center justify-center mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <MovingBorderDemo
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000 + 10000)}
                    >
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.title} className='w-24 lg:w-32 p-2 h-full' />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </MovingBorderDemo>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience

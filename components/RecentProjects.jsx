import { projects } from '@/data'
import React from 'react'
import { HoverEffect } from './ui/CardHoverEffect'

const RecentProjects = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} className={`gap-x-5 gap-y-3`}/>
    </div>
  )
}

export default RecentProjects

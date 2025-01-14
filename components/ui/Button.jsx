import React from 'react'

const Button = ({icon, position, text, children}) => {
    return (
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-9 font-medium text-indigo-300 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-[linear-gradient(110deg,#000103,45%,#581c87,55%,#000103)] hover:scale-105 gap-3">
            {position==='left' && icon}
            {text}
            {position==='right' && icon}
        </button>
    )
}

export default Button

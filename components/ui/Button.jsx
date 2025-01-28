import React from 'react'

const Button = ({ icon, position, text, className, onClick }) => {
    return (
        <button
            className={`relative inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none hover:bg-[linear-gradient(110deg,#000103,45%,#6A1B9A,55%,#000103)] hover:scale-105 z-10 ${className}`}
            onClick={onClick}
            style={{ isolation: 'isolate' }}
        >
            <span className="absolute inset-0" />
            <span className="relative flex items-center gap-3">
                {position === 'left' && icon}
                {text}
                {position === 'right' && icon}
            </span>
        </button>

    );
}

export default Button;




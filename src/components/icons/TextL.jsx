import React from 'react'

const TextL = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 18h10M4 14h16M4 10h10M4 6h16"
            />
        </svg>
    )
}

export default TextL
import React from 'react'

const Dots = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            {...props}
        >
            <g>
                <path d="M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM21 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
            </g>
        </svg>
    )
}

export default Dots
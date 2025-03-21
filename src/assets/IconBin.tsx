import React from 'react'

type Props = {
  size?: number
  className?: string
}

const IconBin: React.FC<Props> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconBin

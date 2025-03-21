import React from 'react'

type Props = {
  size?: number
  className?: string
}

const IconCard: React.FC<Props> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconCard

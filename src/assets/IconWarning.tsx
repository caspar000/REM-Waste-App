import React from 'react'

type Props = {
  size?: number
  className?: string
}

const IconWarning: React.FC<Props> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M21.73 18L13.73 3.99998C13.5556 3.69218 13.3026 3.43617 12.9969 3.25805C12.6912 3.07993 12.3438 2.98608 11.99 2.98608C11.6362 2.98608 11.2887 3.07993 10.9831 3.25805C10.6774 3.43617 10.4244 3.69218 10.25 3.99998L2.24999 18C2.07367 18.3053 1.98122 18.6519 1.982 19.0045C1.98278 19.3571 2.07677 19.7032 2.25444 20.0078C2.43211 20.3124 2.68714 20.5646 2.99369 20.7388C3.30023 20.9131 3.6474 21.0032 3.99999 21H20C20.3509 20.9996 20.6955 20.9069 20.9993 20.7313C21.303 20.5556 21.5552 20.3031 21.7305 19.9991C21.9058 19.6951 21.998 19.3504 21.9979 18.9995C21.9978 18.6486 21.9054 18.3039 21.73 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconWarning

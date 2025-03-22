import cn from 'classnames'

import { IconPostcode } from '@/assets'

interface IPostcodeIndicator {
  postcode: string
  className?: string
}

export const PostcodeIndicator = ({
  postcode,
  className
}: IPostcodeIndicator) => {
  return (
    <div
      className={cn(
        'flex max-w-fit items-center justify-center gap-1 rounded-md bg-blue-500 px-3 py-1 text-white',
        className
      )}
    >
      <IconPostcode />
      {postcode}
    </div>
  )
}

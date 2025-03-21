import cn from 'classnames'
import React from 'react'

import { assert } from '@/utils/assert'

interface IHeaderItem {
  title: string
  Icon: React.ReactNode
}

interface IHeader {
  items: IHeaderItem[]
  currentIdx: number
}

const Header = ({ items, currentIdx }: IHeader) => {
  assert(currentIdx >= 0, 'currentIdx should be greater than or equal to 0')
  assert(
    currentIdx < items.length,
    'currentIdx should be less than items.length'
  )

  const isActive = (idx: number) => {
    return currentIdx === idx || currentIdx > idx
  }

  return (
    <header
      className={cn('flex items-center justify-center gap-4 max-md:gap-2')}
    >
      {items.map((item, idx) => (
        <>
          <div key={idx} className={'flex shrink-0 items-start gap-2'}>
            <span
              className={cn(
                'text-slate-500',
                isActive(idx) && '!text-blue-500'
              )}
            >
              {item.Icon}
            </span>
            <span
              className={cn(
                'text-base text-slate-400 max-lg:hidden',
                isActive(idx) && '!text-white'
              )}
            >
              {item.title}
            </span>
          </div>
          {idx < items.length - 1 && (
            <div
              key={idx + 0.1}
              className={cn(
                'h-px w-full max-w-[64px] shrink bg-slate-600 max-sm:max-w-[24px]',
                isActive(idx + 1) && '!bg-blue-500'
              )}
            />
          )}
        </>
      ))}
    </header>
  )
}

export default Header

import cn from 'classnames'
import { useEffect, useState } from 'react'

import { IconChevron, IconTruck } from '@/assets'
import { CustomButton } from '@/atoms/CustomButton/CustomButton'
import { ISkip } from '@/store/features/skipSlice'
import { priceAfterTax } from '@/utils/helper'

import { Container } from '../Container/Container'

interface ISelectedFooter {
  selectedSkip: ISkip
  className?: string
}

export const SelectedFooter = ({
  selectedSkip,
  className
}: ISelectedFooter) => {
  const calculateFullPrice = () => {
    const weeklyPriceAfterTax = priceAfterTax(
      selectedSkip.price_before_vat,
      selectedSkip.vat
    )
    const numberOfWeeks = selectedSkip.hire_period_days / 7
    return (weeklyPriceAfterTax * numberOfWeeks).toFixed(0)
  }

  const [isFooterVisible, setIsFooterVisible] = useState(false)

  // The SelectedFooter component only initializes when
  // selectedSkip is not undefined. This useEffect hook
  // introduces a delay between assigning the bottom-0
  // class to the footer so the animation will be visible.
  // Otherwise, it will already initiate with the bottom-0
  // without the animation
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsFooterVisible(true)
    }, 1)
    return () => clearTimeout(delay)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 transition-all duration-300 ease-out',
        'z-50 border-t-2 border-solid border-slate-600 bg-slate-700 p-4',
        isFooterVisible ? 'bottom-0' : '-bottom-[87.5px]',
        className
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 max-sm:hidden">
            <IconTruck size={40} />
            <span className="text-3xl font-semibold">{selectedSkip.size}</span>
          </div>
          <div className="flex items-end gap-2 max-sm:flex-col max-sm:gap-0">
            <span className="text-3xl font-bold text-blue-500">{`£${calculateFullPrice()}`}</span>
            <span className="text-sm font-medium leading-6 text-slate-300">
              Total Cost
            </span>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-2">
          <CustomButton secondary>Back</CustomButton>
          <CustomButton primary className="flex items-center gap-2">
            <span>Continue</span>
            <IconChevron size={16} />
          </CustomButton>
        </div>
      </Container>
    </div>
  )
}

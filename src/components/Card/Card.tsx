import cn from 'classnames'

import { IconChevron } from '@/assets'
import { KeyValueIndicator } from '@/atoms/KeyValueIndicator/KeyValueIndicator'
import { PostcodeIndicator } from '@/atoms/PostcodeIndicator/PostcodeIndicator'
import { SelectButton } from '@/atoms/SelectButton/SelectButton'
import { WarningIndicator } from '@/atoms/WarningIndicator/WarningIndicator'
import { assert } from '@/utils/assert'
import { priceAfterTax } from '@/utils/helper'

interface ISkipCard {
  id: number
  size: number
  hire_period_days: number
  transport_cost: number | null
  per_tonne_cost: number | null
  price_before_vat: number
  vat: number
  postcode: string
  area: string | null
  forbidden: boolean
  created_at: string
  updated_at: string
  allowed_on_road: boolean
  allows_heavy_waste: boolean
  active?: boolean
}

export const Card = ({
  id,
  size,
  hire_period_days,
  transport_cost,
  per_tonne_cost,
  price_before_vat,
  vat,
  postcode,
  area,
  forbidden,
  created_at,
  updated_at,
  allowed_on_road,
  allows_heavy_waste,
  active
}: ISkipCard) => {
  assert(size > 0, 'Size should be greater than 0')
  assert(hire_period_days > 0, 'Hire period days should be greater than 0')
  assert(
    typeof price_before_vat === 'number',
    'Price before VAT should be a number'
  )

  return (
    <div
      className={cn(
        'flex h-[648px] flex-col gap-4 rounded-lg border-2 border-solid border-slate-600 bg-slate-700 p-6 hover:cursor-pointer hover:border-blue-800',
        active && '!border-blue-500'
      )}
    >
      <div className="relative">
        <img
          src="/coverImage.png"
          alt="Skip Cover Image"
          className="h-full w-full max-w-full rounded-lg border-2 border-solid border-slate-600"
        />
        <PostcodeIndicator
          postcode={postcode}
          className="absolute right-1 top-2"
        />
      </div>
      <p className="text-2xl font-semibold text-white">{`${size} Yard Skip`}</p>
      <section className="flex flex-col gap-2">
        <KeyValueIndicator
          label="Hiring Period"
          value={`${hire_period_days} Days`}
        />
        {transport_cost && (
          <KeyValueIndicator
            label="Transport Cost"
            value={`£${transport_cost}`}
          />
        )}
        {per_tonne_cost && (
          <KeyValueIndicator
            label="Cost per Tonne"
            value={`£${per_tonne_cost}`}
          />
        )}
        <KeyValueIndicator
          label="Price Before VAT"
          value={`£${price_before_vat}`}
        />
        {!allowed_on_road && <WarningIndicator label="Private Property Only" />}
        {!allows_heavy_waste && (
          <WarningIndicator label="No Heavy Waste Allowed" />
        )}
      </section>
      <div className="mt-auto flex items-end gap-3.5">
        <p className="text-[36px] font-bold text-blue-500">
          {`£${priceAfterTax(price_before_vat, vat).toFixed(0)}`}
        </p>
        <span className="text-sm font-medium leading-6 text-slate-300">
          per week
        </span>
      </div>
      {active ? (
        <SelectButton
          className="flex items-center justify-center gap-2"
          selected
        >
          <span>Selected</span>
        </SelectButton>
      ) : (
        <SelectButton className="flex items-center justify-center gap-2">
          <span>Select This Skip</span>
          <IconChevron size={16} />
        </SelectButton>
      )}
    </div>
  )
}

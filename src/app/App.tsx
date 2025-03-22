import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  IconBin,
  IconCalendar,
  IconCard,
  IconChevron,
  IconPin,
  IconShield,
  IconTruck
} from '@/assets'
import { CustomButton } from '@/atoms/CustomButton/CustomButton'
import { Card } from '@/components/Card/Card'
import { Container } from '@/components/Container/Container'
import { Header } from '@/components/Header/Header'

const headerItems = [
  { title: 'Postcode', Icon: <IconPin /> },
  { title: 'Waste Type', Icon: <IconBin /> },
  { title: 'Select Skip', Icon: <IconTruck /> },
  { title: 'Permit Check', Icon: <IconShield /> },
  { title: 'Choose Date', Icon: <IconCalendar /> },
  { title: 'Payment', Icon: <IconCard /> }
]

const temporaryArray = [
  {
    id: 11554,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 311,
    vat: 20,
    postcode: 'NR32',
    area: null,
    forbidden: false,
    created_at: '2021-04-06T17:04:42',
    updated_at: '2024-04-02T09:22:38',
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 11555,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 342,
    vat: 20,
    postcode: 'NR32',
    area: null,
    forbidden: false,
    created_at: '2021-04-06T17:04:42',
    updated_at: '2024-04-02T09:22:38',
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 11556,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 420,
    vat: 20,
    postcode: 'NR32',
    area: null,
    forbidden: false,
    created_at: '2021-04-06T17:04:42',
    updated_at: '2024-04-02T09:22:38',
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 11557,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 448,
    vat: 20,
    postcode: 'NR32',
    area: null,
    forbidden: false,
    created_at: '2021-04-06T17:04:42',
    updated_at: '2024-04-02T09:22:38',
    allowed_on_road: false,
    allows_heavy_waste: false
  },
  {
    id: 11558,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 491,
    vat: 20,
    postcode: 'NR32',
    area: null,
    forbidden: false,
    created_at: '2021-04-06T17:04:42',
    updated_at: '2024-04-02T09:22:38',
    allowed_on_road: false,
    allows_heavy_waste: false
  },
  {
    id: 11559,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 527,
    vat: 20,
    postcode: 'NR32',
    area: null,
    forbidden: false,
    created_at: '2021-04-06T17:04:42',
    updated_at: '2024-04-02T09:22:38',
    allowed_on_road: false,
    allows_heavy_waste: false
  },
  {
    id: 11560,
    size: 16,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 556,
    vat: 20,
    postcode: 'NR32',
    area: null,
    forbidden: false,
    created_at: '2021-04-06T17:04:42',
    updated_at: '2024-04-02T09:22:38',
    allowed_on_road: false,
    allows_heavy_waste: false
  },
  {
    id: 11561,
    size: 20,
    hire_period_days: 14,
    transport_cost: 236,
    per_tonne_cost: 236,
    price_before_vat: 944,
    vat: 20,
    postcode: 'NR32',
    area: null,
    forbidden: false,
    created_at: '2021-04-06T17:04:42',
    updated_at: '2024-04-02T09:22:38',
    allowed_on_road: false,
    allows_heavy_waste: true
  },
  {
    id: 11562,
    size: 40,
    hire_period_days: 14,
    transport_cost: 236,
    per_tonne_cost: 236,
    price_before_vat: 944,
    vat: 20,
    postcode: 'NR32',
    area: null,
    forbidden: false,
    created_at: '2021-04-06T17:04:42',
    updated_at: '2024-04-02T09:22:38',
    allowed_on_road: false,
    allows_heavy_waste: false
  }
]

const App = () => {
  return (
    <section className={'sm:p-8 max-sm:p-4'}>
      <Header items={headerItems} currentIdx={2} />
      <Container>
        <div className="flex flex-col sm:my-6 sm:gap-4 max-sm:my-2 max-sm:gap-1">
          <h1
            className={
              'text-center font-bold sm:text-2xl max-sm:text-left max-sm:text-xl'
            }
          >
            Choose Your Skip Size
          </h1>
          <p className="text-center text-slate-300 sm:text-base max-sm:text-left max-sm:text-sm">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="relative sm:px-12">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            slidesPerGroup={1}
            className="pb-10"
            navigation={{
              disabledClass: 'hidden',
              nextEl: '#next-btn',
              prevEl: '#prev-btn'
            }}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3
              }
            }}
          >
            {temporaryArray.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Card {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <CustomButton
            secondary
            id="next-btn"
            className="absolute -right-4 top-[40%] z-50 flex h-12 w-12 items-center justify-center p-0 max-sm:hidden"
          >
            <IconChevron />
          </CustomButton>
          <CustomButton
            secondary
            id="prev-btn"
            className="absolute -left-4 top-[40%] z-50 flex h-12 w-12 items-center justify-center p-0 max-sm:hidden"
          >
            <IconChevron className="-rotate-180" />
          </CustomButton>
        </div>
      </Container>
    </section>
  )
}

export default App

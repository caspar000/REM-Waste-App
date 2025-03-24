import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { fetchSkipDataFromAPI } from '@/api/skip.api'
import {
  IconBin,
  IconCalendar,
  IconCard,
  IconChevron,
  IconPin,
  IconShield,
  IconTruck
} from '@/assets'
import { IconSpinner } from '@/assets/IconSpinner'
import { CustomButton } from '@/atoms/CustomButton/CustomButton'
import { Card } from '@/components/Card/Card'
import { Container } from '@/components/Container/Container'
import { Header } from '@/components/Header/Header'
import { SelectedFooter } from '@/components/SelectedFooter/SelectedFooter'
import { ISkip } from '@/store/features/skipSlice'
import { AppDispatch, RootState } from '@/store/store'

const headerItems = [
  { title: 'Postcode', Icon: <IconPin /> },
  { title: 'Waste Type', Icon: <IconBin /> },
  { title: 'Select Skip', Icon: <IconTruck /> },
  { title: 'Permit Check', Icon: <IconShield /> },
  { title: 'Choose Date', Icon: <IconCalendar /> },
  { title: 'Payment', Icon: <IconCard /> }
]

const App = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchSkipDataFromAPI({ postcode: 'NR32', area: 'Lowestoft' }))
  }, [dispatch])

  const skipArray = useSelector((state: RootState) => state.skip)

  const [selectedSkip, setSelectedSkip] = useState<ISkip>()

  const handleSelectSkip = (skip: ISkip) => {
    setSelectedSkip(skip)
  }

  const isActive = (id: number) => {
    return selectedSkip?.id === id
  }

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
            {skipArray.length < 1 && (
              <div className="flex h-[60vh] w-full items-center justify-center">
                <IconSpinner />
              </div>
            )}
            {skipArray &&
              skipArray.map((skip, idx) => (
                <SwiperSlide key={idx}>
                  <Card
                    {...skip}
                    onClick={() => handleSelectSkip(skip)}
                    active={isActive(skip.id)}
                  />
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
      {selectedSkip && <SelectedFooter selectedSkip={selectedSkip} />}
    </section>
  )
}

export default App

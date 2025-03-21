import {
  IconBin,
  IconCalendar,
  IconCard,
  IconPin,
  IconShield,
  IconTruck
} from '@/assets'
import { Container } from '@/components/Container/Container'
import Header from '@/components/Header/Header'

const headerItems = [
  { title: 'Postcode', Icon: <IconPin /> },
  { title: 'Waste Type', Icon: <IconBin /> },
  { title: 'Select Skip', Icon: <IconTruck /> },
  { title: 'Permit Check', Icon: <IconShield /> },
  { title: 'Choose Date', Icon: <IconCalendar /> },
  { title: 'Payment', Icon: <IconCard /> }
]

const App = () => {
  return (
    <section className={'p-8 max-sm:p-4'}>
      <Header items={headerItems} currentIdx={2} />
      <Container className="mt-8">
        <h1
          className={
            'text-center text-2xl font-bold sm:mb-4 max-sm:mb-2 max-sm:text-left'
          }
        >
          Choose Your Skip Size
        </h1>
        <p className="text-center text-base text-slate-300 max-sm:text-left">
          Select the skip size that best suits your needs
        </p>
      </Container>
    </section>
  )
}

export default App

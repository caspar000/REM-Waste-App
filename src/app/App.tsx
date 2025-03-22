import {
  IconBin,
  IconCalendar,
  IconCard,
  IconPin,
  IconShield,
  IconTruck
} from '@/assets'
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
    allows_heavy_waste: false,
    active: true
  }
]

const App = () => {
  return (
    <section className={'flex flex-col gap-8 p-8 max-sm:gap-4 max-sm:p-4'}>
      <Header items={headerItems} currentIdx={2} />
      <Container className="flex flex-col sm:gap-8 max-sm:gap-2">
        <div className="flex flex-col sm:gap-4 max-sm:gap-2">
          <h1 className={'text-center text-2xl font-bold max-sm:text-left'}>
            Choose Your Skip Size
          </h1>
          <p className="text-center text-base text-slate-300 max-sm:text-left">
            Select the skip size that best suits your needs
          </p>
        </div>

        {/* will be slider later */}
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          {temporaryArray.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default App

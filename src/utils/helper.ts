export const priceAfterTax = (price: number, tax: number): number => {
  return price + price * (tax / 100)
}

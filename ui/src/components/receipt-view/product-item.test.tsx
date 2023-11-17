import { ProductWithSalesTax, Tag } from '@/api/receipt'
import { newHashId } from '@/helpers/id'
import { render } from '@/test-utils'
import ProductItem from './product-item'

test('component renders correctly', () => {
  const productId = newHashId()
  const product: ProductWithSalesTax = {
    product: {
      id: productId,
      name: 'Bottle of Perfume',
      price: 27.99,
      quantity: 1,
      tags: [Tag.Import],
    },
    finalPrice: 32.19,
    salesTax: 4.2,
  }

  const { getByText, getByTestId } = render(<ProductItem product={product} />)

  const name = getByText(/bottle of perfume/i)
  expect(name).toBeInTheDocument()

  const finalPrice = getByTestId(`product-item-${productId}-final-price`)
  expect(finalPrice).toBeInTheDocument()
  expect(finalPrice.textContent).toBe('Final: 32.19 €')

  const salesTax = getByTestId(`product-item-${productId}-sales-tax`)
  expect(salesTax).toBeInTheDocument()
  expect(salesTax.textContent).toBe('Tax: 4.20 €')
})

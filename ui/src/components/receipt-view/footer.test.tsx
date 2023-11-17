import { Receipt, Tag } from '@/api/receipt'
import { newHashId } from '@/helpers/id'
import { render } from '@/test-utils'
import Footer from './footer'

test('component renders correctly', () => {
  const receiptId = newHashId()
  const productId = newHashId()
  const receipt: Receipt = {
    id: receiptId,
    products: [
      {
        product: {
          id: productId,
          name: 'Bottle of Perfume',
          price: 27.99,
          quantity: 1,
          tags: [Tag.Import],
        },
        finalPrice: 32.19,
        salesTax: 4.2,
      },
    ],
    salesTaxes: 4.2,
    total: 32.19,
    request: {
      products: [
        {
          id: productId,
          name: 'Bottle of Perfume',
          price: 27.99,
          quantity: 1,
          tags: [Tag.Import],
        },
      ],
    },
  }

  const { getByTestId } = render(<Footer receipt={receipt} />)

  const total = getByTestId(`footer-${receiptId}-total`)
  expect(total).toBeInTheDocument()
  expect(total.textContent).toBe('Total:32,19€')

  const salesTaxes = getByTestId(`footer-${receiptId}-sales-taxes`)
  expect(salesTaxes).toBeInTheDocument()
  expect(salesTaxes.textContent).toBe('Sales Taxes:4,20€')
})

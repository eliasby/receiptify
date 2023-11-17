import { Receipt, Tag } from '@/api/receipt'
import { newHashId } from '@/helpers/id'
import { render } from '@/test-utils'
import ProductList from './product-list'

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

  const { getByTestId } = render(<ProductList receipt={receipt} />)

  const productItem = getByTestId(`product-item-${productId}`)
  expect(productItem).toBeInTheDocument()
})

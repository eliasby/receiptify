import { Product, Tag } from '@/api/receipt'
import { newHashId } from '@/helpers/id'
import { render } from '@/test-utils'
import ProductList from './product-list'

test('component renders correctly', () => {
  const products: Product[] = [
    {
      id: newHashId(),
      name: 'Imported Box of Chocolates',
      price: 11.25,
      quantity: 1,
      tags: [Tag.Import, Tag.Food],
    },
  ]

  const { getByTestId } = render(<ProductList products={products} />)

  const productItem = getByTestId(`product-item-${products[0].id}`)
  expect(productItem).toBeInTheDocument()
})

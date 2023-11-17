import { Product, Tag } from '@/api/receipt'
import { newHashId } from '@/helpers/id'
import { render } from '@/test-utils'
import ProductItem from './product-item'

test('component renders correctly', () => {
  const product: Product = {
    id: newHashId(),
    name: 'Imported Box of Chocolates',
    price: 11.25,
    quantity: 1,
    tags: [Tag.Import, Tag.Food],
  }

  const { getByText, getByTestId } = render(<ProductItem product={product} />)

  const name = getByText(/imported box of chocolates/i)
  expect(name).toBeInTheDocument()

  const unitPrice = getByTestId(`product-item-${product.id}-unit-price`)
  expect(unitPrice).toBeInTheDocument()
  expect(unitPrice.textContent).toBe('Unit: 11.25 €')

  const importTag = getByText('Import')
  expect(importTag).toBeInTheDocument()

  const foodTag = getByText('Food')
  expect(foodTag).toBeInTheDocument()
})

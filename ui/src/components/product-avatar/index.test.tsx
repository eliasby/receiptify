import { Product, Tag } from '@/api/receipt'
import { newHashId } from '@/helpers/id'
import { render } from '@/test-utils'
import ProductAvatar from '.'

test('component renders correctly', () => {
  const product: Product = {
    id: newHashId(),
    name: 'Imported Box of Chocolates',
    price: 11.25,
    quantity: 1,
    tags: [Tag.Food],
  }

  const { getByTestId } = render(<ProductAvatar product={product} />)

  const element = getByTestId(
    `product-avatar-${product.id}-${Tag.Food.toLowerCase()}`,
  )
  expect(element).toBeInTheDocument()
})

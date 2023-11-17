import { render } from '@/test-utils'
import ProductForm from './product-form'

test('component renders correctly', () => {
  const { getByLabelText, getByRole } = render(<ProductForm />)

  const name = getByLabelText('Name')
  expect(name).toBeInTheDocument()

  const price = getByLabelText('Price')
  expect(price).toBeInTheDocument()

  const quantity = getByLabelText('Quantity')
  expect(quantity).toBeInTheDocument()

  const tags = getByLabelText('Tags')
  expect(tags).toBeInTheDocument()

  const button = getByRole('button')
  expect(button).toBeInTheDocument()
})

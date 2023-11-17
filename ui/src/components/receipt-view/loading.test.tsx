import { render } from '@/test-utils'
import Loading from './loading'

test('component renders correctly', () => {
  const { getByText } = render(<Loading />)
  const text = getByText(/loading receipt/i)
  expect(text).toBeInTheDocument()
})

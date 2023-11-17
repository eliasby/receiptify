import { render } from '@/test-utils'
import NoData from './no-data'

test('component renders correctly', () => {
  const { getByText } = render(<NoData />)

  const descriptionText = getByText(
    /create a receipt by configuring your products/i,
  )
  expect(descriptionText).toBeInTheDocument()

  const buttonText = getByText(/configure products/i)
  expect(buttonText).toBeInTheDocument()
})

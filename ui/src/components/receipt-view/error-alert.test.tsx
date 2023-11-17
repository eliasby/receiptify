import { ReceiptNotFound } from '@/api/receipt'
import { newHashId } from '@/helpers/id'
import { render } from '@/test-utils'
import ErrorAlert from './error-alert'

test('component renders correctly on generic error', () => {
  const { getByText } = render(<ErrorAlert error={new Error('test')} />)

  const message = getByText(/something went wrong/i)
  expect(message).toBeInTheDocument()

  const description = getByText(
    /failed to load receipt, please try again later./i,
  )
  expect(description).toBeInTheDocument()
})

test('component renders correctly on receipt not found error', () => {
  const { getByText } = render(
    <ErrorAlert error={new ReceiptNotFound(`/receipts/${newHashId()}`)} />,
  )

  const message = getByText(/receipt not found!/i)
  expect(message).toBeInTheDocument()

  const description = getByText(
    /please ensure the receipt id is correct, then try again./i,
  )
  expect(description).toBeInTheDocument()
})

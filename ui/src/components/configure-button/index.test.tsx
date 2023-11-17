import { render, fireEvent } from '@/test-utils'
import ConfigureButton from '.'

test('component renders correctly', async () => {
  const onClick = jest.fn()
  const { getByRole } = render(<ConfigureButton onClick={onClick} />)

  const button = getByRole('button')
  fireEvent.click(button)

  expect(onClick).toHaveBeenCalled()
})

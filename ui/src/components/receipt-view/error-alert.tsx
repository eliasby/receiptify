import { Alert } from 'antd'
import { ReceiptNotFound } from '@/api/receipt'

export type ErrorAlertProps = {
  error: Error | ReceiptNotFound
}

const ErrorAlert = ({ error }: ErrorAlertProps) => {
  const isNotFound = error instanceof ReceiptNotFound

  const getMessage = () => {
    if (isNotFound) {
      return 'Receipt not found!'
    } else {
      return 'Something went wrong'
    }
  }

  const getDescription = () => {
    if (isNotFound) {
      return 'Please ensure the receipt ID is correct, then try again.'
    } else {
      return 'Failed to load receipt, please try again later.'
    }
  }

  return (
    <Alert
      message={getMessage()}
      description={getDescription()}
      type="error"
      showIcon
    />
  )
}

export default ErrorAlert

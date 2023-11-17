import { useEffect } from 'react'
import { useGetReceiptById } from '@/api/receipt'
import { productsUpdated } from '@/store/entities/products'
import { receiptUpdated } from '@/store/entities/receipt'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import ErrorAlert from './error-alert'
import Loading from './loading'
import NoData from './no-data'
import ProductList from './product-list'

export type ReceiptViewProps = {
  id?: string
}

const ReceiptView = ({ id }: ReceiptViewProps) => {
  const dispatch = useAppDispatch()
  const receipt = useAppSelector((state) => state.entities.receipt.value)
  const products = useAppSelector((state) => state.entities.products.items)
  const isPristine = useAppSelector(
    (state) => state.ui.configureProducts.isPristine,
  )
  const { data, error, isLoading } = useGetReceiptById(
    id ? `/receipts/${id}` : null,
  )

  useEffect(() => {
    if (data) {
      dispatch(receiptUpdated(data))
      if (id && products.length === 0 && isPristine) {
        dispatch(productsUpdated(data.request.products))
      }
    }
  }, [data, id, isPristine, products.length, dispatch])

  return (
    <>
      {isLoading && !error && !receipt ? <Loading /> : null}
      {!isLoading && error ? <ErrorAlert error={error} /> : null}
      {!error && receipt ? <ProductList receipt={receipt} /> : null}
      {!isLoading && !error && !receipt && !id ? <NoData /> : null}
    </>
  )
}

export default ReceiptView

import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd'
import { useSWRConfig } from 'swr'
import { createReceipt } from '@/api/receipt'
import { receiptUpdated } from '@/store/entities/receipt'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import {
  configureProductsDidClose,
  configureProductsIsPristineChanged,
} from '@/store/ui/configure-products'
import ProductForm from './product-form'
import ProductList from './product-list'

const ConfigureProducts = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.entities.products.items)
  const open = useAppSelector((state) => state.ui.configureProducts.open)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const { mutate } = useSWRConfig()

  useEffect(() => {
    if (open) {
      setDisabled(false)
    }
  }, [open])

  const handleModalOk = useCallback(async () => {
    setLoading(true)
    setDisabled(true)
    try {
      const receipt = await createReceipt({ products })
      mutate(`/receipts/${receipt.id}`, receipt)
      dispatch(receiptUpdated(receipt))
      dispatch(configureProductsIsPristineChanged(true))
      navigate(`/${receipt.id}`)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(configureProductsDidClose())
      setLoading(false)
      setDisabled(false)
    }
  }, [products, dispatch, navigate, mutate])

  const handleModalCancel = useCallback(() => {
    dispatch(configureProductsDidClose())
  }, [dispatch])

  return (
    <Modal
      title="Configure Products"
      open={open}
      onOk={handleModalOk}
      onCancel={handleModalCancel}
      afterClose={() => dispatch(configureProductsDidClose())}
      confirmLoading={loading}
      maskClosable={false}
      keyboard={false}
    >
      <div className="my-4">
        <ProductForm disabled={disabled} />
        <ProductList products={products} disabled={disabled} />
      </div>
    </Modal>
  )
}

export default ConfigureProducts

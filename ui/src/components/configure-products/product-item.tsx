import { useCallback } from 'react'
import { List, Tag as AntTag, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { capitalCase } from 'change-case-all'
import { Product, Tag } from '@/api/receipt'
import ProductAvatar from '@/components/product-avatar'
import formatPrice from '@/helpers/formatPrice'
import { productsRemoved } from '@/store/entities/products'
import { useAppDispatch } from '@/store/hook'
import { configureProductsIsPristineChanged } from '@/store/ui/configure-products'

export type ProductItemProps = {
  product: Product
  disabled?: boolean
}

const ProductItem = ({ product, disabled }: ProductItemProps) => {
  const dispatch = useAppDispatch()

  const handleDeleteProduct = useCallback(
    (id: string) => {
      dispatch(configureProductsIsPristineChanged(false))
      dispatch(productsRemoved([id]))
    },
    [dispatch],
  )

  return (
    <div data-testid={`product-item-${product.id}`}>
      <List.Item className="flex flex-row gap-3 items-center justify-center">
        <ProductAvatar product={product} />
        <div className="flex flex-col gap-1 grow">
          <div>{product.name}</div>
          <div>
            <AntTag color="green">
              <span data-testid={`product-item-${product.id}-unit-price`}>
                Unit: {formatPrice(product.price)} €
              </span>
            </AntTag>
            <AntTag color="processing">{product.quantity}x</AntTag>
            {product.tags && product.tags.includes(Tag.Import) ? (
              <AntTag color="warning">Import</AntTag>
            ) : null}
            {product.tags &&
              product.tags
                .filter((tag) => tag != Tag.Import)
                .map((tag) => <AntTag key={tag}>{capitalCase(tag)}</AntTag>)}
          </div>
        </div>
        <Button
          icon={<DeleteOutlined />}
          disabled={disabled}
          onClick={() => handleDeleteProduct(product.id as string)}
          danger
        />
      </List.Item>
    </div>
  )
}

export default ProductItem

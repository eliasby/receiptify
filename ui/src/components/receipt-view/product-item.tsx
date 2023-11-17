import { List, Tag as AntTag } from 'antd'
import { capitalCase } from 'change-case-all'
import { ProductWithSalesTax, Tag } from '@/api/receipt'
import ProductAvatar from '@/components/product-avatar'
import formatPrice from '@/helpers/formatPrice'

export type ProductItemProps = {
  product: ProductWithSalesTax
}

const ProductItem = ({ product }: ProductItemProps) => {
  const id = product.product.id
  return (
    <div data-testid={`product-item-${id}`}>
      <List.Item className="flex flex-row gap-3 items-center justify-center">
        <ProductAvatar product={product.product} />
        <div className="flex flex-col gap-1 grow">
          <div>{product.product.name}</div>
          <div>
            <AntTag color="green">
              <span data-testid={`product-item-${id}-final-price`}>
                Final: {formatPrice(product.finalPrice)} €
              </span>
            </AntTag>
            {product.salesTax > 0 ? (
              <AntTag color="red">
                <span data-testid={`product-item-${id}-sales-tax`}>
                  Tax: {formatPrice(product.salesTax)} €
                </span>
              </AntTag>
            ) : null}
            <AntTag color="processing">{product.product.quantity}x</AntTag>
            {product.product.tags &&
            product.product.tags.includes(Tag.Import) ? (
              <AntTag color="warning">Import</AntTag>
            ) : null}
            {product.product.tags &&
              product.product.tags
                .filter((tag) => tag != Tag.Import)
                .map((tag) => <AntTag key={tag}>{capitalCase(tag)}</AntTag>)}
          </div>
        </div>
      </List.Item>
    </div>
  )
}

export default ProductItem

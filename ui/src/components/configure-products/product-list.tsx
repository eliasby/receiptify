import { List, Empty } from 'antd'
import { Product } from '@/api/receipt'
import ProductItem from './product-item'

export type ProductListProps = {
  products: Product[]
  disabled?: boolean
}

const ProductList = ({ products, disabled }: ProductListProps) => (
  <>
    {products.length > 0 ? (
      <List
        bordered
        dataSource={products}
        renderItem={(product: Product) => (
          <ProductItem product={product} disabled={disabled} />
        )}
      />
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<span>Use the form above to add products.</span>}
      />
    )}
  </>
)

export default ProductList

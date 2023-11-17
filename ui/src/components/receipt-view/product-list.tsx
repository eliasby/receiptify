import { List, Badge } from 'antd'
import { ProductWithSalesTax, Receipt } from '@/api/receipt'
import Footer from './footer'
import ProductItem from './product-item'

export type ProductListProps = {
  receipt: Receipt
}

const ProductList = ({ receipt }: ProductListProps) => (
  <Badge.Ribbon text="Receipt" color="red">
    <List
      footer={<Footer receipt={receipt} />}
      bordered
      dataSource={receipt.products}
      renderItem={(product: ProductWithSalesTax) => (
        <ProductItem product={product} />
      )}
    />
  </Badge.Ribbon>
)

export default ProductList

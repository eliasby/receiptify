import { useMemo } from 'react'
import { Avatar } from 'antd'
import { FaPizzaSlice, FaBook, FaHeartPulse, FaBoxOpen } from 'react-icons/fa6'
import { Product, Tag } from '@/api/receipt'

export type ProductAvatarProps = {
  product: Product
}

const ProductAvatar = ({ product }: ProductAvatarProps) => {
  const icon = useMemo(() => {
    if (product.tags) {
      if (product.tags.includes(Tag.Food)) {
        return (
          <FaPizzaSlice
            data-testid={`product-avatar-${
              product.id
            }-${Tag.Food.toLowerCase()}`}
          />
        )
      }
      if (product.tags.includes(Tag.Book)) {
        return (
          <FaBook
            data-testid={`product-avatar-${
              product.id
            }-${Tag.Book.toLowerCase()}`}
          />
        )
      }
      if (product.tags.includes(Tag.Medical)) {
        return (
          <FaHeartPulse
            data-testid={`product-avatar-${
              product.id
            }-${Tag.Medical.toLowerCase()}`}
          />
        )
      }
    }
    return <FaBoxOpen />
  }, [product.id, product.tags])

  return (
    <Avatar
      className="flex items-center justify-center flex-shrink-0"
      shape="square"
      size={40}
      icon={icon}
    />
  )
}

export default ProductAvatar

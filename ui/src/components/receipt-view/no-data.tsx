import { Empty, Button } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { useAppDispatch } from '@/store/hook'
import { configureProductsDidOpen } from '@/store/ui/configure-products'

const NoData = () => {
  const dispatch = useAppDispatch()

  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={
        <span>
          Create a receipt by configuring your products using the float button
          on the bottom right of the screen, or the button below.
        </span>
      }
    >
      <Button
        type="primary"
        icon={<SettingOutlined />}
        onClick={() => dispatch(configureProductsDidOpen())}
      >
        Configure Products
      </Button>
    </Empty>
  )
}

export default NoData

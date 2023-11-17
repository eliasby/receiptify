import { Typography } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const { Text } = Typography

const Loading = () => (
  <div className="flex flex-col gap-4 items-center justify-center">
    <LoadingOutlined style={{ fontSize: 50 }} spin />
    <Text>Loading receipt</Text>
  </div>
)

export default Loading

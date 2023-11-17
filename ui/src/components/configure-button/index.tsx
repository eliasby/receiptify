import { FloatButton } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

export type ConfigureButtonProps = {
  onClick?: () => void
}

const ConfigureButton = ({ onClick }: ConfigureButtonProps) => (
  <FloatButton
    icon={<SettingOutlined />}
    type="primary"
    style={{ right: 24 }}
    onClick={onClick}
  />
)

export default ConfigureButton

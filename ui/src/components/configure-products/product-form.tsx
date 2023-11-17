import { useCallback, useEffect } from 'react'
import 'antd'
import { Input, Form, Button, Select, Space, Row, Col } from 'antd'
import { Product } from '@/api/receipt'
import useTagOptions from '@/hooks/useTagOptions'
import { productsAdded } from '@/store/entities/products'
import { useAppDispatch, useAppSelector } from '@/store/hook'

const { Option } = Select

export type FieldType = {
  name: string
  price: number
  quantity: number
  tags: string[]
}

export type ProductFormProps = {
  disabled?: boolean
}

const ProductForm = ({ disabled }: ProductFormProps) => {
  const dispatch = useAppDispatch()
  const configureProductsOpen = useAppSelector(
    (state) => state.ui.configureProducts.open,
  )
  const [form] = Form.useForm()
  const tagOptions = useTagOptions()

  useEffect(() => {
    if (!configureProductsOpen) {
      form.resetFields()
    }
  }, [configureProductsOpen, form])

  const handleOnFinish = useCallback(
    (values: FieldType) => {
      form.resetFields()
      dispatch(productsAdded([values as Product]))
    },
    [form, dispatch],
  )

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ quantity: 1 }}
      onFinish={handleOnFinish}
      autoComplete="off"
      disabled={disabled}
    >
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Name is required.' }]}
      >
        <Input />
      </Form.Item>
      <Row gutter={8}>
        <Col span={16}>
          <Form.Item<FieldType>
            label="Price"
            name="price"
            rules={[{ required: true, message: 'Price is required.' }]}
          >
            <Input type="number" suffix="€" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item<FieldType>
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: 'Quantity is required.' }]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item<FieldType> label="Tags" name="tags">
        <Select mode="multiple" optionLabelProp="label">
          {tagOptions.map((option) => (
            <Option
              key={option.value}
              value={option.value}
              label={`${option.icon} ${option.label}`}
            >
              <Space>
                <span role="img" aria-label="Book">
                  {option.icon}
                </span>
                {option.label}
              </Space>
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item className="flex items-center justify-center my-2">
        <Button type="link" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductForm

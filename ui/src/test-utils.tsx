import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import store from '@/store/configure-store'

// eslint-disable-next-line
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider>
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    </ConfigProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line
export * from '@testing-library/react'
export { customRender as render }

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import store from '@/store/configure-store'
import './index.css'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorTextPlaceholder: 'rgb(203 213 225)',
        },
        components: {
          Form: {
            itemMarginBottom: 10,
            verticalLabelPadding: '0 0 5px',
          },
        },
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
)

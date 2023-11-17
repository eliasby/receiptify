import { createBrowserRouter } from 'react-router-dom'
import App from '@/components/app'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/:id',
        element: <App />,
      },
    ],
  },
])

export default router

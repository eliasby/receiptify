import { useParams } from 'react-router-dom'
import ConfigureButton from '@/components/configure-button'
import ConfigureProducts from '@/components/configure-products'
import ReceiptView from '@/components/receipt-view'
import { useAppDispatch } from '@/store/hook'
import { configureProductsDidOpen } from '@/store/ui/configure-products'

function App() {
  const params = useParams()
  const dispatch = useAppDispatch()

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-2 w-full px-2 md:min-w-[410px] md:w-auto md:px-0">
        <ReceiptView id={params.id} />
      </div>
      <ConfigureProducts />
      <ConfigureButton onClick={() => dispatch(configureProductsDidOpen())} />
    </div>
  )
}

export default App

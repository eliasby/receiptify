import useSWR from 'swr'
import config from '@/config'

export enum Tag {
  Book = 'BOOK',
  Food = 'FOOD',
  Medical = 'MEDICAL',
  Import = 'IMPORT',
  Other = 'OTHER',
}

export type Product = {
  id?: string
  name: string
  price: number
  quantity: number
  tags?: Tag[]
}

export type ProductWithSalesTax = {
  product: Product
  finalPrice: number
  salesTax: number
}

export type CreateReceiptRequest = {
  products: Product[]
}

export type Receipt = {
  id: string
  products: ProductWithSalesTax[]
  salesTaxes: number
  total: number
  request: CreateReceiptRequest
}

export class ReceiptNotFound extends Error {
  constructor(path: string) {
    super(`Receipt with path=${path} not found.`)
    this.name = ReceiptNotFound.name
  }
}

export async function getReceiptById(path: string) {
  const url = `${config.API_URL}${path}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.status <= 299) {
    return response.json()
  } else if (response.status === 404) {
    throw new ReceiptNotFound(path)
  } else {
    throw new Error(`url=${url} method=GET status=${response.status}`)
  }
}

export function useGetReceiptById(path: string | null) {
  return useSWR<Receipt>(path, getReceiptById)
}

export async function createReceipt(
  request: CreateReceiptRequest,
): Promise<Receipt> {
  const url = `${config.API_URL}/receipts`
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.status <= 299) {
    return response.json()
  } else {
    throw new Error(`url=${url} method=GET status=${response.status}`)
  }
}

import { Tag } from '@/api/receipt'

export type TagOption = {
  value: Tag
  label: string
  icon: string
}

const useTagOptions = () => {
  const values: TagOption[] = [
    {
      value: Tag.Book,
      label: 'Book',
      icon: '📚',
    },
    {
      value: Tag.Food,
      label: 'Food',
      icon: '🍔',
    },
    {
      value: Tag.Medical,
      label: 'Medical',
      icon: '💊',
    },
    {
      value: Tag.Import,
      label: 'Import',
      icon: '🌎',
    },
    {
      value: Tag.Other,
      label: 'Other',
      icon: '📦',
    },
  ]
  return values
}

export default useTagOptions

export default function formatPrice(value: number): string {
  return parseFloat(value.toString()).toFixed(2).toLocaleString()
}

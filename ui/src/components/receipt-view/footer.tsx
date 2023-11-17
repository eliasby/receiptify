import { Statistic, QRCode } from 'antd'
import { Receipt } from '@/api/receipt'
import config from '@/config'
import formatPrice from '@/helpers/formatPrice'

export type FooterProps = {
  receipt: Receipt
}

const Footer = ({ receipt }: FooterProps) => (
  <div className="flex flex-row gap-4">
    <div className="flex flex-col gap-3 grow">
      <div data-testid={`footer-${receipt.id}-total`}>
        <Statistic
          title="Total:"
          value={formatPrice(receipt.total)}
          suffix="€"
          decimalSeparator=","
        />
      </div>
      <div data-testid={`footer-${receipt.id}-sales-taxes`}>
        <Statistic
          title="Sales Taxes:"
          value={formatPrice(receipt.salesTaxes)}
          decimalSeparator=","
          suffix="€"
        />
      </div>
    </div>
    <div className="flex flex-row items-end justify-end">
      <QRCode value={`${config.SITE_URL}/${receipt.id}`} />
    </div>
  </div>
)

export default Footer

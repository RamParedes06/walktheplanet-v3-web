import { CloudflareR2Storage } from './utils'

interface MerchandiseProps {
  id: number
  image: string
  label: string
}

export const MerchandiseImages: MerchandiseProps[] = [
  {
    id: 1,
    image: CloudflareR2Storage + '/products/merchandise/Merchandise1_kexzcd.webp',
    label: 'Waterproof Bags',
  },

  {
    id: 2,
    image: CloudflareR2Storage + '/products/merchandise/Merchandise2_suhjra.webp',
    label: 'Reusable Water Bottle',
  },
]

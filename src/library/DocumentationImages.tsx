import { CloudflareR2Storage } from './utils'

interface DocumentationProps {
  id: number
  image: string
  label: string
}

export const DocumentationImages: DocumentationProps[] = [
  {
    id: 1,
    image: CloudflareR2Storage + '/products/docu/Documentation_tn8kri.webp',
    label: 'Visa Assistance',
  },
  {
    id: 2,
    image: CloudflareR2Storage + '/products/docu/Documentation2_fcogtf.webp',
    label: 'Immigration Assistance',
  },
]

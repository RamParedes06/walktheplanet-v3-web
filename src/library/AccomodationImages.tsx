import { CloudflareR2Storage } from './utils'

interface AccomodationProps {
  id: number
  image: string
  label: string
}

export const AccomodationImages: AccomodationProps[] = [
  {
    id: 1,
    image: CloudflareR2Storage + '/products/accomodation/Accom1_dkxa3f.webp',
    label: 'Hotels and Resorts',
  },
  {
    id: 2,
    image: CloudflareR2Storage + '/products/accomodation/Accom2_zs31wj.webp',
    label: 'Inns and Staycations',
  },
  {
    id: 3,
    image: CloudflareR2Storage + '/products/accomodation/Accom3_hmiyt0.webp',
    label: 'Residences',
  },
  {
    id: 4,
    image: CloudflareR2Storage + '/products/accomodation/Accom4_tvjn2z.webp',
    label: 'Boutique Hotels',
  },
]

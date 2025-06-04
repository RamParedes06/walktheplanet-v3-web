interface AccomodationProps {
  id: number;
  image: string;
  label: string;
}

export const AccomodationImages: AccomodationProps[] = [
  {
    id: 1,
    image: process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/products/accomodation/Accom1_dkxa3f.webp',
    label: 'Hotels and Resorts',
  },
  {
    id: 2,
    image: process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/products/accomodation/Accom2_zs31wj.webp',
    label: 'Inns and Staycations',
  },
  {
    id: 3,
    image: process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/products/accomodation/Accom3_hmiyt0.webp',
    label: 'Residences',
  },
  {
    id: 4,
    image: process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/products/accomodation/Accom4_tvjn2z.webp',
    label: 'Boutique Hotels',
  },
]

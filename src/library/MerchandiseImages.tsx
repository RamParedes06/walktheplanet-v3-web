interface MerchandiseProps {
  id: number;
  image: string;
  label: string;
}

export const MerchandiseImages: MerchandiseProps[] = [
  {
    id: 1,
    image: process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/products/merchandise/Merchandise1_kexzcd.webp',
    label: 'Waterproof Bags',
  },

  {
    id: 2,
    image: process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/products/merchandise/Merchandise2_suhjra.webp',
    label: 'Reusable Water Bottle',
  },
]

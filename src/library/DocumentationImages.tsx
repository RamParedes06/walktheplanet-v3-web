interface DocumentationProps {
  id: number;
  image: string;
  label: string;
}

export const DocumentationImages: DocumentationProps[] = [
  {
    id: 1,
    image: process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/products/docu/Documentation_tn8kri.webp',
    label: 'Visa Assistance',
  },
  {
    id: 2,
    image: process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/products/docu/Documentation2_fcogtf.webp',
    label: 'Immigration Assistance',
  },
]

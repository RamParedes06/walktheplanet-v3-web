import { CloudflareR2Storage } from './utils'

export interface AccordionItemData {
  id: number
  number: string
  title: string
  content: string
}

//images
export const emergencyImages = [
  CloudflareR2Storage + '/edutourism/emergency/edu-emergency1_ve4jl5.webp',
  CloudflareR2Storage + '/edutourism/emergency/edu-emergency2_lychp5.webp',
  CloudflareR2Storage + '/edutourism/emergency/edu-emergency3_nkvass.webp',
  CloudflareR2Storage + '/edutourism/emergency/edu-emergency4_hahswi.webp',
]

//accordion data
export const accordionData: AccordionItemData[] = [
  {
    id: 0,
    number: '01',
    title: 'EMERGENCY RESPONSE',
    content: 'Protocols for pre-to-post travel safety.',
  },
  {
    id: 1,
    number: '02',
    title: 'HELICOPTER SERVICES',
    content: 'For emergency medical flights with advanced life support.',
  },
  {
    id: 2,
    number: '03',
    title: 'ESTABLISHED SAFETY PARTNERSHIPS',
    content: 'To ensure responsible and well-prepared travel experiences.',
  },
  {
    id: 3,
    number: '04',
    title: 'ROAD TRAFFIC AND SAFETY ASSISTANCE',
    content: 'Throughout all educational tours',
  },
]

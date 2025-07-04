import { CloudflareR2Storage } from './utils'

export interface AccordionItemData {
  id: number
  number: string
  title: string
  content: string
}

//images
export const emergencyImages = [
  CloudflareR2Storage + '/mice/emergency/mice-emergency1_dla2yc.webp',
  CloudflareR2Storage + '/mice/emergency/mice-emergency2_hzsgoy.webp',
  CloudflareR2Storage + '/mice/emergency/mice-emergency3_uyr0iu.webp',
  CloudflareR2Storage + '/mice/emergency/mice-emergency4_maby2q.webp',
  CloudflareR2Storage + '/mice/emergency/mice-emergency5_vhznkw.webp',
  CloudflareR2Storage + '/mice/emergency/mice-emergency6_ievqdo.webp',
]

//accordion data
export const accordionData: AccordionItemData[] = [
  {
    id: 0,
    number: '01',
    title: 'CHARTERED FLIGHTS',
    content: 'Provide personalized and luxurious travel experience.',
  },
  {
    id: 1,
    number: '02',
    title: 'PROTECTION AGENTS',
    content: 'Are provided to ensure your safety during corporate and business travels.',
  },
  {
    id: 2,
    number: '03',
    title: 'EMERGENCY RESPONSE',
    content: 'Protocols for pre-to-post travel safety. ',
  },
  {
    id: 3,
    number: '04',
    title: ' HELICOPTER SERVICES',
    content: 'Provide emergency medical flights with advanced life support.',
  },
  {
    id: 4,
    number: '05',
    title: 'ESTABLISHED SAFETY PARTNERSHIPS',
    content: 'To ensure responsible and well-prepared travel experiences',
  },
  {
    id: 5,
    number: '06 ',
    title: 'ROAD TRAFFIC AND SAFETY ASSISTANCE',
    content: 'Are provided to ensure your safety during corporate and business travels',
  },
]

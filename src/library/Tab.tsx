import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaBusAlt } from 'react-icons/fa'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'
import { LuGraduationCap } from 'react-icons/lu'
import { PiBriefcaseMetal } from 'react-icons/pi'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { TbMessage2Heart } from 'react-icons/tb'

export interface Tab {
  id: string
  title: string
  image: StaticImageData | string
  description: string
  description1?: string
  customLink: string
  svg: IconType
  buttonText1: string
  buttonText2: string
  link: string
}

export const tabs: Tab[] = [
  {
    id: 'edutourism',
    title: 'EDUTOURISM',
    image: 'https://res.cloudinary.com/dmxvasob7/image/upload/v1744095169/Hero1Figma_xcgzrt.png',
    description: 'Fun knows no age!',
    description1: ' Immersive tours designed to inspire and enlighten every explorer at heart.',
    customLink: '',
    svg: LuGraduationCap,
    buttonText1: 'Find out where to explore next',
    buttonText2: 'Contact Us',
    link: '/edutourism',
  },
  {
    id: 'corporate',
    title: 'Corp & Business',
    image: 'https://res.cloudinary.com/dmxvasob7/image/upload/v1744096416/Corporate_Business_1_4_dab6y2.png',
    description: 'Corp & business trips made easy!',
    description1: 'Personalized services especially curated for your corporate and business needs',
    customLink: '',
    svg: PiBriefcaseMetal,
    buttonText1: 'Take your trip to the next level',
    buttonText2: 'Contact Us',
    link: '/corporate',
  },
  {
    id: 'mice',
    title: 'M.I.C.E',
    image: 'https://res.cloudinary.com/dmxvasob7/image/upload/v1744096418/MICE_1_2_c65uoh.png',
    description: 'No more logistical headaches, just flawless executions!',
    description1: 'Meticulously planned events designed for your organization’s success.',
    svg: HiOutlinePresentationChartLine,
    customLink: '',
    buttonText1: 'Explore Solutions',
    buttonText2: 'Contact Us',
    link: '/mice',
  },
  {
    id: 'travelpackage',
    title: 'Stay Connected & More!',
    image: 'https://res.cloudinary.com/dmxvasob7/image/upload/v1744096417/Travel_Essentials_Global_Data_Sim_1_1_ieqaf6.png',
    description: 'With our data SIM, pocket WiFi, and travel insurance, nothing can hold you back.',
    description1: 'Unlimited connection, total security, and zero worries!.',
    customLink: '',
    svg: FaBusAlt,
    buttonText1: 'Connect, secure, and explore here!',
    buttonText2: 'Contact Us',
    link: '/leisure',
  },
  {
    id: 'liveselling',
    title: 'TikTok Livesell',
    image: 'https://res.cloudinary.com/dmxvasob7/image/upload/v1744096026/Live_Selling_Tiktok_zjfzai.png',
    description: 'Your next dream getaway, curated just for you!',
    description1: 'Don’t just imagine, make it happen–catch exclusive, limited-time travel deals only on our TikTok live!',
    customLink: '',
    svg: TbMessage2Heart,

    buttonText1: 'Tune in on TikTok now!',
    buttonText2: 'Contact Us',
    link: 'https://www.tiktok.com/@walktheplanetinc',
  },
  {
    id: 'onlinestore',
    title: 'Online Shop',
    image: 'https://res.cloudinary.com/dmxvasob7/image/upload/v1744094662/Online_Store_t1xmy8.png',
    description: 'See it? Like it? Want it? Buy it!',
    description1: 'Turn “just browsing” into “just booked a flight” with just one click!',
    customLink: '',
    svg: RiShoppingCart2Line,
    buttonText1: 'Ready, set, book!',
    buttonText2: 'Contact Us',
    link: '/all-in-products',
  },
  {
    id: 'aboutus',
    title: 'Who We Are',
    image: 'https://res.cloudinary.com/dmxvasob7/image/upload/v1744267728/hero-aboutus_rjysnm.png',
    description: 'Walk the planet with us and see the world through our eyes!',
    customLink: '',
    svg: AiOutlineHeart,
    buttonText1: 'Know us more!',
    buttonText2: 'Contact Us',
    link: '/about-us',
  },
]

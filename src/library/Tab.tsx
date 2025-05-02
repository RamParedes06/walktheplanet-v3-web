import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { AiOutlineHeart } from "react-icons/ai";
import { FaBusAlt } from "react-icons/fa";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { LuGraduationCap } from "react-icons/lu";
import { PiBriefcaseMetal } from "react-icons/pi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { TbMessage2Heart } from "react-icons/tb";

export interface Tab {
  id: string;
  title: string;
  image: StaticImageData | string;
  description: string;
  customLink: string;
  svg: IconType;
  buttonText1: string;
  buttonText2: string;
  link: string;
}

export const tabs: Tab[] = [
  {
    id: "edutourism",
    title: "EDUTOURISM",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744095169/Hero1Figma_xcgzrt.png",
    description:
      "Immersive tours for all levels of education to enrich your students' knowledge.",
    customLink: "",
    svg: LuGraduationCap,
    buttonText1: "See where learning takes you",
    buttonText2: "Contact Us",
    link: "/edutourism",
  },
  {
    id: "corporate",
    title: "CORPORATE AND BUSINESS",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744096416/Corporate_Business_1_4_dab6y2.png",
    description:
      "Personalized services suited for all corporate and business travel needs.",
    customLink: "",
    svg: PiBriefcaseMetal,
    buttonText1: "See how we elevate your business",
    buttonText2: "Contact Us",
    link: "/corporate",
  },
  {
    id: "mice",
    title: "M.I.C.E",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744096418/MICE_1_2_c65uoh.png",
    description:
      "Meticulously planned events designed for your organization's success.",
    svg: HiOutlinePresentationChartLine,
    customLink: "",
    buttonText1: "Explore Solutions",
    buttonText2: "Contact Us",
    link: "/mice",
  },
  {
    id: "travelpackage",
    title: "TRAVEL PACKAGE ESSENTIALS",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744096417/Travel_Essentials_Global_Data_Sim_1_1_ieqaf6.png",
    description:
      "One SIM, 190+ destinations connecting you anywhere in the world.",
    customLink: "",
    svg: FaBusAlt,
    buttonText1: "Find out what to pack",
    buttonText2: "Contact Us",
    link: "/leisure",
  },
  {
    id: "liveselling",
    title: "LIVE SELLING",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744096026/Live_Selling_Tiktok_zjfzai.png",
    description:
      "Exclusive rates and awesome discounts right at your fingertips! Book now on our TikTok live selling hours.",
    customLink: "",
    svg: TbMessage2Heart,

    buttonText1: "Capture discounts and live updates",
    buttonText2: "Contact Us",
    link: "https://www.tiktok.com/@walktheplanetinc",
  },
  {
    id: "onlinestore",
    title: "ONLINE STORE",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744094662/Online_Store_t1xmy8.png",
    description:
      "One-stop shop packed with an array of options for all travelers. Explore our selections at",
    customLink: "tours.walktheplanet.com",
    svg: RiShoppingCart2Line,
    buttonText1: "See what's new in store",
    buttonText2: "Contact Us",
    link: "/all-in-products",
  },
  {
    id: "aboutus",
    title: "ABOUT US",
    image:
      "https://res.cloudinary.com/dmxvasob7/image/upload/v1744267728/hero-aboutus_rjysnm.png",
    description:
      "Exclusive Travel, Unique Experiences. Get to know who we are and where we play.",
    customLink: "",
    svg: AiOutlineHeart,
    buttonText1: "Find out what drives us",
    buttonText2: "Contact Us",
    link: "/about-us",
  },
];

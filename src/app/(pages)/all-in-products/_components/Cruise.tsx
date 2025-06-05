import TextReveal from '@/app/(pages)/_components/TextReveal'
import { CloudflareR2Storage } from '@/library/utils'

const bg = CloudflareR2Storage + '/products/Cruise.webp'

function Cruise() {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat relative " style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay flex absolute inset-0 top-0 bg-gradient-to-bl from-cyan-500/0 via-white/10 to-white">
        <div className="self-end  w-full">
          <div className="max-w-[1440px]  px-[80px] max-[490px]:px-[20px] py-[112px] max-[490px]:py-[80px] z-10">
            <div className="flex flex-col text-2xl max-[490px]:text-xl font-generalSans">
              <TextReveal>
                <p className="text-[64px] font-extrabold text-[#14476F] font-satoshi uppercase max-[490px]:text-[40px]">CRUISES</p>
                <p className="flex flex-col gap-[14px] p-0 text-black max-[490px]:text-[16px]">Experience the ultimate getaway at sea - luxury, adventure, and relaxation all in one</p>
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cruise

import bg from '@/assets/images/bgEduQuotes.png'
import { JSX } from 'react'

interface QuotesProps {
  title: JSX.Element
}

function Quotes({ title }: QuotesProps) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden quotes h-[40vh] bg-contain bg-center bg-white bg-no-repeat md:flex items-center justify-center" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="text-3xl text-[#14476F] text-center italic">{title}</div>
      </div>
      {/* Mobile */}
      <div
        className="md:hidden quotes h-[40vh] bg-contain bg-center bg-white bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS + '/mice/Frame_48098208_5_mr5qve.png')`,
        }}
      >
        <div className="text-3xl text-[#14476F] text-center italic">{title}</div>
      </div>
    </>
  )
}

export default Quotes

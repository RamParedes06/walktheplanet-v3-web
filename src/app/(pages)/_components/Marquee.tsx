import React from 'react'
import '../../../styles/marquee.scss'
type MarqueeProps = {
  variant?: 'homeHero' | 'corporateHero'
  gradient?: string
}
const Marquee = ({ variant, gradient }: MarqueeProps) => {
  return (
    <>
      {/* scroll animation!!  */}
      {variant === 'homeHero' ? (
        <>
          {/* scroll animation for home hero page */}
          <div className="wrapper top-wrapper bg-[#ffc000]">
            <div className="marquee text-sm lg:text-[16px]">
              <p>
                {
                  'Learn, explore, and get 20% OFF educational fun! \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0'
                }
              </p>
              <p>
                {
                  'Learn, explore, and get 20% OFF educational fun! \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0'
                }
              </p>
              <p>
                {
                  'Learn, explore, and get 20% OFF educational fun! \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0'
                }
              </p>
            </div>
          </div>
          <div className="wrapper bottom-wrapper">
            <div className="marquee text-sm lg:text-[16px]">
              <p>
                {
                  'Learn, explore, and get 20% OFF educational fun! \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0'
                }
              </p>
              <p>
                {
                  'Learn, explore, and get 20% OFF educational fun! \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0'
                }
              </p>
              <p>
                {
                  'Learn, explore, and get 20% OFF educational fun! \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0'
                }
              </p>
            </div>
          </div>
          {/* End of infinite scroll animation  */}
        </>
      ) : (
        <>
          {/* scroll animation for corporate hero page */}
          <div className={`wrapper bottom-wrapper overflow-hidden ${gradient} !text-white font-semibold`}>
            <div className="marquee">
              <p>
                {
                  'GET FREE UPGRADES ON SELECTED PACKAGES \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SPEND LESS, TRAVEL MORE\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0'
                }
              </p>
              <p>
                {
                  'GET FREE UPGRADES ON SELECTED PACKAGES \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SPEND LESS, TRAVEL MORE\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0'
                }
              </p>
              <p>
                {
                  'GET FREE UPGRADES ON SELECTED PACKAGES \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Learn, explore, and get 20% OFF educational fun!\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SPEND LESS, TRAVEL MORE\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ○ \u00A0\u00A0\u00A0'
                }
              </p>
            </div>
          </div>

          {/* End of infinite scroll animation  */}
        </>
      )}
    </>
  )
}

export default Marquee

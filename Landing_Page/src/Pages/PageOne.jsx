import Header from '../Components/Header'
import Hero from '../Components/Hero'
import CardRow from '../Components/CardRow'
import Benefits from '../Components/Benefits'
import SemiFooter from '../Components/SemiFooter'
import { FooterWithSocialLinks } from '../Components/Footer'
import { useMediaQuery } from 'react-responsive'
import OurServices from '../Components/OurServices'
import GetStarted from '../Components/GetStarted'
import WhatWeDo from '../Components/WhatWeDo'

const PageOne = ({ setActive }) => {

  const isMobile = useMediaQuery({ maxWidth: 960 });

  return (

    <div className='relative'>
      <Header setActive={setActive} />

      {/* {!isMobile &&
        <HeaderTwo />
      } */}
      <Hero setActive={setActive} />
      <div className='flex flex-col px-[5%] gap-20'>
        <CardRow />
        <WhatWeDo />
        <OurServices />
        <Benefits />
        <GetStarted />
        <SemiFooter setActive={setActive} />
      </div>
      <FooterWithSocialLinks />
    </div>
  )
}

export default PageOne
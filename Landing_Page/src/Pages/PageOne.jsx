import Header from '../Components/Header'
import HeaderTwo from '../Components/HeaderTwo'
import Hero from '../Components/Hero'
import CardRow from '../Components/CardRow'
import Benefits from '../Components/Benefits'
import SemiFooter from '../Components/SemiFooter'
import { FooterWithSocialLinks } from '../Components/Footer'
import { useMediaQuery } from 'react-responsive'

const PageOne = ({ setActive }) => {

  const isMobile = useMediaQuery({ maxWidth: 960 });

  return (
    <div>
      <Header setActive={setActive} />

      {/* {!isMobile &&
        <HeaderTwo />
      } */}
      <Hero setActive={setActive} />
      <CardRow />
      <Benefits />
      <SemiFooter setActive={setActive} />
      <FooterWithSocialLinks />
    </div>
  )
}

export default PageOne
import { useState } from 'react';
import PageOne from './Pages/PageOne';
import { PageTwo } from './Pages/PageTwo';
import { MotionConfig } from 'motion/react';

const App = () => {

  const [active, setActive] = useState(0)

  return (
    <MotionConfig transition={{ ease: 'easeIn' }}>
      <div>
        {active == 0 && <PageOne setActive={setActive} />}
        {active == 1 && <PageTwo setActive={setActive} />}
      </div>
    </MotionConfig>
  )
}

export default App
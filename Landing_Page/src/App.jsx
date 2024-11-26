import { useState } from 'react';
import PageOne from './Pages/PageOne';
import { PageTwo } from './Pages/PageTwo';

const App = () => {

  const [active, setActive] = useState(0)

  return (
    <div>
      {active == 0 && <PageOne setActive={setActive} />}
      {active == 1 && <PageTwo setActive={setActive} />}
    </div>
  )
}

export default App
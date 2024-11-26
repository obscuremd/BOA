const Logo = 'https://companieslogo.com/img/orig/BAC-e7995069.png?t=1720244490'


const Accordion = () => {
  return (
    <div>
        <div className="join join-vertical w-full">
            
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                
                
            </div>
            
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium flex justify-between">
                  <p>Credit Cards</p>
                  <p>$4,900.00</p>
                </div>
                <div className="collapse-content bg-base-200">
                  <div className="flex justify-between">
                    <p className="font-bold">Bank Of America</p>
                    <img className="w-12" src={Logo} alt="" />
                  </div>

                  <div className="py-5 flex flex-col gap-5">
                    <div className="flex justify-between">
                      <p>My Checking - 1234</p>
                      <p>$2,400.00</p>
                    </div>
                    <hr className="h-[1px] bg-gray-200" />
                    <div className="flex justify-between">
                      <p>My Checking - 1234</p>
                      <p>$2,400.00</p>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium flex justify-between">
                  <p>Loans</p>
                  <p>$4,900.00</p>
                </div>
                <div className="collapse-content bg-base-200">
                  <div className="flex justify-between">
                    <p className="font-bold">Bank Of America</p>
                    <img className="w-12" src={Logo} alt="" />
                  </div>

                  <div className="py-5 flex flex-col gap-5">
                    <div className="flex justify-between">
                      <p>My Checking - 1234</p>
                      <p>$2,400.00</p>
                    </div>
                    <hr className="h-[1px] bg-gray-200" />
                    <div className="flex justify-between">
                      <p>My Checking - 1234</p>
                      <p>$2,400.00</p>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium flex justify-between">
                  <p>Investments</p>
                  <p>$4,900.00</p>
                </div>
                <div className="collapse-content bg-base-200">
                  <div className="flex justify-between">
                    <p className="font-bold">Bank Of America</p>
                    <img className="w-12" src={Logo} alt="" />
                  </div>

                  <div className="py-5 flex flex-col gap-5">
                    <div className="flex justify-between">
                      <p>My Checking - 1234</p>
                      <p>$2,400.00</p>
                    </div>
                    <hr className="h-[1px] bg-gray-200" />
                    <div className="flex justify-between">
                      <p>My Checking - 1234</p>
                      <p>$2,400.00</p>
                    </div>
                  </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Accordion
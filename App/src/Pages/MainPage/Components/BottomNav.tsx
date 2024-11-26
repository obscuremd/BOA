import { CoinsSwap, DataTransferCheck, DollarCircle, SendDollars } from 'iconoir-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="btm-nav">
        <button className={pathname === '/' ? 'active' : ''}>
            <Link to={'/'}>
                <DollarCircle />
            </Link>
        </button>
        <button className={pathname === '/transfer' ? 'active' : ''}>
            <Link to={'/transfer'}>
                <SendDollars />
            </Link>
        </button>
        <button className={pathname === '/deposit-checks' ? 'active' : ''}>
            <Link to={'/deposit-checks'}>
                <DataTransferCheck />
            </Link>
        </button>
        <button className={pathname === '/trade' ? 'active' : ''}>
            <Link to={'/trade'}>
                <CoinsSwap />
            </Link>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;

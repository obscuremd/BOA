import ServiceCard from './ServiceCard';
import {
    GlobeEuropeAfricaIcon,
    CreditCardIcon,
    HomeIcon,
    ShieldCheckIcon,
    CurrencyDollarIcon,
    ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const data = [
    {
        icon: <GlobeEuropeAfricaIcon className="mb-4 h-12 w-12 text-blue-500" />,
        text: 'International Banking',
        body: 'Seamlessly manage your finances across borders with our comprehensive international banking services.',
    },
    {
        icon: <CreditCardIcon className="mb-4 h-12 w-12 text-green-500" />,
        text: 'Credit Cards',
        body: 'Enjoy flexible spending, competitive rewards, and worldwide acceptance with our tailored credit card solutions.',
    },
    {
        icon: <HomeIcon className="mb-4 h-12 w-12 text-indigo-500" />,
        text: 'Mortgages',
        body: 'Find the perfect home loan to finance your dream home with competitive rates and personalized options.',
    },
    {
        icon: <ShieldCheckIcon className="mb-4 h-12 w-12 text-red-500" />,
        text: 'Secure Financial Services',
        body: 'Your security is our priority. We provide advanced security solutions to protect your assets and data.',
    },
    {
        icon: <CurrencyDollarIcon className="mb-4 h-12 w-12 text-yellow-500" />,
        text: 'Investment Opportunities',
        body: 'Grow your wealth with expert guidance and diverse investment opportunities tailored to your goals.',
    },
    {
        icon: <ArrowTrendingUpIcon className="mb-4 h-12 w-12 text-teal-500" />,
        text: 'Accumulation Goals',
        body: 'Achieve your long-term financial goals with strategic planning and wealth accumulation strategies.',
    },
];

const OurServices = () => {
    return (
        <div id='our-services'>
            <div className='flex flex-col gap-3 justify-center items-center w-full'>
                <div className='bg-blue-300 h-2 w-[10%] rounded-full' />
                <p className='md:text-5xl text-4xl font-semibold'>Our Services</p>
            </div>
            <div className="flex gap-10 flex-wrap w-full justify-center">
                {data.map(({ icon, body, text }, index) => (
                    <ServiceCard key={index} icon={icon} text={text} body={body} />
                ))}
            </div>
        </div>
    );
};

export default OurServices;

import Logo from '../../../../assets/Hero.jpg'

const Hero = () => {
  return (
    <div>
        <div 
            style={{
                backgroundImage: `url(${Logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            className={`hero min-h-[30vh] rounded-2xl`}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome Back</h1>
                    <p className="py-6">
                        We are dedicated to providing an exceptional banking experience, offering personalized banking services, flexible loans, tailored credit card solutions, and expert investment opportunities. Our focus is on helping you achieve your financial goals with ease and confidence.
                    </p>
                    <button className="btn btn-neutral">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
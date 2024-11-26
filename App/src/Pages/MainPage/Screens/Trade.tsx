
// Disclosure Content
const disclosureContent = `
This Disclosure Agreement ("Agreement") is entered into between [Your Company Name] ("Company") 
and the undersigned individual or entity ("Trader"), and sets forth the terms and conditions governing 
the trading of stocks and securities through the Company's platform or services.

1. Acknowledgment of Risks  
1.1 Trading stocks and securities involves inherent risks, including, but not limited to, the risk of financial loss, 
market volatility, and unpredictable market events.  
1.2 Past performance of securities is not indicative of future results, and the Company does not guarantee any returns on investments.  
1.3 Investments in stocks are subject to market risks, and the Trader assumes full responsibility for all trading decisions and outcomes.  

2. No Guarantee or Warranty  
2.1 The Company provides trading tools, market data, and informational resources "as is" and does not guarantee their accuracy, completeness, or timeliness.  
2.2 The Company does not provide investment advice, recommendations, or any guarantee of profitability.  

3. Compliance with Laws and Regulations  
3.1 The Trader agrees to comply with all applicable laws, regulations, and rules related to the trading of stocks and securities, 
including but not limited to securities laws, anti-money laundering laws, and tax reporting obligations.  
3.2 The Trader is solely responsible for understanding and adhering to these regulations.  

4. Confidentiality  
4.1 Any proprietary information, trading algorithms, or tools provided by the Company are confidential and must not be disclosed, 
shared, or distributed without prior written consent from the Company.  
4.2 The Trader agrees to protect such information and use it solely for the purposes of trading as permitted by the Company.  

5. Limitation of Liability  
5.1 The Company is not liable for any losses, damages, or expenses incurred by the Trader due to market conditions, 
technical issues, or trading decisions.  
5.2 The Trader understands that trading systems may be subject to interruptions, delays, or errors, and the Company will not 
be held liable for such occurrences.  

6. Termination  
6.1 The Company reserves the right to terminate the Trader's account or restrict trading activities at its sole discretion if 
it determines that the Trader has violated this Agreement or applicable laws.  
6.2 Upon termination, the Trader must immediately cease using the Company’s services and return or delete any proprietary 
information obtained through the Company.  

7. Amendments  
7.1 The Company reserves the right to amend this Agreement at any time.  
7.2 Traders will be notified of any material changes via email or the Company’s platform, and continued use of the services 
constitutes acceptance of such changes.  

8. Governing Law  
This Agreement is governed by the laws of [Jurisdiction]. Any disputes arising out of this Agreement shall be resolved 
in the courts of [Jurisdiction].  

9. Acknowledgment and Agreement  
By signing this Agreement, the Trader acknowledges having read, understood, and agreed to the terms and conditions herein.  
`;

const image = "https://plus.unsplash.com/premium_vector-1711987884895-4e90ec0b4da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D";

const Trade = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="hero h-[40vh] rounded-2xl flex items-center pt-20"
      >
        <p className="text-4xl font-extrabold text-white">How would you like to trade</p>
      </div>

      {/* Main Content */}
      <div className="mt-[-50px] px-5 flex flex-col gap-3">
        {/* Trade Options */}
        <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
          <div className="collapse-title text-xl font-medium">Quick Trade</div>
          <div className="collapse-content">
            <p>Buy and sell stocks and ETFs using basic market/limit orders.</p>
          </div>
        </div>

        <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
          <div className="collapse-title text-xl font-medium">Full Trade</div>
          <div className="collapse-content">
            <p>All order types, including short sales, options, mutual funds, and extended hours trading.</p>
          </div>
        </div>

        {/* Disclosure Agreement */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Disclosure Agreement</h2>
          <p className="whitespace-pre-wrap">{disclosureContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Trade;

import React from 'react'

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center mt-5 ">
                <h1>Charges</h1>
                <p className='fs-4 text-muted mb-5'>List of all charges and taxes</p>

                <div className="col-4 mt-5 p-5 ">
                    <img src='media/images/pricing-eq.svg' style={{width:"70%"}} className='mb-3'/>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 mt-5 p-5">
                    <img src='media/images/intradayTrades.svg' style={{width:"70%"}} className='mb-3'/>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 mt-5 p-5">
                    <img src='media/images/pricing-eq.svg' style={{width:"70%"}} className='mb-3'/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;
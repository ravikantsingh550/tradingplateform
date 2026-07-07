import React from 'react'

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src='media/images/largestBroker.svg' alt='' />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha client contibute to over 15% of all retail orders volume in India daily by trading and inversting in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                        <li>Futures and Options</li>
                        <li>commodity derivatives</li>
                        <li>currency derivatives</li>
                    </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                        <li>Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Gov. Securites</li>
                    </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;
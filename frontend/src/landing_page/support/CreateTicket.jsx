import React from 'react'

function CreateTicket() {
    return ( 
       <div className="container">
        <div className="row ">
            <h1 className='fs-3 mb-5 mt-5'>
              To create a ticket, select a relevant topic
            </h1>
            <div className="col-4">
              <h4 className='fs-5 mb-5'><i class="fa-solid fa-circle-plus" style={{fontSize:"18px" , width:"25px"}}></i>Account Openning</h4>
              <p><a href=''style={{textDecoration:"none"}} >Online Account Opening </a></p> 
              <p><a href='' style={{textDecoration:"none"}}>Offline Account Opening </a></p>
              <p><a href=''style={{textDecoration:"none"}} >Company, Partnership and HUF Account Opening </a></p>
              <p><a href=''style={{textDecoration:"none"}} >NRI Account Opening </a></p>
              <p><a href='' style={{textDecoration:"none"}}>Charges at Zerodha </a></p>
              <p><a href='' style={{textDecoration:"none"}}>Zerodha IDFC FIRST Bank 3-in-1 Account </a></p>
              <p><a href='' style={{textDecoration:"none"}}>Getting Started </a></p>
            </div>
            <div className="col-4">
              <h4 className='fs-5 mb-5'><i class="fa-solid fa-user" style={{fontSize:"16px" , width:"22px"}}></i>Your Zerodha Account</h4>
             <p><a href='' style={{textDecoration:"none"}} > Login Credentials </a></p>
             <p><a href=''style={{textDecoration:"none"}} > Account Modification and Segment Addition</a></p>
             <p><a href=''style={{textDecoration:"none"}} > DP ID and Bank details</a></p>
             <p><a href=''style={{textDecoration:"none"}} > Your Profile</a></p>
             <p><a href='' style={{textDecoration:"none"}}> Transfer and conversion of shares</a></p>
            </div>
            <div className="col-4 ">
               <h4 className='fs-5 mb-5'><i class="fa-solid fa-chart-column" style={{fontSize:"18px" , width:"25px"}}></i>Your Zerodha Account</h4>
             <p><a href='' style={{textDecoration:"none"}} >  Margin/leverage, Product and Order types</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Kite Web and Mobile</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Trading FAQs</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Corporate Actions</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Sentinel</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Kite API</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Pi and other platform</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Stockreports+</a></p>
             <p><a href='' style={{textDecoration:"none"}} > GTT</a></p>
            </div>
             <div className="col-4 mt-3">
              <h4 className='fs-5 mb-5'><i class="fa-solid fa-wallet" style={{fontSize:"16px" , width:"22px"}}></i>Funds</h4>
             <p><a href='' style={{textDecoration:"none"}} >  Adding Funds</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Fund Withdrawal</a></p>
             <p><a href='' style={{textDecoration:"none"}} > eMandates</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Adding Bank Accounts</a></p>
            </div>
            <div className="col-4 mt-3">
              <h4 className='fs-5 mb-5'><i class="fa-solid fa-user" style={{fontSize:"16px" , width:"22px"}}></i>Console</h4>
             <p><a href='' style={{textDecoration:"none"}} >  Reports</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Ledger</a></p>
             <p><a href='' style={{textDecoration:"none"}} > Portfolio</a></p>
            <p><a href='' style={{textDecoration:"none"}} >  60 Day Challenge</a></p>
            <p><a href='' style={{textDecoration:"none"}} >  IPO</a></p>
            <p><a href='' style={{textDecoration:"none"}} >  Referral Program</a></p>
            </div>
            <div className="col-4  mt-3">
               <h4 className='fs-5 mb-5'><i class="fa-solid fa-chart-column" style={{fontSize:"18px" , width:"25px"}}></i>Coin</h4>
            <p><a href='' style={{textDecoration:"none"}} >   Understanding Mutual Funds</a></p>
            <p><a href='' style={{textDecoration:"none"}} >  About Coin</a></p>
            <p><a href='' style={{textDecoration:"none"}} >  Buying and Selling through Coin</a></p>
            <p><a href='' style={{textDecoration:"none"}} >  Starting an SIP</a></p>
            <p><a href='' style={{textDecoration:"none"}} >  Managing your Portfolio</a></p>
            <p><a href='' style={{textDecoration:"none"}} >  Coin App</a></p>
            <p><a href='' style={{textDecoration:"none"}} >  Moving to Coin</a></p>
            <p><a href='' style={{textDecoration:"none"}} >  Government Securities</a></p>
            </div>
        </div>
       </div>
     );
}

export default CreateTicket;
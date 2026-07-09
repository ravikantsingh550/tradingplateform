import React from 'react'

function Rightimage({imageUrl, productName , productDescription , tryDemo , learnMore, googlePlay , appStore}) {
    return ( 
        <div className="container mt-5">
        <div className="row">
            <div className="col-6  p-5 mt-5">
                 <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={learnMore} style={{ textDecoration:"none"}}>Learn More</a>
                </div>
                <div className='mt-4'>
                     <a href={googlePlay} ><img src='media/images/googlePlayBadge.svg'/></a>
                <a href={appStore} style={{marginLeft:"50px"}}><img src='media/images/appstoreBadge.svg'/></a>
                </div>
            </div>
            
            <div className="col-6  ">
               <img src={imageUrl}/>
               
            </div>
        </div>
       </div>
     );
}

export default Rightimage;
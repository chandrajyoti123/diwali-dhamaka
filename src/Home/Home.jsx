import React, { useState } from 'react'
import stars from './img/stars.png'
import rose from './img/rose.png'

import './Home.css'
import { useSearchParams } from 'react-router-dom'
 const greeting=['A New Year is like a blank book, and the pen is in your hands. It is your chance to write a beautiful story for yourself. Happy New Year.','Every end marks a new beginning. Keep your spirits and determination unshaken, and you shall always walk the glory road. With courage, faith and great effort, you shall achieve everything you desire. I wish you a Happy New Year.','You’re supposed to let go of the past and start off new. You’re supposed to forgive all those who have hurt you and be open to new relationships, with open arms. That is why it is called the ‘New’ Year. May you have a Happy New Year','We will open the book. Its pages are blank. We are going to put words on them ourselves. The book is called Opportunity, and its first chapter is New Year’s Day','At precisely the moment you feel like giving up, victory is always within reach. Remember this moving into the New Year.']
 const theme=['theme-1','theme-2','theme-3','theme-4']
export default function Home() {
  const [searchParams]=useSearchParams();
  const [to,setTo]=useState(searchParams.get("to"))
  const [from ,setFrom]=useState(searchParams.get("from"))
  
  
 
  const g=searchParams.get("g")>greeting.length?0:searchParams.get("g")||0
  const t=searchParams.get('t')
  return (
    <div>
    <div className={`main-container ${theme[t]}`}>
     
      <div className='greet-body'>
      <h1 className='heading'><img   src={stars} className='stars'/>Happy New Year<img  src={stars} className='stars'/></h1>
      <div className='greet-to'>Dear {to}</div>
      <div className='greet-message'>{greeting[g]}</div>
      <div className='greet-form'> <img src={rose} className='rose'/>Regards {from}</div>
      </div>
    
   </div>
   <div className='text-to-customize'>Do you want to create your own Diwali Greeting? Customize it here 👇</div>
   <input type='text' placeholder='name of your friend' onChange={(e)=>{

   }} />
   </div>
  

  )
}

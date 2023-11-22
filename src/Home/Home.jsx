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
  const [g,setG]=useState(searchParams.get("g"))
  const [t,setT]=useState(searchParams.get('t'))
  
  


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
   <div className='text-to-customize'>Do you want to create your own New Year  Greeting? Customize it here 👇</div>
   <div className="url" onClick={()=>{
    const url=`${import.meta.env.VITE_BASE_URL}/?to=${to}&from=${from}&g=${g}&t=${t}`
    navigator.clipboard.writeText(url);
    alert(`copied ${url}`)
   }}>
    {`${import.meta.env.VITE_BASE_URL}/?to=${to}&from=${from}&g=${g}&t=${t}`}
   </div>
   <div className='input-container'>
   <input className='input-field' type='text' placeholder='name of your friend' onChange={(e)=>{
     setTo(e.target.value)}} />
   <input className='input-field' type='text' placeholder='name of your' onChange={(e)=>{
     setFrom(e.target.value)}} />
     <select value={g} onChange={(e)=>{
      setG(e.target.value)
     }} className='select-field'>
      <option value={0}>Greeting 1</option>
      <option value={1}>Greeting 2</option>
      <option value={2}>Greeting 3</option>
      <option value={3}>Greeting 4</option>
      <option value={4}>Greeting 5</option>

     </select>

     <select value={t} onChange={(e)=>{
      setT(e.target.value)
     }} className='select-field'>
      <option value={0}>theme 1</option>
      <option value={1}>theme 2</option>
      <option value={2}>theme 3</option>
      <option value={3}>theme 4</option>
     

     </select>

     </div>

   </div>
   
  

  )
}

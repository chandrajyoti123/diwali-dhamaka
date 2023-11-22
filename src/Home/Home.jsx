import React from 'react'
import { useSearchParams } from 'react-router-dom'
 const greeting=['happy diwali','happy dussehara','happy holi']
export default function Home() {
  const [searchParams]=useSearchParams();
  const to=searchParams.get("to")
  const from=searchParams.get("from")
  const g=searchParams.get("g")>greeting.length?0:searchParams.get("g")||0
  return (
    <div>
      <h1>this is home page</h1>
      <div>dear {to} this greeting from {from} and I wish you {greeting[g]} </div>

    </div>
  )
}

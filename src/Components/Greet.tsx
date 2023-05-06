import React from 'react'

interface Greets  {
    greeting : string
    unread: number
    isLoggedIn: boolean
}

const Greet = (props: Greets) => {
  return (
    <div>
        <>
      {  
     props.isLoggedIn?` Hey! {props.greeting}, you have {props.unread} unread messages.` : `Hello and welcome there!`
      }
        </>
    </div>
  )
}

export default Greet;
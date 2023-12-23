import React from 'react'
import { useRef } from 'react';


export default function Input({ setPokemon }) {

  const userText = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setPokemon(userText.current.value)
    console.log(userText.current.value)
    console.log('this is pokemon',userText.current.value)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input ref={userText} type='text'></input>
        <button type='submit'>I choose You</button>
      </form>
    </div>
  )
}

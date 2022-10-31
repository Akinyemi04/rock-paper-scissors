import React from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
  const score = useSelector((val)=>{
    return val.data.score
  })
  return (
    <header>
        <section>
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </section>
        <aside>
          <span className='score'>SCORE</span>
          <span className='number'>{score}</span>
        </aside>
      </header>
  )
}

export default Header
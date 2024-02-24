import React from 'react'
import style from '../style';
import { discount, robot } from '../assets'

const Hero = () => {
  return (
    <section id='home' className={`
    flex
    md:flex-row
    flex-col
    ${style.paddingY}`}>
      <div className={`
      flex-1
      ${style.flexStart}
      flex-col
      xl:px-0
      sm:px-16
      px-6`}>

        <div className='
        flex
        flex-row
        justify-between
        items-center
        w-full'>
          <h1>
            <span className='text-gradient'>
              NAJLEPSI
            </span>
            {' '} Z <br className='sm:block hidden' /> {' '}
            <span className='text-gradient'>
              NAJGORSZYCH
            </span>
          </h1>

        </div>
      </div>
    </section >
  )
}

export default Hero

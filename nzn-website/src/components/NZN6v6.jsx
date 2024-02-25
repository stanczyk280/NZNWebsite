import React from 'react'
import style from '../style'
import { layout } from '../style'
import { features } from '../constants'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div>
    <div>
      <img src={icon} alt='icon' />
    </div>
  </div>
)


const NZN6v6 = () => {
  return (
    <section id='nzn6v6' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>Jedyny taki swoim rodzaju. <br className='sm:block hidden' /> Turniej 6 vs 6 w Hell Let Loose. </h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>Specjalnie opracowane zasady i odpowiednio wybrane mapy, sprawiają, że każda rozgrywka jest szybka, dynamiczna i emocjonująca. Zobacz starania najlepszych teamów na świecie, lub sam spróbuj sięgnąć po zwycięstwo ze swoją drużyną.</p>
        <Button styles='mt-10' />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default NZN6v6

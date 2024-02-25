import React from 'react'
import style from '../style'
import { layout } from '../style'
import { features } from '../constants'
import Button from './Button'
import { logo_6v6 } from '../assets';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${style.flexCenter} `}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1'>
        {content}
      </p>
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
      <div className={`${layout.sectionImg} flex-col w-[400px] h-[400px]`}>
        <img src={logo_6v6} />
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

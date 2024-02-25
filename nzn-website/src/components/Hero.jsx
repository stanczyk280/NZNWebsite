import React from 'react';
import style from '../style';
import { nzn_text, logo } from '../assets';
import JoinUs from './JoinUs';

const Hero = () => {
  return (
    <section id='home' className={`relative flex flex-col md:flex-row ${style.paddingY}`}>
      {/* Gradient Elements */}


      <div className='flex flex-col z-[2] justify-center items-center'>
        <img src={nzn_text} alt='nzn_text' className='w-[800px] h-[160px] mx-auto md:mx-0' />
        <img src={logo} alt='logo' className='w-[280px] h-[300px]' />
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center w-full'>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 silver__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 gold__gradient' />
        <div className='mb-6 md:mb-0 p-4'>
          {/* Flavour text */}
          <p className='font-poppins font-normal leading-[23px] ss:text-[22px] text-[14px] w-full text-white text-justify'>
            Zapewne masz w pamięci ciepłe, letnie poranki z dzieciństwa, kiedy umawiałeś się z kumplami na grę w piłkę, wspólne wspinanie się po drzewach i beztroskie włóczęgi po osiedlu. To były czasy, kiedy nie martwiłeś się niczym, a jedynym problemem było ustalenie, czyją piłką gracie.
            <br />
            <br />
            Czy te wspomnienia przywodzą Ci uśmiech na twarz? Jeśli tak, to świetnie, bo u nas możesz wrócić do tych beztroskich chwil! "Najlepsi z Najgorszych" to klan, który powstał w lutym 2021 roku z myślą o graczach, którzy poszukują przyjaznej, rodzinnej atmosfery, gdzie mogą być sobą i nie udawać nikogo innego. Zamieniliśmy tylko piłkę na wirtualne karabiny w grze "Hell Let Loose."
          </p>
        </div>
        <div className='mx-10 my-10 z-[2]'>
          {/* JoinUs component */}
          <JoinUs />
        </div>
      </div>
    </section>
  );
};

export default Hero;

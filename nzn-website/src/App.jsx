import React from 'react'
import styles from './style';
import { Navbar, Button, Discord, Statystyki, NZN6v6, Footer, Hero } from './components';


const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} z-[2]`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Statystyki />
        <NZN6v6 />
        <Discord />
        <Footer />
      </div>
    </div>
  </div>
);

export default App

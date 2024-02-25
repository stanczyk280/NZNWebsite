import React from 'react'

function Button({ styles }) {
  return (
    <button type='button' className={`py-4 px-6 bg-gold-gradient font-poppins font-semibold text-[18px] text-primary outline-none ${styles}`}>
      DOŁĄCZ JUŻ TERAZ
    </button>
  )
}

export default Button

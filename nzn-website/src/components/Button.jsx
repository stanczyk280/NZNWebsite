import React from 'react';

function Button({ styles }) {
  const openNewWindow = () => {
    window.open('https://discord.gg/SvA7kJZJVv', '_blank');
  };

  return (
    <button
      type='button'
      className={`py-4 px-6 bg-gold-gradient font-poppins font-semibold text-[18px] text-primary outline-none ${styles}`}
      onClick={openNewWindow}
    >
      DOŁĄCZ JUŻ TERAZ
    </button>
  );
}

export default Button;

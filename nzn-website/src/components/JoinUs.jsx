import React from 'react';
import style from '../style';
import { discord_icon } from '../assets';

const JoinUs = () => {

    const handleJoinUsClick = () => {
        window.open('https://discord.com/invite/nzn', '_blank');
    };

    return (
        <div
            className={`${style.flexCenter} w-[200px] h-[200px] squared-full bg-gold-gradient p-[2px] cursor-pointer`}
            onClick={handleJoinUsClick}>
            <div className={`${style.flexCenter} flex-col bg-primary w-[95%] h-[95%] squared-full `}>
                <div className={`${style.flexStart} flex-row`}>
                    <img src={discord_icon} className='w-[100px] h-[100px]' alt='Discord Icon' />
                </div>

                <div
                    className={`${style.flexStart} flex-row`}>
                    <p className='font-poppins font-medium leading-[30px] text-[20px] text-gradient-gold'>
                        <span className='font-bold'>DOŁĄCZ </span>
                        <span>DO NAS</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;

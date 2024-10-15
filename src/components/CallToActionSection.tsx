import React, { useState } from 'react';
import sup from '../images/sup.png';
import arobase from '../images/aro.svg';
import more from '../images/more-app.png';
import call from '../images/call.svg';
import phoneapp from '../images/phoneapp.png';
import gradient from'../images/recgradient.png'


const CallToActionSection: React.FC = () => {

  return (
      <section className="w-full pb-10 max-w-[1400px] mx-auto  px-20">
          <div className='w-full relative p-20 rounded-3xl flex-col flex justify-center items-center'>
              <img src={gradient} alt='' className='w-full border-8 border-gray-100 h-full rounded-3xl absolute inset-0' />
              <h6 className='text-6xl font-semibold leading-snug z-20 text-white mb-10'>Travaillons ensemble sur vos futurs projets web.</h6>
              <button className='uppercase group flex items-center gap-6 transition-all duration-300 hover:bg-[#d789f1] bg-[#E496FF] rounded-full z-20 p-2 px-4 pl-8 text-white  text-xl font-black'>
                  réservez un appel gratuit
                  <img src={phoneapp}  className='w-14 group-hover:rotate-45 transition-all duration-300 bg-white p-4 rounded-full' alt=''/>
              </button>
          </div>

    </section>
  );
};

export default CallToActionSection;

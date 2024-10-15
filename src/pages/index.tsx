import React from 'react';
import iconAdapt from '../images/adapt.svg'
import iconTheme from '../images/themea.svg'
import iconTrust from '../images/secure.svg'
import ov1 from '../images/ov1.png'
import ov2 from '../images/ov2.png'
import ov3 from '../images/ov3.png'
import elips from '../images/elips.svg'
import elipsblue from '../images/elipsblue.png'
import iconCrea from '../images/crea.svg'
import iconChart from '../images/chart.svg'
import iconCom from '../images/comm.svg'
import iconNet from '../images/network.svg'
import iconElem from '../images/lay/elementor.png'
import iconWp from '../images/lay/wp.png'
import iconFig from '../images/lay/figma.png'
import iconCad from '../images/lay/cadena.png'
import iconStripe from '../images/lay/stripe.png'
import iconSeo from '../images/lay/seo.png'
import iconDivi from '../images/lay/divi.png'
import iconAdob from '../images/lay/adobe.png'
import iconTab from '../images/tab.svg'
import iconBook from '../images/book.svg'
import iconPhone from '../images/phone.svg'
import iconImac from '../images/imac.svg'
import GroupSectionImage from '../images/groupsection.png'
import bag from '../images/bag.svg'
import calendar from '../images/calendar.svg'
import mail from '../images/mail.svg'
import stat from '../images/stat.svg'
import pouce from '../images/pouce.svg'
import loca from '../images/loca.svg'
import chat from '../images/chat.svg'
import card from '../images/card.svg'
import arrow from '../images/arrow.svg'
import faq from '../images/faq.png'
import arobase from '../images/aro.svg'
import call from '../images/call.svg'
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';
import SectionCarousel from '../components/CarouselSection';
import PrestationsSection from '../components/PrestationsSection';
import ResponsiveSection from '../components/ResponsiveSection';
import PluginsSection from '../components/ServicesSection';
import CallToActionSection from '../components/CallToActionSection';
import GallerySection from '../components/GallerySection';





const Home: React.FC = () => {
  return (
    <div className="text-center space-y-14 overflow-hidden">
      <h1 className='text-5xl font-bold w-1/2 mx-auto leading-snug'>Votre site web professionnel adapté à votre activité</h1>
      <div className='flex justify-center gap-14 px-20'>
        <div className='  bg-[#ED1E24]/15 text-[#ED1E24] flex items-center gap-10 justify-between p-8 px-10 rounded-3xl'>
          <img src={iconAdapt} alt='' className='w-20' />
          <p className='text-[28px]  font-bold text-left'>Adapté tout device</p>
        </div>
        <div className='  bg-[#601EED]/15 text-[#601EED] flex items-center gap-10 justify-between p-8 px-10 rounded-3xl'>
          <img src={iconTheme} alt='' className='w-20' />
          <p className='text-[28px] font-bold text-left'>+100 Thème adaptés</p>
        </div>
         <div className='  bg-[#21B157]/15 text-[#21B157] flex items-center gap-10 justify-between p-8 px-10 rounded-3xl'>
          <img src={iconTrust} alt='' className='w-20' />
          <p className='text-[28px] font-bold text-left'>Sécurisé & Support</p>
        </div>
      </div>
      <SectionCarousel />

      <PrestationsSection />
      <ResponsiveSection/>

      <PluginsSection/>
      <FaqSection />
      <CallToActionSection />
      <div className='p-20 pb-10 pt-0  max-w-[1400px] mx-auto'>
              <hr className='border-black/20'/>

      </div>
      <GallerySection/>
      
    </div>
  );
};

export default Home;
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





const Home: React.FC = () => {
  return (
    <div className="text-center space-y-14">
      <h1 className='text-6xl font-bold w-[80%] mx-auto leading-snug'>Votre site web professionnel adapté à votre activité</h1>
      <div className='flex justify-center gap-20 px-10'>
        <div className='  bg-[#ED1E24]/15 text-[#ED1E24] flex items-center gap-10 justify-between p-8 rounded-3xl'>
          <img src={iconAdapt} />
          <p className='text-[26px]  font-bold text-left'>Adapté tout device</p>
        </div>
        <div className='  bg-[#601EED]/15 text-[#601EED] flex items-center gap-10 justify-between p-8 rounded-3xl'>
          <img src={iconTheme} />
          <p className='text-[26px] font-bold text-left'>+100 Thème adaptés</p>
        </div>
         <div className='  bg-[#21B157]/15 text-[#21B157] flex items-center gap-10 justify-between p-8 rounded-3xl'>
          <img src={iconTrust} />
          <p className='text-[26px] font-bold text-left'>Sécurisé & Support</p>
        </div>
      </div>
      <div className='flex items-center gap-20 justify-start pt-10 px-10 overflow-scroll no-scrollbar'>
  <div className=' relative flex-shrink-0'>
    <img src={ov1} className='h-[500px] w-auto rounded-3xl border object-cover object-left-top' alt='' />
  <div className='absolute w-full h-full rounded-3xl bg-gradient-to-t from-black/80 to-transparent z-50 inset-0 transition-opacity duration-500 hover:opacity-0'></div>
  </div>
  
  <div className=' relative flex-shrink-0'>
    <img src={ov2} className='h-[500px] w-auto rounded-3xl border object-cover object-left-top' alt='' />
  <div className='absolute w-full h-full rounded-3xl bg-gradient-to-t from-black/80 to-transparent z-50 inset-0 transition-opacity duration-500 hover:opacity-0'></div>
  </div>
  
  <div className='relative flex-shrink-0'>
    <img src={ov3} className='h-[500px] w-auto rounded-3xl border object-cover object-left-top' alt='' />
  <div className='absolute w-full h-full rounded-3xl bg-gradient-to-t from-black/80 to-transparent z-50 inset-0 transition-opacity duration-500 hover:opacity-0'></div>
  </div>
</div>
      <div className='relative pt-10 w-3/4 overflow-visible space-y-14  mx-auto'>
        <h2 className='text-6xl font-bold   mx-auto leading-snug'>Nous nous occupons de la digitalisation de votre marque.</h2>
                <img src={elips}  className='w-full opacity-10 z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute ' alt=''/>

        <div className='grid min-w-[900px]  w-[900px] grid-cols-2 gap-12 py-10  mx-auto'>

          <div className='w-full z-20 shadowed flex gap-6 items-start bg-white p-6 px-8 rounded-3xl'>
            <img src={iconCrea} alt='' className='w-[70px]' />
            <div className='text-left'>
              <span className='text-xl  uppercase rubik font-semibold'>
                Création de site web
              </span>
              <p className='pt-1 leading-6'>
                Vitrine ou e-commerce professionel
              </p>
            </div>
          </div>
          <div className='w-full z-20 shadowed flex gap-6 items-start bg-white p-6 px-8 rounded-3xl'>
            <img src={iconChart} alt='' className='w-[70px]' />
            <div className='text-left'>
              <span className='text-xl  uppercase rubik font-semibold'>
                Création de site web
              </span>
              <p className='pt-1 leading-6'>
                Vitrine ou e-commerce professionel
              </p>
            </div>
          </div>
         <div className='w-full z-20 shadowed flex gap-6 items-start bg-white p-6 px-8 rounded-3xl'>
            <img src={iconCom} alt='' className='w-[70px]' />
            <div className='text-left'>
              <span className='text-xl  uppercase rubik font-semibold'>
                Création de site web
              </span>
              <p className='pt-1 leading-6'>
                Vitrine ou e-commerce professionel
              </p>
            </div>
          </div>
          <div className='w-full z-20 shadowed flex gap-6 items-start bg-white p-6 px-8 rounded-3xl'>
            <img src={iconNet} alt='' className='w-[70px]' />
            <div className='text-left'>
              <span className='text-xl  uppercase rubik font-semibold'>
                Création de site web
              </span>
              <p className='pt-1 leading-6'>
                Vitrine ou e-commerce professionel
              </p>
            </div>
          </div>

        </div>
        <div className='flex items-center justify-center gap-10 opacity-20'>
          <img src={iconElem} className='h-10'/>
    
          <img src={iconDivi} className='h-10'/>

          <img src={iconStripe} className='h-10'/>
  
          <img src={iconWp} className='h-10'/>

          <img src={iconSeo} className='h-10'/>
    
          <img src={iconCad} className='h-10'/>
       
          <img src={iconAdob} className='h-10'/>
    
          <img src={iconFig} className='h-10'/>
        </div>
       

      </div>
      <section className='py-32 space-y-14 w-full'>
        <h2 className='text-6xl font-bold w-3/4  mx-auto  leading-snug'>Votre site web adapté pour chaque appareil.</h2>

        <div className='flex items-center justify-center gap-6'>
        <img src={iconImac} alt='' className='h-10' />
        <img src={iconBook} alt='' className='h-10' />
        <img src={iconTab} alt='' className='h-10' />
        <img src={iconPhone} alt='' className='h-10' />

        </div>
        <div className='w-full'>
          <img src={GroupSectionImage} className='w-full -mt-10' alt='' />
        </div>
      </section>

      <section className=' space-y-14 relative w-full'>
        <img src={elipsblue} className='w-full opacity-15 absolute top-0 -left-96' alt='' />
                <img src={elips} className='w-full opacity-15 absolute bottom-0 -right-96' alt='' />
        <h2 className='text-6xl font-bold w-3/4  mx-auto  leading-snug'>Des dizaines d’options disponible à ajouter sur votre site.</h2>
  <div className='grid  w-3/4 grid-cols-3 gap-12 py-10 px-20  mx-auto'>

           <div className='w-full group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl'>
            <img src={card} alt='' className='w-[100px] mx-auto mb-4 text-center' />
            <span className='text-xl font-regular'>Boutique</span>
            <div className='inset-0 group-hover:opacity-100 opacity-0 transition-all duration-700 flex flex-col gap-4 justify-center items-center p-6 absolute bg-black/80 backdrop-blur-xl rounded-3xl w-full h-full'>
              <img src={iconStripe} alt='' className='h-10 invert' />
              <p className='text-sm text-white'>Extension paiement sécurisé avec Stripe. (généralement utilisé pour la vente de services). </p>
            </div>
          </div>
           <div className='w-full group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl'>
            <img src={calendar} alt='' className='w-[100px] mx-auto mb-4 text-center' />
            <span className='text-xl font-regular'>Boutique</span>
            <div className='inset-0 group-hover:opacity-100 opacity-0 transition-all duration-700 flex flex-col gap-4 justify-center items-center p-6 absolute bg-black/80 backdrop-blur-xl rounded-3xl w-full h-full'>
              <img src={iconStripe} alt='' className='h-10 invert' />
              <p className='text-sm text-white'>Extension paiement sécurisé avec Stripe. (généralement utilisé pour la vente de services). </p>
            </div>
          </div>
           <div className='w-full group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl'>
            <img src={chat} alt='' className='w-[100px] mx-auto mb-4 text-center' />
            <span className='text-xl font-regular'>Boutique</span>
            <div className='inset-0 group-hover:opacity-100 opacity-0 transition-all duration-700 flex flex-col gap-4 justify-center items-center p-6 absolute bg-black/80 backdrop-blur-xl rounded-3xl w-full h-full'>
              <img src={iconStripe} alt='' className='h-10 invert' />
              <p className='text-sm text-white'>Extension paiement sécurisé avec Stripe. (généralement utilisé pour la vente de services). </p>
            </div>
          </div>
           <div className='w-full group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl'>
            <img src={loca} alt='' className='w-[100px] mx-auto mb-4 text-center' />
            <span className='text-xl font-regular'>Boutique</span>
            <div className='inset-0 group-hover:opacity-100 opacity-0 transition-all duration-700 flex flex-col gap-4 justify-center items-center p-6 absolute bg-black/80 backdrop-blur-xl rounded-3xl w-full h-full'>
              <img src={iconStripe} alt='' className='h-10 invert' />
              <p className='text-sm text-white'>Extension paiement sécurisé avec Stripe. (généralement utilisé pour la vente de services). </p>
            </div>
          </div>
           <div className='w-full group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl'>
            <img src={stat} alt='' className='w-[100px] mx-auto mb-4 text-center' />
            <span className='text-xl font-regular'>Boutique</span>
            <div className='inset-0 group-hover:opacity-100 opacity-0 transition-all duration-700 flex flex-col gap-4 justify-center items-center p-6 absolute bg-black/80 backdrop-blur-xl rounded-3xl w-full h-full'>
              <img src={iconStripe} alt='' className='h-10 invert' />
              <p className='text-sm text-white'>Extension paiement sécurisé avec Stripe. (généralement utilisé pour la vente de services). </p>
            </div>
          </div>
           <div className='w-full group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl'>
            <img src={pouce} alt='' className='w-[100px] mx-auto mb-4 text-center' />
            <span className='text-xl font-regular'>Boutique</span>
            <div className='inset-0 group-hover:opacity-100 opacity-0 transition-all duration-700 flex flex-col gap-4 justify-center items-center p-6 absolute bg-black/80 backdrop-blur-xl rounded-3xl w-full h-full'>
              <img src={iconStripe} alt='' className='h-10 invert' />
              <p className='text-sm text-white'>Extension paiement sécurisé avec Stripe. (généralement utilisé pour la vente de services). </p>
            </div>
          </div>
           <div className='w-full group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl'>
            <img src={mail} alt='' className='w-[100px] mx-auto mb-4 text-center' />
            <span className='text-xl font-regular'>Boutique</span>
            <div className='inset-0 group-hover:opacity-100 opacity-0 transition-all duration-700 flex flex-col gap-4 justify-center items-center p-6 absolute bg-black/80 backdrop-blur-xl rounded-3xl w-full h-full'>
              <img src={iconStripe} alt='' className='h-10 invert' />
              <p className='text-sm text-white'>Extension paiement sécurisé avec Stripe. (généralement utilisé pour la vente de services). </p>
            </div>
          </div>
           <div className='w-full group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl'>
            <img src={bag} alt='' className='w-[100px] mx-auto mb-4 text-center' />
            <span className='text-xl font-regular'>Boutique</span>
            <div className='inset-0 group-hover:opacity-100 opacity-0 transition-all duration-700 flex flex-col gap-4 justify-center items-center p-6 absolute bg-black/80 backdrop-blur-xl rounded-3xl w-full h-full'>
              <img src={iconStripe} alt='' className='h-10 invert' />
              <p className='text-sm text-white'>Extension paiement sécurisé avec Stripe. (généralement utilisé pour la vente de services). </p>
            </div>
          </div>
          <div className='w-full cursor-pointer h-full flex flex-col justify-center items-center gap-4 gradient-layer group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl'>
            <span className='text-2xl font-bold text-white'>Voir toutes les options</span>
            <img src={arrow} alt='' className='w-[50px] mx-auto text-center' />

          </div>

        </div>
        
      </section>
      <section>
        <div className='flex'>
          <div className='w-[60%] text-left space-y-4'>
            <span className='text-4xl'>Questions fréquemment posées</span>
            <p className='text-lg'>Questions fréquemment posées</p>
          </div>
          <div className='bg-[#ED1ECC]/10 space-y-6 w-[40%] text-center p-12 rounded-3xl'>
                        <img src={faq} className='w-20 mx-auto' alt=''/>

            <div className='space-y-2'> <span className='rubik uppercase font-semibold text-2xl'>Vous avez des questions ?</span>
            <p className='text-lg'>Nous répondrons à vos question dans un délais de 24 heures</p></div>
           
              <div className='bg-green-500 rounded-full text-white flex justify-between p-4 px-10 '>
              
              <div className='text-left space-y-1'><span className='rubik font-bold text-xl uppercase '>Contactez nous</span><p className='text-sm'>/Du Lundi au Vendredi de 9h à 18h</p></div>
              <div className='p-3 bg-white rounded-full flex items-center justify-center'> <img src={arobase} alt='' className='w-6 ' /></div>
            </div>
            <div className='bg-green-500 rounded-full text-white flex justify-between p-4 px-10'>
              
              <div className='text-left space-y-1'><span className='rubik font-bold text-xl uppercase '>Contactez nous</span><p className='text-sm'>/Du Lundi au Vendredi de 9h à 18h</p></div>
              <div className='p-3 bg-white rounded-full flex items-center justify-center'> <img src={arobase} alt='' className='w-6 ' /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

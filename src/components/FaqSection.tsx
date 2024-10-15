import React, { useState } from 'react';
import sup from '../images/sup.png';
import arobase from '../images/aro.svg';
import more from '../images/more-app.png';
import call from '../images/call.svg';


const FaqSection: React.FC = () => {
  // Initialisation de openIndex à null
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    // Si la collapse est ouverte, on la ferme, sinon on l'ouvre
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-20 py-20 max-w-[1400px] pointer-events-auto mx-auto z-[5000]">
      <div className="flex items-start gap-40">
        <div className="w-[60%] text-left space-y-6 ">
          <span className="text-[38px] font-semibold">Questions fréquemment posées</span>
          <p className="text-lg text-gray-500 font-light">Posez vos questions sur <b className='font-medium text-black italic'>contact@craftyapplication.com</b></p>
          <div className="">
            {[
              {
                question: "Combien de temps de création pour un site vitrine classique ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est velit, luctus nec aliquet eu, tempor sit amet odio. Etiam pellentesque viverra ornare.",
              },
              {
                question: "Quelles sont les étapes de la création d'un site web ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est velit, luctus nec aliquet eu, tempor sit amet odio. Etiam pellentesque viverra ornare.",
              },
              {
                question: "Comment avoir un bon référencement ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est velit, luctus nec aliquet eu, tempor sit amet odio. Etiam pellentesque viverra ornare.",
              },
            ].map((faq, index) => (
              <div key={`faq-item-${index}`} className="border-b pb-6">
                <div
                  className="flex items-center justify-between py-6 cursor-pointer w-full" // Élément conteneur cliquable
                  onClick={() => toggleCollapse(index)} // Clique sur toute la ligne
                >
                  <span className="text-xl w-1/2">{faq.question}</span>
                  <img src={more} className={`w-6 transition-transform ${openIndex === index ? 'rotate-90 ' : ''}`} alt="" />
                </div>
                {openIndex === index && (
                  <div className="bg-gray-100 p-4 px-6 rounded-3xl">
                    <span className='font-extralight'>{faq.answer}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#ED1ECC]/10 space-y-6 w-[40%] !z-50 text-center p-12 rounded-3xl">
          <img src={sup} className="w-40 mx-auto" alt="" />
          <div className="space-y-2">
            {' '}
            <span className="rubik uppercase font-semibold text-xl">Vous avez des questions ?</span>
            <p className="text-md">Nous répondrons à vos questions dans un délai de 24 heures</p>
          </div>
          <div className="bg-[#601EED] rounded-full text-white flex items-center justify-between p-4 px-6 pl-8">
            <div className="text-left space-y-1">
              <span className="rubik font-bold text-xl uppercase ">Contactez-nous</span>
              <p className="text-xs">/Du Lundi au Vendredi de 9h à 18h</p>
            </div>
            <div className="p-3 bg-white rounded-full flex items-center justify-center">
              {' '}
              <img src={arobase} alt="" className="w-6 " />
            </div>
          </div>
          <div className="bg-[#25D366] rounded-full text-white flex items-center justify-between p-4 px-6 pl-8">
            <div className="text-left space-y-1">
              <span className="rubik font-bold text-xl uppercase ">Contactez-nous</span>
              <p className="text-xs">/Du Lundi au Vendredi de 9h à 18h</p>
            </div>
            <div className="p-3 bg-white rounded-full flex items-center justify-center">
              {' '}
              <img src={call} alt="" className="w-6 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

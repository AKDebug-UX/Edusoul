import React, { useState } from "react";
import Accordion from "./accordion";
import { faqdata } from "./faqdata";
import Image from "next/image";

const FAQs = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (accordionId) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionId ? null : accordionId
    );
  };

  return (
    <div className='flex flex-col h-[120vh]  lg:h-[120vh]  p-10 lg:p-40  relative md:flex-row gap-3  justify-between lg:justify-start  items-start w-full'>
      <div className=' self-center'>
        <div className='text-binance_green text-2xl md:text-5xl semiBold tracking-wide'>
          FAQ’S
        </div>
        <div className='flex self-center  w-full flex-col items-center mt-3'>
          {faqdata.map((faq) => (
            <div key={faq.id} className=''>
              <Accordion
                accordionId={faq.id}
                answer={faq.answer}
                Businesses={faq.Businesses}
                including={faq.including}
                question={faq.question}
                isOpen={openAccordionId === faq.id}
                toggleAccordion={toggleAccordion}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='lg:h-[500px]   lg:absolute top-40  right-40  flex items-center justify-center'>
        <div className='relative w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] '>
          <Image
            fill
            src='/assets/about/faq.png'
            className='object-cover'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default FAQs;

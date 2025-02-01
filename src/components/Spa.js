import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Spa = () => {
  const treatments = [
    {
      name: 'Signature Massage',
      duration: '90 min',
      price: '$150',
      description: 'A personalized massage experience combining various techniques for ultimate relaxation.'
    },
    {
      name: 'Luxury Facial',
      duration: '60 min',
      price: '$120',
      description: 'Advanced skincare treatment using premium products for radiant, youthful skin.'
    },
    {
      name: 'Body Wrap & Scrub',
      duration: '120 min',
      price: '$180',
      description: 'Full-body rejuvenation with organic ingredients and aromatherapy.'
    }
  ];

  return (
    <section className='min-h-[600px] relative'>
      {/* header */}
      <div className='bg-black/30 h-[180px] absolute w-full z-10 flex items-center justify-center'>
        <h2 className='text-6xl text-white font-primary text-center'>
          Luxury Spa & Wellness
        </h2>
      </div>
      {/* background image */}
      <div className='h-[180px] bg-spa bg-cover bg-center relative'></div>
      
      {/* content */}
      <div className='container mx-auto py-16 px-4'>
        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='max-w-3xl mx-auto text-center mb-16'
        >
          <h3 className='text-4xl font-primary mb-6'>Your Journey to Wellness</h3>
          <p className='text-gray-600 leading-relaxed'>
            Immerse yourself in a world of tranquility at our luxury spa sanctuary. Our expert therapists combine ancient healing traditions with modern techniques to create a truly transformative experience.
          </p>
        </motion.div>

        {/* treatments grid */}
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'
        >
          {treatments.map((treatment, index) => (
            <div key={index} className='bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-xl'>
              <h4 className='text-2xl font-primary mb-4'>{treatment.name}</h4>
              <div className='flex justify-between text-sm mb-4'>
                <span>{treatment.duration}</span>
                <span>{treatment.price}</span>
              </div>
              <p className='text-gray-600'>{treatment.description}</p>
            </div>
          ))}
        </motion.div>

        {/* facilities */}
        <motion.div 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
        >
          <div className='space-y-6'>
            <h3 className='text-3xl font-primary'>Spa Facilities</h3>
            <ul className='space-y-4 text-gray-600'>
              <li>• Thermal Suite with Himalayan Salt Room</li>
              <li>• Hydrotherapy Pool</li>
              <li>• Finnish Sauna & Steam Room</li>
              <li>• Relaxation Lounges</li>
              <li>• Couples Treatment Rooms</li>
              <li>• Luxury Change Facilities</li>
            </ul>
            <div className='bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-xl'>
              <h4 className='font-primary text-xl mb-4'>Spa Hours</h4>
              <p>Daily: 9:00 AM - 9:00 PM</p>
              <p className='mt-2 text-sm text-gray-600'>Last treatment booking: 7:30 PM</p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='h-[200px] bg-spa-1 bg-cover bg-center rounded-lg'></div>
            <div className='h-[200px] bg-spa-2 bg-cover bg-center rounded-lg'></div>
            <div className='h-[200px] bg-spa-3 bg-cover bg-center rounded-lg'></div>
            <div className='h-[200px] bg-spa-4 bg-cover bg-center rounded-lg'></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Spa; 
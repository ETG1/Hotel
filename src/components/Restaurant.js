import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Restaurant = () => {
  return (
    <section className='min-h-[600px] relative'>
      {/* header */}
      <div className='bg-black/30 h-[180px] absolute w-full z-10 flex items-center justify-center'>
        <h2 className='text-6xl text-white font-primary text-center'>
          Fine Dining Experience
        </h2>
      </div>
      {/* background image */}
      <div className='h-[180px] bg-restaurant bg-cover bg-center relative'></div>
      {/* content */}
      <div className='container mx-auto py-16 px-4'>
        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
        >
          {/* left content */}
          <div className='space-y-6'>
            <h3 className='text-4xl font-primary'>Culinary Excellence</h3>
            <p className='text-gray-600 leading-loose'>
              Experience the epitome of fine dining at our award-winning restaurant. Our master chefs craft exquisite dishes using the finest locally-sourced ingredients, creating a symphony of flavors that will delight your senses.
            </p>
            <div className='bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-xl'>
              <h4 className='text-2xl font-primary mb-4'>Signature Dishes</h4>
              <ul className='space-y-4'>
                <li className='flex justify-between'>
                  <span>Pan-Seared Mediterranean Sea Bass</span>
                  <span>$45</span>
                </li>
                <li className='flex justify-between'>
                  <span>Wagyu Beef Tenderloin</span>
                  <span>$65</span>
                </li>
                <li className='flex justify-between'>
                  <span>Truffle Risotto</span>
                  <span>$38</span>
                </li>
              </ul>
            </div>
          </div>
          {/* right content */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='h-[200px] bg-restaurant-1 bg-cover bg-center rounded-lg'></div>
            <div className='h-[200px] bg-restaurant-2 bg-cover bg-center rounded-lg'></div>
            <div className='h-[200px] bg-restaurant-3 bg-cover bg-center rounded-lg'></div>
            <div className='h-[200px] bg-restaurant-4 bg-cover bg-center rounded-lg'></div>
          </div>
        </motion.div>
        {/* dining hours */}
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='mt-16 text-center'
        >
          <h3 className='text-3xl font-primary mb-6'>Dining Hours</h3>
          <div className='flex flex-col md:flex-row justify-center gap-8'>
            <div className='bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-xl'>
              <h4 className='font-semibold mb-2'>Breakfast</h4>
              <p>7:00 AM - 10:30 AM</p>
            </div>
            <div className='bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-xl'>
              <h4 className='font-semibold mb-2'>Lunch</h4>
              <p>12:00 PM - 3:00 PM</p>
            </div>
            <div className='bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-xl'>
              <h4 className='font-semibold mb-2'>Dinner</h4>
              <p>6:00 PM - 11:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Restaurant; 
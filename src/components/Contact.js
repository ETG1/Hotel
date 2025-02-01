import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className='min-h-[600px] relative'>
      {/* header */}
      <div className='bg-black/30 h-[180px] absolute w-full z-10 flex items-center justify-center'>
        <h2 className='text-6xl text-white font-primary text-center'>
          Contact Us
        </h2>
      </div>
      {/* background image */}
      <div className='h-[180px] bg-contact bg-cover bg-center relative'></div>

      {/* content */}
      <div className='container mx-auto py-16 px-4'>
        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='max-w-4xl mx-auto'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            {/* contact info */}
            <div className='space-y-8'>
              <div>
                <h3 className='text-3xl font-primary mb-4'>Get in Touch</h3>
                <p className='text-gray-600 leading-relaxed'>
                  We're here to help make your stay extraordinary. Reach out to us for any inquiries or special requests.
                </p>
              </div>
              
              <div className='space-y-4'>
                <div>
                  <h4 className='font-semibold mb-2'>Address</h4>
                  <p className='text-gray-600'>123 Luxury Avenue, Paradise City, PC 12345</p>
                </div>
                
                <div>
                  <h4 className='font-semibold mb-2'>Phone</h4>
                  <p className='text-gray-600'>+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <h4 className='font-semibold mb-2'>Email</h4>
                  <p className='text-gray-600'>info@luxuryhotel.com</p>
                </div>
              </div>

              <div className='bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-xl'>
                <h4 className='font-primary text-xl mb-4'>Front Desk Hours</h4>
                <p className='text-gray-600'>24/7 Service</p>
              </div>
            </div>

            {/* contact form */}
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block mb-2 font-semibold'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                  required
                />
              </div>

              <div>
                <label htmlFor='email' className='block mb-2 font-semibold'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                  required
                />
              </div>

              <div>
                <label htmlFor='subject' className='block mb-2 font-semibold'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                  required
                />
              </div>

              <div>
                <label htmlFor='message' className='block mb-2 font-semibold'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='4'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                className='bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition duration-300'
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 
import React from 'react';


const Hero = () => {


  return (
    <section className='mb-16 hero flex flex-col flex-wrap md:space-y-0 patterns md:mx-5 bg-center md:bg-right bg-contain md:bg-[55%]'>
      <div className=' md:w-96 lg:w-2/5 flex-grow '></div>
      <div className=' sm:-mb-5 space-y-5 text-center md:text-left md:mb-auto '>
        <h1 className='text-5xl font-bold sm:text-5xl md:text-7xl '>Hello. I’m Cierra</h1>
        <p className='tracking-wide leading-relaxed'>
          Full Stack Developer &amp; Passionate Problem Solver
        </p>
      </div>
    </section>
  );
};

export default Hero;

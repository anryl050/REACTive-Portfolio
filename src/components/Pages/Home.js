import React from 'react';
import Lottie from 'lottie-react';
import animationData from './lotties/aLogo.json';


export default function Home() {

  const lottieStyles = {
    height: '90%',
    width: '40%',
    margin: '0',
  };

  return (
    <div style={{
      height: "screen",
      backgroundSize: 'cover',
      backgroundImage: `url(${require('./images/portrait.jpg')})`,
      backgroundAttachment: 'fixed',  // Fix the background image
      backgroundPosition: 'center',   // Center the background image
    }}>
     <section className="place-content-center h-screen">
        <div className='flex flex-wrap justify-start py-40 gap-5'>
          <div className="flex-col justify-start w-50 md:w-16 sm:w-16 mx-10 px-2 py-5 ">
            <p className="flex justify-center font-bold font-sans xl:text-5xl text-slate-800 md:text-3xl sm:text-lg ">ANASTASIYA RYLOVA</p>
            <p className="flex justify-center font-bold font-sans xl:text-4xl text-slate-800 md:text-2xl sm:text-md ">FULL STACK WEB DEVELOPER</p>
            <div className="flex justify-center py-1 gap-10"> {/* Add 'justify-center' class to center the Lottie file */}
              <Lottie
                animationData={animationData}
                style={lottieStyles}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

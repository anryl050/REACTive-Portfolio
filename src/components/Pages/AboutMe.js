import React from 'react';
import Lottie from 'lottie-react';
import animationData from './lotties/';

const styles = {
    p: {
      color: '#F3EEE8',
      margin:"30px"
    }
  };

export default function AboutMe() {
    const lottieStyles = {
        height: '90%',
        width: '40%',
        margin: '0',
      };

    return (
        <section className="place-content-center h-screen py-20">
            <h1 className="flex flex-wrap justify-center pb-6">About Me</h1>

            <div className="  mx-auto bg-slate-800 rounded-xl shadow-md overflow-hidden sm:max-w-md md:max-w-2xl lg:max-w-4xl xl: max-w-6xl md:m-5 " >
                <p className="" style={styles.p}> My journey began in a small southwestern town in the former Soviet Union. At a young age, my family made the decision to immigrate to the United States, and we eventually settled in Wichita, KS.</p>

                <p className="" style={styles.p}> After completing high school, I relocated to Dallas, TX with the aim of pursuing a career in the medical industry. During my time in Dallas, I developed a passion for technology and made a decision to obtain the Bachelor’s Degree in Information Technology, seeking to enhance my expertise and broaden my personal and professional horizons. </p>

                <p className="" style={styles.p}> In 2020, amidst the escalating Covid-19 pandemic, my employer presented me with an opportunity that led me to Seattle, where I currently reside and work. </p>

                <p className="" style={styles.p}> Outside of my professional pursuits, I find great joy in exploring different parts of the world, immersing myself in diverse cultures as a passionate traveler. Additionally, I indulge in my love for snowboarding and occasionally challenge myself with skydiving.</p>

                <p className="" style={styles.p}>Motivated by the desire to expand my knowledge in Tech Industry and advance my career prospects, I made the decision to join the Full Stack Application Development Bootcamp. This immersive experience has been both exhilarating, demanding and rewarding. I am very excited to see where this new path will take me. </p>

                <Lottie
                animationData={animationData}
                style={lottieStyles}
              />

            </div>

        </section>
    );
}

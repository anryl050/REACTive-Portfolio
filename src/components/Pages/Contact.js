import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/contactMe.json';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const lottieStyles = {
    height: '90%',
    width: '40%',
  };

  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [valMessage, setValMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'personName') {
      setPersonName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setUserMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!personName) {
      setValMessage('Please enter your name before submitting a message');
      return;
    }

    if (!validateEmail(email)) {
      setValMessage('Please enter a valid email address');
      return;
    }

    if (!userMessage) {
      setValMessage(`Please enter a message before submitting the request.`);
      return;
    }

    setPersonName('');
    setEmail('');
    setUserMessage('');
  };

  return (
    <section className="place-content-center h-screen py-20">
      <h1 className="flex flex-wrap justify-center">Contact Me</h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 mx-auto bg-slate-800 rounded-xl shadow-md overflow-hidden sm:max-w-md md:max-w-2xl lg:max-w-6xl md:m-5 m-5">
        <form className="form bg-white m-2 p-2 rounded-lg text-slate-800">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>

            <input
              type="text"
              name="personName"
              value={personName}
              onChange={handleInputChange}
              placeholder="Enter your name here"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          </div>

          <div className="mb-6">
            <label className="text-slate-800  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>

            <input
              type="email"
              value={email}
              name="email"
              onChange={handleInputChange}
              placeholder="example@email.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Your Message</label>
            <textarea
              type="text"
              name="userMessage"
              value={userMessage}
              onChange={handleInputChange}
              placeholder="Enter your message here"
              className="block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500" />

          </div>
          <div className="mb-6">
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="text-white bg-slate-800  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Submit
            </button>
          </div>


          {valMessage && (
          <div>
          <p className="error-text text-red">{valMessage}</p>
        </div>
              )}


        </form>


        <div className="flex flex-wrap justify-center">
          <Lottie
            animationData={animationData}
            style={lottieStyles}
          />
        </div>

      </div>
    </section>
  );
}

export default Contact;
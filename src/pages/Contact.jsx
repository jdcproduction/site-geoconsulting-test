import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-12 bg-white min-h-screen'>
      <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center'>
        Contactez-nous
      </h1>
      <p className='text-gray-600 text-center mb-8 max-w-md'>
        Vous avez une question ou souhaitez travailler avec nous ? Remplissez le
        formulaire ci-dessous et nous vous répondrons rapidement.
      </p>

      <form className='w-full max-w-lg border-gray-100 border shadow-xl rounded-lg p-6'>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-gray-700 font-medium mb-2'
          >
            Nom
          </label>
          <input
            type='text'
            id='name'
            placeholder='Votre nom'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bluegeo'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 font-medium mb-2'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Votre email'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bluegeo'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='message'
            className='block text-gray-700 font-medium mb-2'
          >
            Message
          </label>
          <textarea
            id='message'
            rows='5'
            placeholder='Votre message'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bluegeo resize-none'
          ></textarea>
        </div>

        <button
          type='submit'
          className='w-full bg-bluegeo  hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-colors duration-300'
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;

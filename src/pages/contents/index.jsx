import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')


  const apiUrl = 'https://marimovit1.pythonanywhere.com/orders/';

  const data = {
    full_name: name,
    phone_number: phone
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTPs error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        setName('')
        setPhone('')
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  return (
    <>
      <section>
        <div className="lg:container lg:mx-auto lg:px-4">
          <img className='w-full h-full object-contain' src="/455x135.png" alt="" />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-3">
          <div className='md:h-[420px] mt-10 bg-white rounded-2xl flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden'>
            <div className='w-full h-full md:w-[40%] flex flex-col bg-[#EAA439]'>
              <div className='p-6'>
                <h2 className='text-white text-2xl'>Biz bilan bog'lanish</h2>
              </div>
              <div className='mt-4 pl-6'>
                <h3 className='text-white'>Manzil:</h3>
                <p className='text-white'>Город Ургенч, Хорезмская область, Узбекистан.</p>
              </div>
              <div className='mt-4 pl-6'>
                <h3 className='text-white'>Telefon:</h3>
                <p className='text-white'> +998889370010 </p>
              </div>
              <div className='mt-4 pl-6'>
                <h3 className='text-white'>Ijtimoiy tarmoqlarda:</h3>
                <div>
                  <div className='flex mt-2 gap-4 mb-10 md:mb-0'>
                    <Link to={'https://www.instagram.com/aqem_group/'} className='bg-gray-100 p-2 rounded-lg'>
                      <svg width="22" height="24" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M110.116 31.0217C110.116 26.599 106.531 23.028 102.125 23.028C97.7189 23.028 94.1313 26.599 94.1313 31.0217C94.1313 35.4281 97.7189 38.9991 102.125 38.9991C106.531 38.9991 110.116 35.4281 110.116 31.0217Z" fill="url(#paint0_linear_301_18)" />
                        <path d="M120.763 93.42C120.467 99.9079 119.382 103.433 118.481 105.774C117.271 108.878 115.828 111.098 113.486 113.426C111.171 115.754 108.952 117.194 105.848 118.391C103.506 119.305 99.9681 120.394 93.4805 120.703C86.4666 121.012 84.3883 121.078 66.602 121.078C48.8322 121.078 46.7374 121.012 39.7235 120.703C33.2359 120.394 29.7142 119.305 27.3727 118.391C24.2522 117.194 22.0492 115.754 19.7211 113.426C17.3764 111.098 15.933 108.878 14.7393 105.774C13.8382 103.433 12.7368 99.9079 12.4571 93.42C12.1153 86.4061 12.0526 84.2951 12.0526 66.545C12.0526 48.7587 12.1153 46.6639 12.4571 39.65C12.7368 33.1624 13.8382 29.6406 14.7393 27.2795C15.933 24.1787 17.3764 21.9722 19.7211 19.6441C22.0492 17.3194 24.2522 15.8757 27.3727 14.6658C29.7142 13.7484 33.2359 12.6763 39.7235 12.3673C46.7374 12.058 48.8322 11.9791 66.602 11.9791C84.3883 11.9791 86.4666 12.058 93.4805 12.3673C99.9681 12.6763 103.506 13.7484 105.848 14.6658C108.952 15.8757 111.171 17.3194 113.486 19.6441C115.828 21.9722 117.271 24.1787 118.481 27.2795C119.382 29.6406 120.467 33.1624 120.763 39.65C121.089 46.6639 121.168 48.7587 121.168 66.545C121.168 84.2951 121.089 86.4061 120.763 93.42ZM132.743 39.1042C132.417 32.0146 131.299 27.171 129.638 22.9523C127.948 18.5755 125.683 14.8663 121.973 11.1571C118.281 7.46446 114.572 5.19875 110.195 3.48894C105.96 1.84471 101.132 0.713455 94.0393 0.404434C86.9465 0.0623779 84.681 -3.05176e-05 66.602 -3.05176e-05C48.5395 -3.05176e-05 46.2575 0.0623779 39.1647 0.404434C32.0881 0.713455 27.2642 1.84471 23.0093 3.48894C18.649 5.19875 14.9398 7.46446 11.2472 11.1571C7.538 14.8663 5.27229 18.5755 3.56567 22.9523C1.92145 27.171 0.803515 32.0146 0.461452 39.1042C0.152436 46.197 0.0735168 48.466 0.0735168 66.545C0.0735168 84.6075 0.152436 86.873 0.461452 93.9658C0.803515 101.042 1.92145 105.883 3.56567 110.121C5.27229 114.481 7.538 118.207 11.2472 121.9C14.9398 125.592 18.649 127.875 23.0093 129.581C27.2642 131.225 32.0881 132.343 39.1647 132.669C46.2575 132.995 48.5395 133.073 66.602 133.073C84.681 133.073 86.9465 132.995 94.0393 132.669C101.132 132.343 105.96 131.225 110.195 129.581C114.572 127.875 118.281 125.592 121.973 121.9C125.683 118.207 127.948 114.481 129.638 110.121C131.299 105.883 132.417 101.042 132.743 93.9658C133.068 86.873 133.147 84.6075 133.147 66.545C133.147 48.466 133.068 46.197 132.743 39.1042Z" fill="url(#paint1_linear_301_18)" />
                        <path d="M66.602 88.7046C54.3597 88.7046 44.4258 78.787 44.4258 66.5447C44.4258 54.2827 54.3597 44.3523 66.602 44.3523C78.8477 44.3523 88.7947 54.2827 88.7947 66.5447C88.7947 78.787 78.8477 88.7046 66.602 88.7046ZM66.602 32.3566C47.7305 32.3566 32.4467 47.6733 32.4467 66.5447C32.4467 85.3999 47.7305 100.7 66.602 100.7C85.4734 100.7 100.774 85.3999 100.774 66.5447C100.774 47.6733 85.4734 32.3566 66.602 32.3566Z" fill="url(#paint2_linear_301_18)" />
                        <defs>
                          <linearGradient id="paint0_linear_301_18" x1="1.27375" y1="131.698" x2="122.063" y2="10.9086" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD521" />
                            <stop offset="0.05" stopColor="#FFD521" />
                            <stop offset="0.501119" stopColor="#F50000" />
                            <stop offset="0.95" stopColor="#B900B4" />
                            <stop offset="0.950079" stopColor="#B900B4" />
                            <stop offset="1" stopColor="#B900B4" />
                          </linearGradient>
                          <linearGradient id="paint1_linear_301_18" x1="1.27382" y1="131.863" x2="122.163" y2="10.9746" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD521" />
                            <stop offset="0.05" stopColor="#FFD521" />
                            <stop offset="0.501119" stopColor="#F50000" />
                            <stop offset="0.95" stopColor="#B900B4" />
                            <stop offset="0.950079" stopColor="#B900B4" />
                            <stop offset="1" stopColor="#B900B4" />
                          </linearGradient>
                          <linearGradient id="paint2_linear_301_18" x1="1.30515" y1="131.867" x2="122.165" y2="11.0069" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD521" />
                            <stop offset="0.05" stopColor="#FFD521" />
                            <stop offset="0.501119" stopColor="#F50000" />
                            <stop offset="0.95" stopColor="#B900B4" />
                            <stop offset="0.950079" stopColor="#B900B4" />
                            <stop offset="1" stopColor="#B900B4" />
                          </linearGradient>
                        </defs>
                      </svg>

                    </Link>
                    <Link to={'https://t.me/AQEM_GROUP'} className='bg-gray-100 p-2 rounded-lg'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" role="img" color="#000000">
                        <path d="M22 3L18 21L11 13.9584L15.2406 9.7541L9.42945 13.773L11.9434 16.1574L8.49999 20L7.49999 13.9584L2.00082 11L22 3Z" fill="#0088cc"></path>
                      </svg>
                    </Link>
                    <Link to={'https://www.youtube.com/@AqemGroup'} className='bg-gray-100 p-2 rounded-lg'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" role="img" color="#000000">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 3.25C9.52631 3.25 7.17304 3.40962 5.04751 3.69767C2.78476 4.0043 1.25 5.99235 1.25 8.19868V15.8013C1.25 18.0076 2.78476 19.9957 5.04751 20.3023C7.17304 20.5904 9.52631 20.75 12 20.75C14.4737 20.75 16.827 20.5904 18.9525 20.3023C21.2152 19.9957 22.75 18.0076 22.75 15.8013V8.19869C22.75 5.99235 21.2152 4.0043 18.9525 3.69767C16.827 3.40962 14.4737 3.25 12 3.25ZM10.3859 8.35688C10.1542 8.21786 9.86561 8.21422 9.63048 8.34735C9.39534 8.48048 9.25 8.7298 9.25 9V15C9.25 15.2702 9.39534 15.5195 9.63048 15.6526C9.86561 15.7858 10.1542 15.7821 10.3859 15.6431L15.3859 12.6431C15.6118 12.5076 15.75 12.2634 15.75 12C15.75 11.7366 15.6118 11.4924 15.3859 11.3569L10.3859 8.35688Z" fill="#FF0000"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-full p-20 md:w-[60%]'>
              <form onSubmit={handleSubmit} className='w-full h-full flex flex-col items-center justify-center gap-4'>
                <div className='w-[280px] flex flex-col gap-4'>
                  <div className='w-full flex flex-col gap-1'>
                    <label className='text-lg' htmlFor="name">Ism</label>
                    <input className='w-full h-[36px] p-2 border-[1px] border-[solid] border-[#999] rounded-md focus:border-[#EAA439] outline-none' placeholder='Ism Familiy' value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' required />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label className='text-lg' htmlFor="phone">Telefon</label>
                    <input className='w-full h-[36px] p-2 border-[1px] border-[solid] border-[#999] rounded-md focus:border-[#EAA439] outline-none' placeholder='Telefon raqam' value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" id='phone' required />
                  </div>
                  <button className='w-full h-10 text-lg text-[#fff] rounded-md bg-[#EAA439]'> Yuborish </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
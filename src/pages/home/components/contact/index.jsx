import React, { useState } from 'react'

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
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  console.log(name);
  return (
    <section>
      <div className="container mx-auto px-3">
        <div className='h-[360px] md:h-[420px] mt-10 bg-white rounded-2xl flex flex-col items-center justify-center'>
          <div className='mb-4'>
            <h2 className='text-2xl'>Ma'lumot olish!</h2>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='w-[260px] flex flex-col gap-1'>
              <label className='text-lg' htmlFor="name">Ism</label>
              <input className='w-full h-[36px] p-2 border-[1px] border-[solid] border-[#999] rounded-md focus:border-[#EAA439] outline-none' placeholder='Ism Familiy' value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-lg' htmlFor="phone">Telefon</label>
              <input className='w-full h-[36px] p-2 border-[1px] border-[solid] border-[#999] rounded-md focus:border-[#EAA439] outline-none' placeholder='Telefon raqam' value={phone} onChange={(e) => setPhone(e.target.value)} type="text" id='phone' />
            </div>
            <button className='w-full h-10 text-lg text-[#fff] rounded-md bg-[#EAA439]'> Yuborish </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
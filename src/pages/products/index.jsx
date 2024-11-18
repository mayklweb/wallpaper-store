import React from 'react'

function Products() {

  const products = [{
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "/K001.jpg"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "/K002.jpg"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "/K003.jpg"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "/K004.jpg"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "/K005.jpg"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "/K006.jpg"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "/K007.jpg"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "/K008.jpg"
  },
  ]

  return (
    <section>
      <div className='container mx-auto px-3'>
        <div className='mt-5 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
              products.map((item, i) => (
                <div key={i} className={`w-full bg-[#fff] p-2 md:p-3`}>
                <div className={`w-full `}>
                  <img className='w-full h-full' src={item.image} alt="" />
                </div>
                
              </div>
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default Products
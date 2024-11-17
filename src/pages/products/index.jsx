import React from 'react'

function Products() {

  const products = [{
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
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
                <div className={`mt-1 pb-[10%] flex justify-between `}>
                  <h3>{item.title}</h3>
                  <p> {item.price.toLocaleString()} sum</p>
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
import React, { useEffect, useRef, useState } from 'react'

function Products() {

  const [height, setHeight] = useState(window.innerHeight);

  const heightRef = useRef(0)

  console.log(heightRef.current = height);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  }
    ,]


  return (
    // Products start
    <section>
      <div className='container mx-auto px-3'>
        <div className='w-full'>
          <div className='flex items-center gap-4'>
            <button className='px-8 py-2 text-white bg-[#FFD700] rounded-md'>All</button>
            <button className='px-8 py-2 text-white bg-[#FFD700] rounded-md'>All</button>
            <button className='px-8 py-2 text-white bg-[#FFD700] rounded-md'>All</button>
          </div>
          <div className="w-full mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">

            {
              products.map((item, i) => (
                <div key={i} className={`w-full bg-[#fff] p-2 md:p-3`}>
                  <div className={`w-full `}>
                    <img className='w-full h-full' src={item.image} alt="" />
                  </div>
                  <div className={`mt-1 pb-[10%] flex justify-between h-[${heightRef.current / 2}px]`}>
                    <h3>{item.title}</h3>
                    <p> {item.price.toLocaleString()} sum</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
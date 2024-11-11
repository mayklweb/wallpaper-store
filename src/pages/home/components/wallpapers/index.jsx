import React from 'react'

function Products() {
  return (
    // Products start
    <section>
      <div className='container mx-auto p-4'>
        <div className='w-full'>
          <div className='flex items-center gap-4'>
            <button className='px-8 py-2 text-white bg-[#FFD700] rounded-md'>All</button>
            <button className='px-8 py-2 text-white bg-[#FFD700] rounded-md'>All</button>
            <button className='px-8 py-2 text-white bg-[#FFD700] rounded-md'>All</button>
          </div>
          <div className="w-full mt-4 grid grid-cols-4 gap-4">


            <div className="w-full h-[420px] bg-[#fff] p-3">
              <div className='w-full h-[280px]'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU" alt="" />
              </div>
              <div className='mt-2 flex'>
                <h1>Lorem ipsum dolor sit. </h1>

                <p> m/kv 23 990 sum</p>
              </div>
            </div>


            <div className="w-full h-[420px] bg-[#fff] p-3">
              <div className='w-full h-[280px]'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU" alt="" />
              </div>
              <div className='mt-2 flex'>
                <h1>Lorem ipsum dolor sit. </h1>

                <p> m/kv 23 990 sum</p>
              </div>
            </div>
            <div className="w-full h-[420px] bg-[#fff] p-3">
              <div className='w-full h-[280px]'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU" alt="" />
              </div>
              <div className='mt-2 flex'>
                <h1>Lorem ipsum dolor sit. </h1>

                <p> m/kv 23 990 sum</p>
              </div>
            </div>
            <div className="w-full h-[420px] bg-[#fff] p-3">
              <div className='w-full h-[280px]'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU" alt="" />
              </div>
              <div className='mt-2 flex'>
                <h1>Lorem ipsum dolor sit. </h1>

                <p> m/kv 23 990 sum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
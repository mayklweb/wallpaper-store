import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filterId, setFilterId] = useState(null);

  async function getData() {
    try {
      const response = await fetch('https://marimovit1.pythonanywhere.com/products/');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error('There was an error:', error);
    }
  }

  async function getCategory() {
    try {
      const response = await fetch('https://marimovit1.pythonanywhere.com/categories/');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
      console.log(data);

    } catch (error) {
      console.error('There was an error:', error);
    }
  }

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  const filtredProducts = filterId
    ? products.filter((item) => item.category === filterId.id)
    : products;

  return (
    <section>
      <div className='container mx-auto px-3'>
        <div className='flex items-start'>
          <div className='hidden md:flex mt-5 flex-wrap gap-2'>
            <button 
              onClick={() => setFilterId(null)} 
              className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'
            >
              All
            </button>
            {categories.map((item) => (
              <button 
                key={item.id} 
                onClick={() => setFilterId(item)} 
                className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className='w-full mt-2 md:mt-4 xl:mt-6'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl md:text-2xl font-normal'>
              {filterId?.name || 'Hammasi'}: {filtredProducts.length}
            </h3>
          </div>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {filtredProducts.map((item, i) => (
              <div key={i} className={`w-full bg-[#fff] p-2 md:p-3`}>
                <div className={`w-full`}>
                  <img className='w-full h-full' src={item.image} alt="" />
                </div>
                <div className={`mt-1 pb-[10%] flex justify-between`}>
                  <h3>{}</h3>
                  <p>{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filterId, setFilterId] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState([]); // Ko'rinayotgan mahsulotlar
  const [currentIndex, setCurrentIndex] = useState(0); // Hozirgi ko'rinayotgan mahsulotlar indeksi
  const limit = 8; // Har safar necha mahsulot ko'rinadi



  const fetchProducts = async () => {
    try {
      const response = await fetch("https://admin.aqem.uz/api/products/"); // Mahsulotlar API
      if (!response.ok) {
        throw new Error("Xatolik yuz berdi");
      }
      const data = await response.json();
      setProducts(data); // Barcha mahsulotlarni saqlash
      setVisibleProducts(data.slice(0, limit)); // Boshlang'ich mahsulotlarni ko'rsatish
    } catch (error) {
      console.error(error);
    }
  };

  console.log(products);


  // Tugma bosilganda ko'rinadigan mahsulotlarni kengaytirish
  const loadMore = () => {
    const nextIndex = currentIndex + limit;
    setVisibleProducts((prev) => [
      ...prev,
      ...products.slice(currentIndex, nextIndex),
    ]);
    setCurrentIndex(nextIndex);
  };

  async function getCategory() {
    try {
      const response = await fetch('https://admin.aqem.uz/api/categories/');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('There was an error:', error);
    }
  }

  useEffect(() => {
    fetchProducts()
    getCategory()
  }, []);

  useEffect(() => {
    fetchProducts()
    getCategory()
  }, []);

  const filtredProducts = filterId
    ? visibleProducts.filter((item) => item.category === filterId.id)
    : visibleProducts;

  return (
    <section>
      <div className='container mx-auto px-3'>
        <div className='flex items-start'>
          <div className='overflow-x-scroll  lg:overflow-x-hidden flex items-start mt-5 pb-2 gap-2 '>
            <button
              onClick={() => setFilterId(null)}
              className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'
            >
              Hammasi
            </button>
            {categories.map((item) => (
              <button
                key={item.id}
                onClick={() => setFilterId(item)}
                className='text-sm text-nowrap md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'
              >
                {item.name}
              </button>
            ))}
          </div>

        </div>

        <div className='w-full mt-2 md:mt-4 xl:mt-6'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl md:text-2xl font-normal'>
              {filterId?.name || 'Barcha maxsulotlar'}: {filtredProducts.length}
            </h3>
          </div>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {filtredProducts.map((item, i) => (
              <div key={i} className={`w-full bg-[#fff] p-2 md:p-3`}>
                <div className={`w-full`}>
                  <img className='w-full h-full' src={item.image} alt="" />
                </div>
                <div className={`mt-1 pb-[6%] flex justify-between`}>
                  {/* <p>{categories.filter(category => category.id !== item.category)}</p> */}
                  <p className='text-base font-semibold'>ID: {item.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex items-center justify-center'>
            {currentIndex < products.length && (
              <button onClick={loadMore} className='mt-3 p-1 md:p-3 text-base md:text-lg text-white uppercase bg-[#EAA439] w-[80%] rounded-xl'>
                Yana yuklash
              </button>
            )}
          </div>
        </div>
        <div className={`fixed bottom-0 left-0 w-full h-full z-10 bg-[#00000080] ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200 ease-in-out`}>
          <div className={`absolute bottom-0 left-0 w-full h-[60%] bg-white rounded-t-xl p-2 ${open ? 'translate-y-0' : 'translate-y-full'} transition-all duration-200 ease-in-out`}>
            <div className='w-full flex justify-end'>
              <button onClick={() => setOpen(false)} className='bg-gray-100 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className='mt-1 w-full h-full'>
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
        </div>
      </div>
    </section>
  );
}

export default Products;

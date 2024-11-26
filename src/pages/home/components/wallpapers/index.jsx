import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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


  const filtredProducts = filterId
    ? visibleProducts.filter((item) => item.category === filterId.id)
    : visibleProducts;

  return (
    <section>
      <div className='container mx-auto px-3'>
        {
          
        }
        <div className='w-full mt-2 md:mt-4 xl:mt-6'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl md:text-2xl font-normal'>
              {filterId?.name || 'Maxsulatlar'}
            </h3>

            <Link to={'/products'} className='text-[#fff] px-4 py-1 rounded-md bg-[#EAA439] flex items-center justify-center'>Barchasin ko'rish</Link>
          </div>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {filtredProducts.map((item, i) => (
              <div key={i} className={`w-full bg-[#fff] p-2 md:p-3`}>
                <div className={`w-full`}>
                  <img className='w-full h-full' src={item.image} alt="" />
                </div>
                <div className={`mt-1 pb-[6%] flex justify-between`}>
                  <p></p>
                  <p className='text-base font-semibold'>ID: {item.name}</p>
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

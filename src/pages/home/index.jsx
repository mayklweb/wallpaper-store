import React, { useEffect, useState } from "react";
import { About, Company, Contact, Employees, Hero, Products } from "./components";
import { Loading } from "../../components";

function HomePage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://admin.aqem.uz/api/products/");
      if (!response.ok) {
        throw new Error("Xatolik yuz berdi");
      }
      const data = await response.json();
      setProducts(data);
      localStorage.setItem("products", JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <About />
      {products ? <Products products={products} /> : <Loading />}
      <Company/>
      <Employees />
      <Contact />
    </>
  );
}

export default HomePage;

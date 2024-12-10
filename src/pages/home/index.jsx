import React, { useEffect, useState } from "react";
import {
  About,
  Company,
  Contact,
  Employees,
  Hero,
  Mission,
  Products,
} from "./components";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [videos, setVideos] = useState([]);

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

  const fetchVideos = async () => {
    try {
      const response = await fetch("https://admin.aqem.uz/api/video/");
      if (!response.ok) {
        throw new Error("Xatolik yuz berdi");
      }
      const data = await response.json();
      setVideos(data);
      localStorage.setItem("videos", JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchVideos();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Products products={products} />
      <Mission/>
      <Company />
      <Employees videos={videos} />
      <Contact />
    </>
  );
}

export default HomePage;

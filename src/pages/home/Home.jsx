import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../../components'
import Product from '../../components/product/Product'
// import useFetchCollection from '../../customHooks/useFetchCollection';
// import { selectProducts, Store_Products } from '../../redux/slice/productSlice';
// import Slider from '../../components/slider/Slider'

const Home = () => {

  const url =window.location.href;


  useEffect(() => {
    //after-back to products link clicked
    const scrollToProducts = () => {
      if(url.includes("#products")){
        window.scrollTo({
          top:700,
          behavior:'smooth',
        });
        return;
      }
    };
    scrollToProducts();
  }, [url])
  
  return (
    <>
      <Slider/>
      <Product />
     
      </>
  )
}

export default Home
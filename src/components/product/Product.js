import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useFetchCollection from '../../customHooks/useFetchCollection';
import { Get_Price_Range, selectProducts, Store_Products } from '../../redux/slice/productSlice';
import styles from "./Product.module.scss";
import ProductFilter from './productFilter/ProductFilter';
import ProductList from './productList/ProductList';
const Product = () => {
    const { data, isLoading } = useFetchCollection("products");
    const [showFilter, setShowFilter] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector(selectProducts)
    // console.log(products);
    useEffect(() => {
      dispatch(
        Store_Products({
          products: data,
        })
      );
      dispatch(
        Get_Price_Range({
          products: data,
        })
      );
    }, [dispatch, data]);
    
    const toggleFilter = () => {
      setShowFilter(!showFilter);
    };
  return (
    <section>
        <div className={`container ${styles.product}`}>

       <aside className={
            showFilter ? `${styles.filter} ${styles.show}` : `${styles.filter}`
          }>
             {isLoading ? null : <ProductFilter />}
        {/* <ProductFilter /> */}
       </aside>
       <div className={styles.content}>
        <ProductList products={products} />
       </div>
        </div>
    </section>
  )
}

export default Product
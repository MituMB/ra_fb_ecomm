import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Filter_By_Brand, Filter_By_Category, Filter_By_Price } from '../../../redux/slice/filterSlice';
import { selectMaxPrice, selectMinPrice, selectProducts } from '../../../redux/slice/productSlice';
import styles from "./ProductFilter.module.scss";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPrice] = useState(3000);

  const products = useSelector(selectProducts);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  console.log(products);
  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const allBrands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];
  
  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(Filter_By_Category({ products, category: cat }));
  };
  useEffect(() => {
    // setBrand(brand)
    dispatch(Filter_By_Brand({ products, brand:brand }));
  }, [dispatch, products, brand]);

  useEffect(() => {
    dispatch(Filter_By_Price({ products, price }));
  }, [dispatch, products, price]);

  const clearFilters = () => {
    setCategory("All");
    setBrand("All");
    setPrice(maxPrice);
  };
  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category}>
        {
          allCategories.map((cat, index) => (

            <button   key={index}
            type="button"
            className={`${category}` === cat ? `${styles.active}` : null} onClick={() => filterProducts(cat)}> &#8250; {cat}</button>
          ))
        }
      </div>
      <h4>Brand</h4>
      <div className={styles.brand}>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>

            {allBrands.map((brand, index) => {
            return (
              <option key={index} value={brand}>
                {brand}
              </option>
            );
          })}
        </select>
      </div>
      <h4>Price</h4>
      <p>{`$${price}`}</p>
      <div className={styles.price}>
        <input type="range" value={price} min={minPrice} max={maxPrice} onChange={(e) => setPrice(e.target.value)}/>
      </div>
      <br />
      <button className="--btn --btn-danger" onClick={clearFilters}>Clear Filter</button>
    </div>
  )
}

export default ProductFilter
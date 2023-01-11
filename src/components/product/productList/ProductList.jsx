import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./ProductList.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import Search from "../../search/Search";
import ProductItem from "../productItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {
  Filter_By_Search,
  Filter_By_Sort,
  selectFilterProducts,
} from "../../../redux/slice/filterSlice";
import Pagination from "../../pagination/Pagination";

const ProductList = ({ products }) => {
  // console.log(products.length);

  //===filter state
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const filteredProducts = useSelector(selectFilterProducts);
  // console.log(filteredProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Filter_By_Sort({ products, sort }));
  }, [dispatch, products, sort]);

  useEffect(() => {
    dispatch(Filter_By_Search({ products, search }));
  }, [dispatch, products, search]);

  // console.log(products);

  //===pagination state
  const [currentPage, setcurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(3);

  //===Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <div className={styles["product-list"]}>
      <div className={styles.top}>
        <div className={styles.icons}>
          <BsFillGridFill
            size={22}
            color="orangered"
            onClick={() => setGrid(true)}
          />

          <FaListAlt size={24} color="#0066d4" onClick={() => setGrid(false)} />

          <p>
            {/* <b>{filteredProducts.length}</b> Products found. */}
            <b>{filteredProducts.length}</b> Products found
          </p>
        </div>
        {/* Search Icon */}
        <div>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        {/* Sort Products */}
        <div className={styles.sort}>
          <label>Sort by:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>
      </div>

      <div className={grid ? `${styles.grid}` : `${styles.list}`}>
        {products.lenght === 0 ? (
          <p>No product found.</p>
        ) : (
          <>
            {currentProducts.map((product) => (
              <div key={product.id}>
                <ProductItem {...product} grid={grid} product={product} />
              </div>
            ))}
          </>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
      />
    </div>
  );
};

export default ProductList;

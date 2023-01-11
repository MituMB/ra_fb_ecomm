import React from 'react'
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
import Card from "../../card/Card";
import { useDispatch } from 'react-redux';
import { Add_To_Cart } from '../../../redux/slice/cartSlice';

const ProductItem = ({ product, grid, id, name, price, desc, imageURL }) => {

  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(Add_To_Cart(product))
  }


  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  return (
    <Card cardClass={grid ? `${styles.grid}` : `${styles.list}`}>
      <Link to={`/productDetails/${id}`}>
        <div className={styles.img}>
          <img src={imageURL} alt={name} />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{`$${price}`}</p>
          {/* <h4>{shortenText(name, 18)}</h4> */}
          <h4>{name}</h4>
        </div>
        {!grid && <p className={styles.desc}>{shortenText(desc, 200)}</p>}
        <button
          className="--btn --btn-danger"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </Card>
  )
}

export default ProductItem
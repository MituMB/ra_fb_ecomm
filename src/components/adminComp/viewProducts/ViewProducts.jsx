import { async } from '@firebase/util';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db, storage } from '../../../firebase/config';
import styles from  "./ViewProducts.module.scss";
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, Store_Products } from '../../../redux/slice/productSlice';
import useFetchCollection from '../../../customHooks/useFetchCollection';
import Loader from '../../loader/Loader';
import { Filter_By_Search, selectFilterProducts } from '../../../redux/slice/filterSlice';
import Search from '../../search/Search';


const ViewProducts = () => {
  // const [products, setproducts] = useState([])
  // const [isLoading, setisLoading] = useState(false)
  const [search, setSearch] = useState("");
  const { data, isLoading } = useFetchCollection("products");
const dispatch = useDispatch();
const products = useSelector(selectProducts)
const filteredProducts = useSelector(selectFilterProducts);
useEffect(() => {
  dispatch(
    Store_Products({
      products: data,
    })
  );
}, [dispatch, data]);

useEffect(() => {
  dispatch(Filter_By_Search({ products, search }));
}, [dispatch, products, search]);

// useEffect(() => {
  
//   getProducts()

// }, [])


  // const getProducts = () => { 

  //   setisLoading(true)
  //   try {
  //     const productsRef = collection(db, "products");
  //     const q = query(productsRef, orderBy("createdAt"));
  //      onSnapshot(q, (snapshot) => {
  //       const allProducts = snapshot.docs.map((doc) =>(
  //         {
  //           id:doc.id,
  //           ...doc.data()
  //         }
  //       ) )
  //       setproducts(allProducts)
  //       setisLoading(false)
  //       // console.log(allProducts);
  //       dispatch(
  //         Store_Products({
  //           products: allProducts
  //         })
  //         );
  //     });

  //   } catch (error) {
  //     setisLoading(false)
  //     toast.error(error.message)
  //   }
  //  }

   //confirmDelete
const confirmDelete = (id, imageURL) => { 
  Notiflix.Confirm.show(
    'Delete Product',
    'Confirm Delete?',
    'Delete',
    'Cancel',
    function okCb() {
      deleteProduct(id, imageURL)
    },
    function cancelCb() {
      alert('Delete canceled');
    },
    {
      width: "320px",
      borderRadius: "3px",
      titleColor: "orangered",
      okButtonBackground: "orangered",
      cssAnimationStyle: "zoom",
    },
  );
 }

   // delete product
   const deleteProduct = async(id, imageURL) => {

    try {
      
      await deleteDoc(doc(db, "products", id));

      const storageRef = ref(storage, imageURL);
      await deleteObject(storageRef);
      // Notiflix.Report.success(
      //   'Product deleted successfully.',
        
      //   );
      toast.success("Product deleted successfully.");
    } catch (error) {
      toast.error(error.message);
    }
   }


  return (

<>

{
      isLoading && <Loader />
    }
    <div className={styles.table}>
      <h2>All Products</h2>
      <div className={styles.search}>
          <p>
            <b>{filteredProducts.length}</b> products found
          </p>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      {
        filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          <table>
        <thead>
        <tr>
            <th>s/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
              filteredProducts.map((product, index) => {
                const{id, name, price, imageURL, category} = product;
                return(
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={imageURL} alt={name} style={{width:'100px'}}/>
                  </td>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>{`${price}`}</td>
                  <td className={styles.icons}>
                      <Link to={`/admin/addProduct/${id}`}>
                        <FaEdit size={20} color="green" />
                      </Link>
                      &nbsp;
                      <FaTrashAlt
                        size={18}
                        color="red"
                        onClick={() => confirmDelete(id, imageURL)}
                      />
                    </td>
                </tr>
                )
              })
            }
                  </tbody>
          </table>
        )
      }
    </div>
</>
  )
}

export default ViewProducts
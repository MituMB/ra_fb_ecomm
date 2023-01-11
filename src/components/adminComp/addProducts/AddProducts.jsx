import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
// import { produceWithPatches } from 'immer';
import React from 'react'
import { useState } from 'react';
import { db, storage } from '../../../firebase/config';
import Card from '../../card/Card';
import styles from "./AddProducts.module.scss";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { selectProducts } from '../../../redux/slice/productSlice';
import { useSelector } from 'react-redux';

const categories = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Phone" },
];
const initialState = {
  name: "",
  imageURL: "",
  price: 0,
  category: "",
  brand: "",
  desc: "",
};

const AddProducts = () => {
  const { id } = useParams();
  console.log(id);
  const savedProducts = useSelector(selectProducts);
  console.log(savedProducts);
  const editProduct = savedProducts.find((item) => item.id === id);
  console.log(editProduct);
  function detectForm(id, f1, f2) {
    if (id === "ADD") {
      return f1;
    }
    return f2;
  }
  

  const [product, setproduct] = useState(() => {
    const newState = detectForm(id, { ...initialState }, editProduct);
    return newState;
  }
   
  )
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const{name, value} = e.target;
    setproduct({...product,[name]:value})
    console.log(value);
  }

  //image upload progress
  const [uploadProgress, setuploadProgress] = useState(0)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    const storageRef = ref(storage, `eshop/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     setuploadProgress(progress)
      }, 
      (error) => {
        toast.error(error.message);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         setproduct({...product, imageURL: downloadURL})
         toast.success("Image uploaded successfully.");
        });
      }
    );

  }

  //save product
  const handleAddProduct = (e) => {
    e.preventDefault();
 setisLoading(true)

    try{
      const docRef = addDoc(collection(db, "products"), {
        name: product.name,
        imageURL: product.imageURL,
        price: Number(product.price),
        category: product.category,
        brand: product.brand,
        desc: product.desc,
        createdAt: Timestamp.now().toDate(),
    })
    setisLoading(false)
    setuploadProgress(0)
    setproduct({  ...initialState})
    toast.success("Product uploaded successfully.");
    navigate("/admin/allProduct");
  } catch(error){
    setisLoading(false)
    toast.error(error.message);
  }
}

//edit Product




const handleEditProduct = (e) => {
  e.preventDefault();
setisLoading(true)
if (product.imageURL !== editProduct.imageURL) {
  const storageRef = ref(storage, editProduct.imageURL);
  deleteObject(storageRef);
}
try {
  setDoc(doc(db, "products", id), {
    name: product.name,
    imageURL: product.imageURL,
    price: Number(product.price),
    category: product.category,
    brand: product.brand,
    desc: product.desc,
    createdAt: editProduct.createdAt,
    editedAt: Timestamp.now().toDate(),
  });
  setisLoading(false);
  toast.success("Product Edited Successfully");
  navigate("/admin/allProduct");
} catch (error) {
  setisLoading(false)
  toast.error(error.message);
}
}
  return (
    <>
    {
      isLoading && <Loader />
    }
    <div className={styles.product}>
      <h2>{detectForm(id, "Add New Product", "Edit Product")}</h2>
      <Card cardClass={styles.card}>
        <form onSubmit={detectForm(id,handleAddProduct,handleEditProduct)}>
          <label>Product name:</label>
          <input type="text" placeholder='Product Name' required name="name" value={product.name} onChange={(e) =>handleInputChange(e)}/>
          <label>Product image:</label>
          <Card cardClass={styles.group}>
            {
              uploadProgress === 0 ? null : ( 
              <div className={styles.progress}>
                <div className={styles["progress-bar"]} style={{width:`${uploadProgress}%`}}> 
                {uploadProgress < 100 ? `Uploading ${uploadProgress}` : `Upload Complete ${uploadProgress}%`}
                </div>
            </div>
            )
            }
               

                <input type="file" accept='image/*' placeholder='Product Image' name="image"  onChange={handleImageChange}/>

                {
                  product.imageURL === "" ? null : (

                    <input type="text" name="imageURL" value={product.imageURL}  placeholder='Image URL' disabled/>
                  )
                }
          </Card>

          <label>Product Price:</label>
          <input type="number" placeholder='Product Price' required name="price" value={product.price} onChange={handleInputChange}/>
          <label>Product Category:</label>
          <select required name="category" value={product.category} onChange={handleInputChange}>
                    <option value="" disabled>
                      -- choose product category --
                    </option>
                    {
                      categories.map((cat) =>(
                        <option key={cat.id}  value={cat.name}>{cat.name}</option>
                      ))
                    }
          </select>

          <label>Product Company/Brand:</label>
          <input type="text" placeholder='Product Brand' required name="brand" value={product.brand} onChange={handleInputChange}/>

          <label>Product Description:</label>
          <textarea name="desc" value={product.desc} cols="30" rows="10" onChange={handleInputChange}></textarea>
             <button className="--btn --btn-primary">
              {detectForm(id, "Save Product", "Update Product")}
            </button>
        </form>
      </Card>
      </div>
    </>
  )
}

export default AddProducts
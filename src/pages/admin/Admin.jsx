import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../components/adminComp/home/Home'
// import Home from '../home/Home'
import Navbar from '../../components/adminComp/navbar/Navbar'
import styles from './Admin.module.scss'
import ViewProducts from '../../components/adminComp/viewProducts/ViewProducts'
import AddProducts from '../../components/adminComp/addProducts/AddProducts'
import Orders from '../../components/adminComp/orders/Orders'
import OrderDetails from '../../components/adminComp/orderDetails/OrderDetails'
// import OrderDetails from '../orderDetails/OrderDetails'

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
      <Routes>
        <Route path="home" element={<Home /> } />
        <Route path="allProduct" element={<ViewProducts />} />
          {/* <Route path="addProduct" element={<AddProducts/>} /> */}
          <Route path="addProduct/:id" element={<AddProducts/>} />
          <Route path="orders" element={<Orders />} />
          <Route path="order-details/:id" element={<OrderDetails />} />
      </Routes>
      </div>
    </div>
  )
}

export default Admin
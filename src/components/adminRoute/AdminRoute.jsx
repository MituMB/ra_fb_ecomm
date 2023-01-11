import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectEmail } from '../../redux/slice/authSlice'

const AdminRoute = ({ children}) => {

    const currentEmail = useSelector(selectEmail)
    // console.log(currentEmail);
    if(currentEmail === "test@gmail.com"){
        return children
    }
  return  (
    <section style={{height:'80vh'}}>
        <div className="container">
            <h2>Permission Denied!!</h2>
            <Link to="/">&larr;Back to home</Link>
        </div>
    </section>
  )
}

export const AdminLink = ({ children}) => {

    const currentEmail = useSelector(selectEmail)
    // console.log(currentEmail);
    if(currentEmail === "test@gmail.com"){
        return children
    }
  return  null
}

export default AdminRoute
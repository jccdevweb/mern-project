import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

const Customers = () => {
  const [customers, setCustomers] = useState([]);

const getCustomers = async () => {

      const customerResponse = await axios.get("http://localhost:5001/customer/",);
      setCustomers(customerResponse.data);}

      useEffect(() =>{
        getCustomers();
      },[])

  return (
    <div style={{ display: "grid", justifyContent: "center", gap: "2rem" }}>
      <CustomerForm getCustomers={getCustomers}/>
      <CustomerList customers={customers}/>
    </div>
  )
}

export default Customers

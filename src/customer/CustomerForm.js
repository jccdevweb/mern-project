import axios from 'axios';
import React, {  useState } from 'react'


const CustomerForm = ({getCustomers}) => {
    const[customerRegister, setCustomerRegister] = useState(
     {name:""}
    );
    const {name} = customerRegister
    
    const saveCustomer = async (e) => {
      e.preventDefault();

      try{
        const customerData ={
          name,
        };
        await axios.post("http://localhost:5001/customer/", customerData,);
        getCustomers();
      } catch(err){
        console.error(err)
      }
    } 
  return (
    <div >
    <h1>customer register a new account</h1>
    <form onSubmit={saveCustomer} style={{textAlign: "left"}}>
      <input type="text" placeholder="name" name="name" value={customerRegister.name} onChange={(e) => setCustomerRegister({...customerRegister, name: e.target.value})}/>
      {/* <input type="password" placeholder="Password" name="password" value={customerRegister.password} onChange={(e) => setCustomerRegister({...customerRegister, password: e.target.value, })}/>
      <input type="password" placeholder="Verify your password" name="passwordVerify" value={customerRegister.passwordVerify} onChange={(e) => setCustomerRegister({...customerRegister, passwordVerify: e.target.value,})}/> */}
      <button type="submit">Save new customer</button>
    </form>
  </div>
  )
}

export default CustomerForm
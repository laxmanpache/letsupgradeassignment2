import React from 'react';
import './product.css';
// import Details from './ProductDataAPI'
const Product = (props) => {
   console.log(props.Details);
    return (
        <>
        <div className="maincontainer">{  
           
             props.Details.map((curEle,index)=>{
              const {pname ,id,modelno ,price}=curEle;
             return(
                 <div  className="container "  key={index}>
                      <div className="card">
                                <h1>ID:{id}</h1>
                                <h1>Mobile Name: {pname}</h1>
                                <h1>Product NO:{modelno}</h1>
                                <h1>Price :{price}</h1>
                      </div>
                </div>
             )
           })

    

        }

        </div>
        </>
    )
}

export default Product;

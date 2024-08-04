import React from "react";
import { Col, Row } from "react-bootstrap";

import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Productlist = () => {
    
const items = useSelector(state => state.cartReducer.cart) 


    return (
        <>
            <h1>Liste De Produits </h1>
            <Row md={2} xs={2} lg={3} className="g-5">
                 {items.map((item)=> {
                  return  ( <Col key={item.id}>
                        <ProductItem {...item}/>
                    </Col> )
})}
            </Row>
        </>
    )
}

export default Productlist;
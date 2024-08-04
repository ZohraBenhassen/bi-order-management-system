import React from "react";
import { Card, Button } from "react-bootstrap";

import { increase, decrease ,remove } from "../redux/action";
import {  useDispatch, useSelector } from "react-redux";




const ProductItem = (item) => {
    
    const {id , title, description, price, imgUrl, quantitydispo} = item
   
    const orderItems = useSelector((state) => state.cartReducer.orderItems);

    const productInCart = orderItems.find((product) => product.id === id);

    const quantity = productInCart ? productInCart.quantity : 0;
    
    const dispatch = useDispatch();

    

    return(
        <Card >
            <Card.Img src={imgUrl} 
            variant="top" 
            style={{ height: "300px" }}
            />
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline ">
                <span className="fs-2">{title}</span>
                <span className="fs-2" >{price}€</span>
                
            </Card.Title>
            <div>
            <p className="text-muted me-2">{description}</p>
            <p className="text-muted me-2">Seulement {quantitydispo} en stock - commandez maintenant !!</p> 
            </div>
            <div className="mt-auto">
              <div className="d-flex align-items-centre flex-column" 
              style={{gap : "0.5rem"}}>
                    <div className="d-flex align-items-center justify-content-center"
                    style={{gap : "0.5rem"}}>
                        <Button  onClick={()=> dispatch(decrease(item))}disabled={quantity === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-dash" viewBox="0 0 16 16">
                            <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        
                        </Button>
                        <span className="fs-5">{quantity} Article(s) dans la panier</span>
                        <Button onClick={()=> dispatch(increase(item))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                        </svg>
                        </Button>
                    </div>
                    {quantity > 0 && <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => dispatch(remove(item))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>    
                    </Button>}
              </div>
            </div>
        </Card.Body>
        </Card>
    )
};

export default ProductItem; 
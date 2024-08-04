import React from "react";
import { Button , Stack} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {  remove } from "../redux/action";
// import ProductItem from "./ProductItem"


const CartItems =({id}) => {
  const dispatch = useDispatch();
  
  const orderItems = useSelector((state) => state.cartReducer.orderItems);

  const productInCart = orderItems.find((product) => product.id === id);

  const quantity = productInCart !== undefined ? productInCart.quantity : 0;


  const item = productInCart;

  if(item == null) return null;

  return (
    <Stack 
    direction='horizontal' 
    gap={2} 
    className='d-flex algn-items-center'
    >
      <img src={item.imgUrl} alt='cart-img'
       style={{ width: "125px", height: "75px", objectFit: "" }} />
      
      <div className='me-auto'>
        <div>
          {item.title} {" "}
          {quantity > 1 && (
          <span 
          className='text-muted' 
          style={{fontSize:"0.65rem"}}
          >
            X{quantity}</span>
            )}
            <div className="text-muted" style={{ fontSize:"0.75rem" }}>
            {item.price}€
           </div>
        </div>
      </div>
      <div>{item.price * quantity}€</div>
      
      <Button variant='outligne-danger' size='sm' onClick={() => dispatch(remove(item))}  >
            &times;
      </Button>
    </Stack>
  )
}

export default CartItems;
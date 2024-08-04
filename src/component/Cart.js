import React from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack   } from 'react-bootstrap';
// import { useCart } from './CartContainer';
import CartItem from './CartItems';
import { useSelector,useDispatch } from 'react-redux';
import { closeCart } from "../redux/action"




const Cart = () => {
  
  
    const total = useSelector((state) => state.cartReducer.totalAmount);
    const cartItems = useSelector((state) => state.cartReducer.orderItems);
    const isCartOpen = useSelector((state) => state.cartReducer.isCartOpen);
    // const productInCart = cartItems.find((product) => product.id === id);
    const dispatch = useDispatch();

    
  return <Offcanvas show={isCartOpen} onHide={() => dispatch(closeCart())} placement='end'>
        <OffcanvasHeader closeButton>
             <OffcanvasTitle>Panier</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
        <Stack gap={3}>
          {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            
          <div className="ms-auto fw-bold fs-5">
            Totale{total}€
          </div>
          {/* <Button 
          variant="danger" 
          onClick={() => dispatch(remove(productInCart))}
          >
          Anuuler tous les opération   
          </Button> */}
        </Stack>
        </OffcanvasBody>
  </Offcanvas>
};

export default Cart;










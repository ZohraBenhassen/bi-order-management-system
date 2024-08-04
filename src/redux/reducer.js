import * as types from "./actionTypes";
import data from "../data/Products.json";

const initialState = {
  totalAmount: 0,
  totalCount: 0,
  orderItems : [],
  cart: data.items,
  isCartOpen: false,
};

const cartReducer = (state = initialState , action) => {
  
  switch (action.type) {
    case types.GET_TOTALS:
      
      let { totalAmount, totalCount } = state.orderItems.reduce(
        
        (cartTotal, cartItem) => {
          
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      totalAmount = parseFloat(totalAmount.toFixed(2));
      

      return { ...state, totalAmount, totalCount };
      
    case types.increaseCartQuantity: 
    //  console.log({ac:action.payload})
    const item = state.orderItems.find(
      (product) => product.id === action.payload.id
    ); 
     
    if(item === undefined) {
      state.orderItems.push({...action.payload,quantity:1})
      
    }else {
      state.orderItems = state.orderItems.map((product) =>
      product.id === action.payload.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    }
    //  console.log({new:state.orderItems})
    return {...state,
      totalCount: state.totalCount + 1,   
      totalAmount: state.totalAmount + action.payload.price,   
    };
    
    
    case types.decreaseCartQuantity:
      // console.log({new1:state.orderItems})
      return{
        
        ...state,
        
        orderItems : state.orderItems.map((product) =>
          product.id === action.payload.id
            ? { ...product, 
              quantity: (product.quantity - 1) }
            : product
        ),
        
        totalCount: state.totalCount - 1,
        totalAmount: state.totalAmount - action.payload.price,
      };
      
      case types.removeFromCart:
        // console.log({ new1: state.orderItems });
        const itemToRemove = state.orderItems.find((item) => item.id === action.payload.id);
        if (itemToRemove) {
          const removedQuantity = itemToRemove.quantity;
          return {
            ...state,
            orderItems: state.orderItems.filter((item) => item.id !== action.payload.id),
            totalCount: state.totalCount - removedQuantity,
            totalAmount:state.totalAmount - itemToRemove.price * itemToRemove.quantity || 0,
          };
        };
        break;
      case types.OPEN_CART:
      return {
        ...state,
        isCartOpen: true,
      };
      case types.CLOSE_CART:
      return {
        ...state,
        isCartOpen: false,
      };
          
      
    
    
    default:
      return state;
      
  }
};

export default cartReducer;






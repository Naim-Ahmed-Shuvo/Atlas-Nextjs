export const initialState = {
    user: null,
    count: "hello",
    isAuthenticated: false.valueOf,
    openMenuDrawer: false,
    cart:[]
}

export const getSubtotal = (cart) => {
    return cart?.reduce((amount, item) => parseInt(item.price) + amount, 0);
  };
  

const reducer = (state,action)=>{
   switch (action.type) {
       case "Increase":
           return{
               ...state,
               count: count++
           }
          

       case "Decrease":
           return{
               ...state,
               count: count--
           }

       case "ADD_TO_CART":
          
           return{
               ...state,
               cart: [...state.cart,action.item]
           }

       case "REMOVE_FROM_CART":
            const index = state.cart.findIndex((item)=> item.id== action.id)
            let newCart = [...state.cart]
             if(index>=0){
                 newCart.splice(index,1)
             } else{
                alert(`Can't remove product ${action.id} as it is not in cart`);
             }
           return{
               ...state,
               cart: newCart
           }
          
       case "SET_LOGIN":
           return{
               ...state,
               isAuthenticated: true
           }
          
       case "TOGGLE_DRAWER":
           return{
               ...state,
               openMenuDrawer: true
           }
          
       case "CLOSE_DRAWER":
           return{
               ...state,
               openMenuDrawer: false
           }
          
   
       default:
           return state;
   }
}
export default reducer;
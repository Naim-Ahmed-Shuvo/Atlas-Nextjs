export const initialState = {
    user: null,
    count: "hello",
    isAuthenticated: false.valueOf,
    openMenuDrawer: false
}

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
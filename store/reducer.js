export const initialState = {
    user: null,
    count: "hello",
    isAuthenticated: false
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
          
   
       default:
           return state;
   }
}
export default reducer;
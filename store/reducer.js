export const initialState = {
    user: null,
    count: "hello",
    isAuthenticated: true
}

const reducer = ({state,action})=>{
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
          
   
       default:
           return state;
   }
}
export default reducer;
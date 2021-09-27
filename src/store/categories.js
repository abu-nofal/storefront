/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */

let initialState = {
    categories:[
        {
        normalizedName:"FOOD",
        displayName:"FOOD",
        description:"you can find all food you want"
    },
    { 
    normalizedName: 'ELECTRONICS', 
    displayName: 'ELECTRONICS', 
    description: 'this is a collection of electronics products' 
}
],
activeCategory:""
   

}





// eslint-disable-next-line import/no-anonymous-default-export
 const ReduceCategory=(state = initialState, action) => {
  let {type, payload} = action;
  console.log(action);
  switch(type) {
      case 'ACTIVE':
          let activeCategory=payload
          let categories = state.categories
              
          return { activeCategory:activeCategory,categories:categories};
      case 'RESET':
          return initialState;
      default:
          return state;
  }
}












//actions
export const selectCate = (name) => {
    return {
        type: 'ACTIVE',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export default ReduceCategory

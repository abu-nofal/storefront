/* eslint-disable no-unused-expressions */
let initialState ={
    products :  [
        {
            category: 'ELECTRONICS',
            name: 'Arduino Kit',
            description: 'for building Arduino projects',
            price: '35$',
            inventoryCount: 3,
            img: 'https://5.imimg.com/data5/MU/LM/MY-9380557/arduino-uno-starter-kit-500x500.jpg',
          },
        {
        category: 'ELECTRONICS',
        name: 'Stepper Motor',
        description: 'good for light weight loads',
        price: '10$',
        inventoryCount: 7,
        img: 'https://www.motioncontroltips.com/wp-content/uploads/2019/06/Nanotec-SCA5618_Web.jpeg',
      },
      {
        category: 'FOOD',
        name: 'Mansaf',
        description: 'good to correct your mood LoL..',
        price: '20$',
        inventoryCount: 3,
        img: 'http://migrationology.smugmug.com/Jordan-Travel-Guide/i-8xVPrHQ/0/X3/mansaf-jordanian-food-19-X3.jpg',
      },
      
      {
        category: 'FOOD',
        name: 'Zait & Zaater',
        description: 'best food for healthy people',
        price: '3$',
        inventoryCount: 12,
        img: 'https://2.bp.blogspot.com/-N-OmV9Wi5sM/XK70kcYjAQI/AAAAAAACSzQ/j1bHjkBmvrwwZvmDPRXb2hBG0vDukEwpACLcBGAs/s1600/01.JPG',
      },

    ]
    
}


 const ReduceProducts=(state = initialState, action) => {
    const {type,payload}=action;
  
    switch (type) {
        case "ACTIVE":

            let product=state.products.filter(product=>{
               return   product.category === payload ?product.category  : null
                
            })
            console.log(product);
            return {...state,product:product};
            case "RESET":
            return initialState; 
        default:
            return state;
    }
}

export default ReduceProducts
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  
  products:[
    {
      name: "chapati",
      
            price: 10 ,
      
            id: 1,
      
            quntity: 0,
      
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWr8cOMu4WELNdtpUmSX4L9BhJCK_G1q0QA&usqp=CAU",
      
          },
      
      
      
          {
      
            name: "pickle",
      
            price: 20 ,
      
            id: 2,
      
            quntity: 0,
      
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRxx94FPWt6Vcapr7DUW5hdLS6Yo86xl-3Q&usqp=CAU",
      
          
    },
    {

      name: "Curd",

      price: 30,

      id: 3,

      quntity: 0,

      Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx7ytaFPjuQheIHL3sAz1W_5brUGPr1_Xvw&usqp=CAU",

    },



    {

      name: "Sweet",

      price: 40,

      id: 6,

      quntity: 0,

      Image:"https://i.pinimg.com/474x/e0/ba/c3/e0bac3a1895b8f50ffe1a0fb6cda5287.jpg",

    },
    {

        name: "Daal",
  
        price: 50,
  
        id: 4,
  
        quntity: 0,
  
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubrRrLWZui_DQm-XTGr-yjMktKgj0ZFQ0JA&usqp=CAU",
  
      },
  
  
  
      {
  
        name: "Paneer Dish",
  
        price: 70,
  
        id: 5,
  
        quntity: 0,
  
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiS7ZXNcm7pL-simqvmr2Jv3dzDRp9xDCx_A&usqp=CAU",
  
    },
  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer
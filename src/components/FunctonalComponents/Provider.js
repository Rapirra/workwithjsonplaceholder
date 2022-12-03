import { createContext } from "react"
import { useReducer, useState } from "react"


export const ListContext = createContext(null)

 const initalState = {
    selectedList: [],
    settedImage: [
      {
        title: "mdvsmlsdv",
        desc: "kvsnlknkld",
        file:{}
      }
    ],
}

export const selectedListReducer = (state, action) =>{
  switch (action.type){
    case "ADD_POST":
      return{
        selectedList: [
          ...state.selectedList,{...action.payload}
        ]
      };
      case "DELETE_POST":
        return{
          selectedList: state.selectedList.filter(post => post.id !== action.payload)
        }
      case "ADD_IMAGE":
        return{
          settedImage: [...state.settedImage, {...action.payload}]
        }    
        
      default: 
        return state
  }
}
export default function Provider({children}) {
  const [openModal, setOpenModal] = useState(false)

  const [state, dispatch] = useReducer(selectedListReducer, initalState)
  
  const funcs = {
    selectedList: state.selectedList,
    settedImage: state.settedImage,
    addPost: (value) =>{
      dispatch({ type:"ADD_POST", payload: value});
    },

    deletePost: (value) =>{
      dispatch({ type:"DELETE_POST", payload: value});
    },
    openModal, setOpenModal,

    addImage: (value) =>{      
      dispatch({type: "ADD_IMAGE", payload: value})      
    }
  };
  console.log(state.settedImage)


    return(
        <ListContext.Provider value={funcs}>
          {children}
        </ListContext.Provider>
    )
}




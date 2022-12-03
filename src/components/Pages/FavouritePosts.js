import React,{useContext} from 'react'
import { ListContext } from '../FunctonalComponents/Provider'

export default function FavouritePosts() {
    
    const  {selectedList, deletePost, addPost } = useContext(ListContext)
    console.log(selectedList)
  return (
    <div style={{width: "980px", margin: "0 auto"}}>
        <br />
        <h1>Favourite Posts</h1>
        <br />
        {/* <button onClick={() => addCustomPost}>Add Own Post</button> */}
        {selectedList && selectedList.map((el) => ( 
            <div key={el.id} style={{border:"1px solid black", marginBottom:"20px", padding: "15px 40px"}}>
            <h3>{el.title}</h3>
            <h5>{el.body}</h5>
            <div className='btn-panels'>
                <button onClick={() => deletePost(el.id)}>Delete</button>
            </div>
            </div>
           ))
        }
    </div>
  )
}

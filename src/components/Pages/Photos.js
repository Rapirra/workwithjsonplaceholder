import React, {useState, useEffect, useContext} from 'react'
import ClientSetImage from '../FunctonalComponents/ClientSetImage'
import PhotoCard from '../FunctonalComponents/PhotoCard'
import { ListContext } from '../FunctonalComponents/Provider'
export default function Photos() {
    const [data, setData] = useState([])
    const {openModal, setOpenModal, settedImage, addImage} = useContext(ListContext)
  useEffect(() => {
    const getData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=1')
        .then(response => response.json())
        .then(json => setData(prevState => [...prevState, ...json]))
    }
    getData()    
  }, [])

  const setImage = () => {
    setOpenModal(true);
  }

  useEffect(() => {    
    if(openModal){document.body.style.overflow = "hidden";      
    return () => {
      document.body.style.overflow = "visible";
    }}
  }, [openModal])
    

  return (    
    <div>
       {openModal ? <ClientSetImage /> : null}
      <div style={{width: "980px", margin: "0 auto"}}>
      <h1>Photos</h1>
      <button onClick={() => setImage()}>Add Photos</button>
      
      <br />
     {data && data.map((el) => ( 
        <PhotoCard 
        id={el.id} 
        title={el.title}
        src={el.url}/>
       ))}

      {settedImage && settedImage.map((el) => ( 
        <PhotoCard 
        id={el.id} 
        title={el.title}
        src={el.file.selectedFile}
       />
       ))}
        
      </div>
    </div>
  )
}

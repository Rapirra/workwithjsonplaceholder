import React, {useCallback, useContext, useEffect, useRef, useState} from 'react'
import { ListContext } from './Provider'
import { v4 as uuidv4 } from 'uuid';

export default function ClientSetImage() {
  const {settedImage, openModal, setOpenModal, addImage} = useContext(ListContext)
  const [selectedFile, setSelectedFile ] = useState()
  const imgRef = useRef(null)
  const [data, setData] = useState({
    id: uuidv4(),
    title:"",
    desc:"",
    file: {}
  })
  useEffect(() => {
   console.log(selectedFile)
  }, [selectedFile])
  const onSetChange = (e) => {
    const {name, value } = e.target;
    setData({
      ...data,
      [name]:value
    })
  }

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      await setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };
   }

   useEffect(() => {
    setData({
      ...data,
      file: {selectedFile}
    });    
   }, [selectedFile])

   const setInfoImage = (value) => {
    addImage(value)
    setOpenModal(false)
   }

  return (
    <div>        
        <div style={{width:"100%", height:"100%", backgroundColor:"rgba(49,49,49,0.8)", position:"fixed"}}>
        <div style={{backgroundColor:"white", position:"absolute", top:"10%", left: "10%" , display:"flex", flexDirection:"column"}}>
        <button onClick={() => setOpenModal(false)}>Close</button>
          <label>Title<input type="text" name="title" value={data.title || ""} onChange={(e) => onSetChange(e)} /></label>
          <label>Description<input type="text" name="desc" value={data.desc || ""} onChange={(e) => onSetChange(e)} /></label>
          <label><input type="file" name="file" ref={imgRef} onChange={onImageChange} /></label>           
          <button onClick={() =>setInfoImage(data)}>Submit</button>
        </div>
      </div>
    </div>
  )
}

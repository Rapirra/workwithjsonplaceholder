import React from 'react'

export default function PhotoCard({id, title, src}) {
  return (
    <div key={id}>
       <div style={{border:"1px solid black", marginBottom:"20px", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 20px"}}>        
        <h6 style={{textTransform: "capitalize"}}>{title}</h6>
        {src ? <img src={src} style={{width:"600px", height:"600px"}}  alt="" /> : null}
      </div>        
    </div> 
  )
}

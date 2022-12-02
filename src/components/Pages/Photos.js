import React, {useState, useEffect} from 'react'

export default function Photos() {
    const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10')
        .then(response => response.json())
        .then(json => setData(prevState => [...prevState, ...json]))
    }
    getData()
    
  }, [])
  console.log(data)
  return (
    <div style={{width: "980px", margin: "0 auto"}}>
      <h1>Photos</h1>
      <br />
     {data && data.map((el) => ( 
        <div key={el.id}  style={el.completed ? {textDecoration:"line-through 3px red"}: null}>
           <div style={{border:"1px solid black", marginBottom:"20px", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 20px"}}>        
            <h6 style={{textTransform: "capitalize"}}>{el.title}</h6>
            <img src={el.url} alt="" />
          </div>        
        </div> 
       ))}
    </div>
  )
}

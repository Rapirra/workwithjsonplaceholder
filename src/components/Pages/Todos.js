import React,{useState, useEffect} from 'react'

export default function Todos() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    const getData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
        .then(response => response.json())
        .then(json => setData(prevState => [...prevState, ...json]))
    }
    getData()
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div style={{width: "980px", margin: "0 auto"}}>
      <h1>Todos</h1>
      <br />
      <input type="text" onChange={handleChange}/>
      {data && data.filter(task => {
              return task.title.toLowerCase().includes(search.toLowerCase())
          }).map((el) => ( 
        <div  key={el.id}  style={el.completed ? {textDecoration:"line-through 3px red"}: null}>
           <div style={{border:"1px solid black", marginBottom:"20px", display:"flex", justifyContent:"space-between", justifyItems:"center", padding:"10px 20px"}}>        
            <h4>{el.id} </h4><p></p>
            <h6 style={{textTransform: "capitalize"}}>{el.title}</h6>
          </div>        
        </div> 
       ))}
    </div>
  )
}


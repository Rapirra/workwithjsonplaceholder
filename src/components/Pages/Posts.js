import React, { useCallback, useEffect, useReducer, useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';

import axios from 'axios';

export default function Posts() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [active, setActive] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
  const totalPosts = data.length
  const lastPostIndex = active * postsPerPage 
  const firstPostIndex = lastPostIndex - postsPerPage
  const [currentPosts, setCurrentPosts] = useState()

  useEffect(() => {
    const getData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
       .then(response => response.json())
       .then(json => setData(json), setCurrentPosts(data))
    }    
    getData()
  }, [])
  

  useEffect(() => {
    setCurrentPosts(data.slice(firstPostIndex, lastPostIndex))
  }, [data, active])

  const initialState = {
    resource: [],
    filtered: []
  }

  const postReducer = (state = initialState, action)=>{
    switch (action.type){
      case "SET_DATA": 
        return {resource: action.payload}
      case "FILTER":
        return { filtered: data.filter(post =>  post.title.toLowerCase().includes(action.payload.toLowerCase()))}
      default: 
        return state
    }
  }
  const [state, dispatch] = useReducer(postReducer, initialState)
 
  useEffect(() => {
    const setData = () => {
      dispatch({type: "SET_DATA" , payload: [...data]})
    }
    setData()
  }, [data])

  const handleChange = (e) => {
    dispatch({type: "FILTER", payload: e.target.value})
    setCurrentPosts(state.filtered)    
  }

  const handleClick = (value) => {
    setActive(value)
    
  }
  

    let items = [];
    for (let number = 1; number <= Math.ceil(totalPosts/postsPerPage); number++) {
      items.push(
        <Pagination.Item onClick={() =>handleClick(number)} key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
 

  return (
    <div style={{width: "980px", margin: "0 auto"}}>
      <div >
        <h1>Posts</h1>
        <br/>
        <input type="text" onChange={handleChange}/>
        <div style={{marginTop: "40px"}}>
        {currentPosts && currentPosts.map((el) => ( 
            <div key={el.id} style={{border:"1px solid black", marginBottom:"20px"}}>
            <h3>{el.title}</h3>
            <h5>{el.body}</h5>
            </div>
           ))
        }
        </div>
      </div>
      <div style={{display: "flex", justifyContent:"center"}}>
        <Pagination >{items}</Pagination>
      </div>
    </div>
  )
}

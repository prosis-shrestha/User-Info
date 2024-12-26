import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { Toaster, toast } from 'sonner'

const All = () => {
  const [data, setData]= useState(null)
  const [query, setQuery]= useState('')
  const [error, setError]= useState("")

  const getData= async ()=>{
  
    const response = await fetch('http://localhost:5555')
    const result = await response.json();
    
    
    if(!response.ok){
      console.log(result.error);
      setError(result)
    }
    if(response.ok){
      setData(result)
    }
  }

  useEffect(()=>{
   getData();
  },[data])
  
const handleDelete =  async (_id)=>{
const response = await fetch(`http://localhost:5555/${_id}`,{
  method: "DELETE"
})

if(!response.ok){
  console.log("Error");
}
if(response.ok){
    toast.success("User Deleted");
  }
}

// Actual data to be mapped over
const filteredItems = data?.filter(item=>{
  return item.name.toLowerCase().includes(query.toLowerCase())  // returns all original data if no query
})


  return (
    <div className='container my-2'>
    <Toaster position="top-right"/>
    <h1>All User</h1>
  
    <label>Search:&nbsp;</label>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="search"
        style={{padding: ".5rem"}}
      />
    <div className='all-user' style={{ display: 'flex' , flexWrap: 'wrap'}}>
    {filteredItems?.map (prev=>(
    <Card data={prev} error={error} key={prev._id} handleDelete={()=>handleDelete(prev._id)}/>
    ))}
    </div>
    </div>
  )
  }
export default All
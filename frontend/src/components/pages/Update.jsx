import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

const Update = () => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [age, setAge]= useState(0) // Fix this
  const [error, setError]= useState("")
  const [updateClicked, setUpdateClicked] = useState(false);
  const Navigate = useNavigate()
  const {id} = useParams();

  // get single user data
  const getSingleUser = async ()=>{
    const response = await fetch(`http://localhost:5555/${id}`)
    const result = await response.json();

    if(!response.ok){
      setError(result)
    }
    if(response.ok){
      setName(result.name)
      setEmail(result.email)
      setAge(result.age)
      setError("")
      } 
  }

useEffect(()=>{
getSingleUser()
},[])

// send updated data to backend
const handleUpdate = async(e)=>{
  e.preventDefault();
  const updateUser = {name, email, age}
  
  const response = await fetch(`http://localhost:5555/${id}`,{
    method: "PATCH",
    body: JSON.stringify(updateUser),
    headers:{
      "Content-Type": "application/json"
    }
  })
  const result = await response.json();
  
  if(!response.ok){

    setError(result.error);
    setUpdateClicked(!updateClicked);
  }
    if(response.ok){
      setError("");
      Navigate("/All")
    }
  }

  useEffect(() => {
    // Use the useEffect hook to wait for the component to re-render before showing the error toast
    if (error) {
      toast.error(error);
    }
  }, [updateClicked]);

  return (
    <div className='container my-2'>
      <Toaster position="top-right"/>
    <h1>Update</h1>
    <form onSubmit={handleUpdate}>
    <div className="mb-3">
  <label  className="form-label">Name</label>
  <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e)=> setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Age</label>
    <input type="number" className="form-control"  value={age} onChange={(e)=> setAge(e.target.value)}/>
</div>
<button type="submit" className="btn btn-primary">Update</button>
</form>
  </div>
  )
}

export default Update
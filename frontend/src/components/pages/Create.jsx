import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

const Create = () => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [age, setAge]= useState(0) // Fix this
  const [error, setError]= useState("")
  const [updateClicked, setUpdateClicked] = useState(false);

const Navigate = useNavigate()

const handleSubmit = async(e)=>{
e.preventDefault();
const addUser = {name, email, age}

const response = await fetch('http://localhost:5555',{
  method: "POST",
  body: JSON.stringify(addUser),
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
    setName("");
    setEmail("");
    setAge(0);
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
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" required value={name} onChange={(e)=> setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" required aria-describedby="emailHelp" value={email} onChange={(e)=> setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Age</label>
    <input type="number" className="form-control"  required value={age} onChange={(e)=> setAge(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    
  )
}

export default Create
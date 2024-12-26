import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'
import {FiEdit, FiTrash} from 'react-icons/fi'
const Card = (props) => {
  
  return (
    <div className="card" style= {{width: 23 + 'rem', textAlign: 'center'}}>
    <div className="card-body">
    <h5 className="card-title">{props.data.name}</h5>
    <p className="card-text">{props.data.email}</p>
    <p className="card-text">{props.data.age}</p>
    <Link to= {`/${props.data._id}`} className="card-link"><FiEdit size= {20}/></Link>
    <Link to="/All" className="card-link" onClick={props.handleDelete}><FiTrash size= {20}/></Link>
  </div>
</div>
  )
}

export default Card
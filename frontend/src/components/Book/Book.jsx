import React from 'react'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import './Book.css'
import axios from 'axios'

const Book = (props) => {
  const history = useNavigate();
    const { _id, name, author, description, price, image } = props.book;
    const deleteHandler = async () => {
      await axios
        .delete(`https://full-mern-learn-server.vercel.app/books/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/books"));
    }
   
  return (
    <div className="card">
   <img src={image} alt={name} style={{width: "250px", height: "100px"}} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3> 
      <Button LinkComponent={Link} to={`/books/${_id}`}
      sx={{ mt: "auto" }}
      >Update</Button>  
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>Delete</Button> 
    </div>
  )
}

export default Book 
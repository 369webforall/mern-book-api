import React from 'react';
import { Link } from 'react-router-dom';
const Book = ({ book, deleteBook }) => {
  const { name, author, desc, price, image, available, _id } = book;
  return <div>
    <div className='w-[300px]'>
        <img src={image} alt={name} className='w-full object-cover h-[200px] mb-2' />
        <h1>Book Name:{name}</h1>
        <p>Author:{author}</p>
        <p>{desc}</p>
        <p>{price}</p>
        <p>In Stock{available}</p>
    </div>
    <div>
        <Link to={`/books/${_id}`}>Update</Link>
        <button onClick={()=>deleteBook(_id)}>Delete</button>
    </div>
  </div>;
};

export default Book;

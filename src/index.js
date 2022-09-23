import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {data} from './books'
import Book from './book'

function BookList()
{
  return (
    <section className='booklist'>
      {data.map((book,index)=>{
        return <Book key={book.id} {...book}></Book>
    })}
  
  </section>
  );
}





ReactDom.render(<BookList/>,document.getElementById("root"))
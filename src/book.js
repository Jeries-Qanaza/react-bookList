import React from 'react'

const book=(smth) =>{

    const clickHandler=()=>
    {
      alert("You have clicked!");
      console.log("also");
    };
  
  
  
    return (
    <section className="book" onMouseOver={()=>console.log("hovvver")}>
  
      <h1 onClick={()=>console.log(smth.title)} style={{cursor:'pointer', color:"rgb(1,144,1)"}}> first book ever </h1>
      <img src={smth.img} alt="Error uploading picture"/>
      <h1>{smth.author} </h1>
      <h2>{smth.title}</h2>
      <button type="button" onClick={clickHandler}> Ref. </button>
  
    </section>
  )
  }

export default book
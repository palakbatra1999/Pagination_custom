import React, { useEffect, useState } from 'react';
import data from  './MOCK_DATA.json';
import './style.css';
import ReactPaginate from "react-paginate";

const Paginate = () => {

    const[users,setsusers]=useState(data);
    const[pagenumber,setpagenumber]=useState(0);

    const userperpage=10;

    const pagesvisited=pagenumber*userperpage;

    const pageCount=Math.ceil(users.length/userperpage);

    const onPageChange = ({selected}) =>{
      setpagenumber(selected);
    }

  const setPrevious = () =>{
    if(pagenumber>0)
    {
      setpagenumber(pagenumber-1);

    }
    else setpagenumber(pagenumber);
    
  }

  useEffect(()=>{
    console.log(...Array(pageCount));
  })

  const setNext = () =>{
    if (pagenumber < Math.floor(data.length / userperpage)-1)
    {
      setpagenumber(pagenumber+1);
    }
    else setpagenumber(pagenumber);
  }

  const changePage = (key) => {

    setpagenumber(key);
    
  }

   
  return (
   <>
    <div className='main-wrapper'>
   {
    users.length >0 &&      users.slice(pagesvisited, pagesvisited + userperpage).map((user) => {
                          return (
                           <div className="box">
                              <h2>{user.first_name}</h2>
                              <h3>{user.email}</h3>
                              <p>{user.gender}</p>

                          </div>
                      )
                  })
    }
   <div className='buttons'>

    <button className='button' onClick={setPrevious}>Prev</button>

          {
           
             [ ...Array(pageCount)].map((val,idx)=>{
              return (
                <div>  <button className='button'  onClick={()=>changePage(idx+1)}>{idx+1}</button>   </div>
              )
             })
           
          }    <button className='button' onClick={setNext}>Next</button>

   </div>
      
    </div>
   </>
  )
}

export default Paginate;

import React from 'react'
import Card from './Card'

export default function MovieList({movies}) {
  
 
  return (
    <>
    <div className='flex flex-wrap my-4 justify-center '>

       {
          movies.length==0?<center className='text-center text-blue-500 m-auto'> Please Search</center>:''
       }
       {
        movies.map((item)=>{
          return <Card  key={item.id}  data={item} />
        })
       }
    </div>
    </>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
    
    const [data, setdata] = useState([]);
    
console.log(data);
useEffect(() => {
  axios.get('https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7&fbclid=IwAR0mElYHRGdsF4sgq36ZNUseOz59wvp2vmDGTl83FsDfT7Zccv8vAUYZ3vA')
  .then((movies)=> setdata(movies.data.results))
     
  }, [])
  console.log(data);
  // console.log(data[0].original_language);
  // console.log('https://image.tmdb.org/t/p/w500'+ data[0].backdrop_path  )
  return <>

<div className='container overflow-auto'>
  <div className='row '>
        {data.map((i)=> ( 
       <div className='col-4 gap-3 text-center' key={i.id}>
       <h1 className=' text-center h6 p-1 '>{i.name}</h1> 
       <div className=''> 
       <img className='w-20' src={'https://image.tmdb.org/t/p/w500'+ i.poster_path} alt=""></img> </div>
       </div>
        ))} 
      </div>
</div>
      
  
  </>
}

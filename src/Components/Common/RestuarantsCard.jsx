import React,{useState, useEffect} from 'react'
import { Button } from '@nextui-org/react';

function Restuarants({title}) {
   const [data, setData] =  useState([]); 

   useEffect(()=> {
    fetch("./data.json")
    .then((response)=> {
        return response.json()
    })
    .then((jsonData)=> {
        setData(jsonData)
    })
   }, [])
  return (
    <section className='bg-[#F5FAFF] p-10'>
        <div className='w-[80%] mx-auto'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-1xl md:text-4xl mb-4 mt-4'>{title}</h2>
                <Button variant='outline' className="text-[#0E8BFF] text-sm lg:text-xl">See More</Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
                {
                    data.map((myData)=> (
                        <div key={myData.id}>
                            <img className='w-[400px] object-cover rounded-lg mb-3' src={myData.img} alt="" />
                            <h2 className='font-semibold text-lg mb-2'>{myData.title}</h2>
                            <p className='text-sm text-gray-600 mb-1'>{myData.des}</p>
                            <p className='text-sm text-gray-500'>{myData.tags}</p>
                            <Button color='primary' className='mt-3'>Reserve Now</Button>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Restuarants
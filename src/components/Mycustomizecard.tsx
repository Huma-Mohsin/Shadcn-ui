import React from 'react'
import {
    Card,
   
  } from "@/components/ui/card"
import Image from 'next/image'
  

const CardDemo = () => {
  return (
    <Card className='group duration-500 w-[450px] p-6 mt-10 divide-x-2 divide-gray-400 flex justify-start items-center hover:[500px] hover:p-8 hover:bg-blue-200'>
      
      <Image className="duration-500 mr-3 rounded-full w-[250px] h-[250px] group-hover:opacity-30 " src="/pic.avif" width={400} height={300 } alt='Dev Pic'/>
      <p className='pl-3 w-full group-hover:text-white duration-500 group-hover:pl-5'>I am A Web Developer...</p>
    </Card>
  )
}

export default CardDemo

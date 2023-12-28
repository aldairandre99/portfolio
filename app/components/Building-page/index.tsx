'use client'

import React from 'react'
import Image from "next/image";
import BuildingImg from "@/public/building-page-2.png"

export default function Index() {
  return (
    <div className='text-center'>
      <h1 className='text-lg mt-10 sm:text-3xl px-[16px] lg:text-center'>Construindo Pagina</h1>
      <div className='max-w-[400px] m-auto mt-24 mb-36 lg:w-auto lg:m-auto lg:mt-24 '>
        <Image alt='Building Image' src={BuildingImg} width={300} height={200} className='w-full h-auto' />
      </div>
    </div>
  )
}

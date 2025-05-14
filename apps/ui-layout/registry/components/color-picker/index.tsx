"use client"
import React, { useState } from 'react'
import { ColorPicker } from '@/components/ui/color-picker'

function index() {
    const [color,setColor] = useState("#002fff")
    const [color2,setColor2] = useState("#ff3c00")
  return (
    <div className='flex flex-col gap-2 items-center justify-center '>
      <ColorPicker color={color} onChange={(color) => setColor(color)} label="Pick A Color"/>
      <ColorPicker color={color2} onChange={(color) => setColor2(color)} label="Pick A Color With EyeDropper" isEyeDroppper/>
    </div>
  )
}

export default index

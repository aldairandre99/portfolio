"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { useMenu } from '@/components/contexts/NavBar';



const MenuIcon = () => {

  const [mounted, setMounted] = useState(false)
  const { isOn, changeMenu } = useMenu()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className={``} >
      {
        isOn ? (
          <XMarkIcon
            width={24}
            height={24}
            className='lg:hidden'
            onClick={() => {
              changeMenu(isOn);
            }
            }
          />
        ) : (<Bars3Icon className='w-6 h-6 stroke-gray-300 lg:hidden' onClick={() => changeMenu(isOn)
        } />)
      }
    </div>
  )
}

export default MenuIcon

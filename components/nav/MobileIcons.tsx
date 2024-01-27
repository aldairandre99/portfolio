"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
import {
  MoonIcon,
} from '@heroicons/react/24/outline';
import { useMenu } from '@/components/contexts/NavBar';

const MobileIcons = ({ hidden }: { hidden: boolean }) => {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { isOn, changeMenu } = useMenu()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`flex items-center lg:${hidden ? 'hidden' : null}`} >
      {
        theme === 'dark' ?
          <div suppressContentEditableWarning>
            <SunIcon className='w-6 h-6 stroke-gray-300 mr-[10px]' onClick={() => setTheme("light")} />
          </div>
          :
          <div suppressHydrationWarning>
            <MoonIcon className='w-6 h-6 stroke-gray-300 mr-[10px]' onClick={() => setTheme("dark")} />
          </div>
      }

      {
        isOn ? (
          <XMarkIcon
            width={24}
            height={24}
            onClick={() => {
              changeMenu(isOn);
            }
            }
          />
        ) : (<Bars3Icon className='w-6 h-6 stroke-gray-300' onClick={() => changeMenu(isOn)
        } />)
      }

    </div>
  )
}

export default MobileIcons

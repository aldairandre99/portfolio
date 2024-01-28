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

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { isOn, changeMenu } = useMenu()

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className={`flex items-center lg:${hidden ? 'hidden' : null}`} >
      {!mounted ? null : (
        <button
          className="bg-zinc-200 dark:bg-zinc-700 hover:brightness-90 p-2 rounded"
          onClick={
            currentTheme === "light"
              ? () => setTheme("dark")
              : () => setTheme("light")
          }
        >
          {currentTheme === "light" ? <MoonIcon className='w-6 h-6 stroke-gray-300 mr-[10px]' /> : <SunIcon className='w-6 h-6 stroke-gray-300 mr-[10px]' />}
        </button>
      )}

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

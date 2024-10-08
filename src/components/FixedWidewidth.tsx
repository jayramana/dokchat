import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const FixedWidewidth = ({className, children}:{className?:string, children:ReactNode}) => {
  return (
    <div className={cn('w-full mx-auto max-w-screen-xl px-2.5 md:px-20',className)}>{children}</div>
  )
}

export default FixedWidewidth;
import React from 'react'

type Props = {
  children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div>
      <nav className='bg-red-500 text-white'>
        This is auth nav bar
      </nav>
      {children}
    </div>
  )
}

export default layout
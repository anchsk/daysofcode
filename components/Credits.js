//import Link from 'next/link'

import { useState } from 'react'

export default function Credits() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 400,
          color: 'black',
          fontSize: '12px',
          padding: '12px',
          cursor: 'pointer',
        }}
      >
        {/* <a href='https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY'>
        Made for FrontEndMentors.io
      </a> */}
        {isOpen ? 'close' : 'info'}
      </div>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            height: '100vh',
            display: 'grid',
            placeItems: 'center',
            zIndex: 390,
            backgroundColor: 'rgba(255,255,255,0.4)'
            //opacity: .3,
          }}
        >
          {' '}
          <div
            style={{
              width: '240px',
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '18px',
              opacity: 1,
              lineHeight: 1.4,
              boxShadow: '5px 10px 20px rgba(0,0,0,.3)'
            }}
          >
           <h2 style={{paddingBottom: "6px"}}>Chat App</h2>
            <p>Solution for a{' '}
            <a style={{borderBottom: '1px solid black'}}href='https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY'>
              frontendmentors.io
            </a>{' '}
            front end challenge.</p>
          </div>
        </div>
      )}
    </>
  )
}

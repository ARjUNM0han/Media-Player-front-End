import React from 'react'


function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-body-tertiary">
        <div className="container">
          <div className="navbar-brand" >
            <i className="fa-solid fa-camera fa-beat-fade"/>
            <span className='ms-3 fs-4'>Media Player</span>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Header
import React from 'react'

function Footer() {
    let footerStyle = {
        position: "relative",
    // top: "100vh",
    margin:"10px",
    width: "100%"
    }
  return (
    <div className ="bg-dark text-light py-3 foot" style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; MyTodoList.com
      </p>

    </div>
  )
}

export default Footer

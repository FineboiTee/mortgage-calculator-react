import React from 'react'

 const Header = ({onClear}) => {
  return (

    <div className="header">
        <h2>Mortgage Calculator</h2> 
        <button id="clear" onClick={onClear}> Clear All</button> 
      
    </div>
  )
}

export default Header
import React from 'react'
import sledge from '../assets/images/illustration-empty.svg'


function EmptyResults() {
  return (
    <div id="empty-results-text" className="empty-results-text">
          <img src={sledge} alt=""/>
          <h2>Results shown here</h2>
          <p className="h2-text"> Complete the form and click “calculate repayments” to see what 
            your monthly repayments would be.</p>
      </div>
  )
}

export default EmptyResults
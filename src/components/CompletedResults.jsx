import React from 'react'


function CompletedResults( {monthly, total}) {
  return (
    <div className="calculation" id="calculation">
        <h2>Your results</h2>
        <p className="h2-text">
           Your results are shown below based on the information you provided. 
           To adjust the results, edit the form and click “calculate repayments” again.
        </p>
        <div className="results">
            <div className="monthly">
               <p className="h2-text">Your monthly repayments</p>
               <span id="monthly-result" className="monthly-result">{monthly}</span>
            </div>
            <div className="line"></div>
            <div className="total">
                <p className="h2-text">Total you'll repay over the term</p>
                <span id="total-result" className="total-result">{total}</span>
            </div>
        </div>
    </div>
  )
}

export default CompletedResults
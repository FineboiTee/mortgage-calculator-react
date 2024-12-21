import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Header from './Header'
import EmptyResults from './EmptyResults';
import CompletedResults from './CompletedResults'




export default function Form() {

      const [amount, setAmount] = useState('');
      const [term, setTerm] = useState('');
      const [rate, setRate] = useState('');
      const [mortgageType, setMortgageType] = useState('');
      const [monthlyPayment, setMonthlyPayment] = useState('');
      const [totalPayment, setTotalPayment] = useState('');
      const [validationErrors, setValidationErrors] = useState({});
      const [showResults, setShowResults] = useState(false);

      const ref = useRef()


    useEffect(() => {
      setShowResults(false);
        }, []);

      function handleCalculate () {
            setValidationErrors({});
            let isValid = true;
            
            if (isNaN(amount) || amount <= 0) {
            setValidationErrors((prev) => ({ ...prev, amount: true }));
            isValid = false;
            }
        
            if (isNaN(term) || term <= 0) {
            setValidationErrors((prev) => ({ ...prev, term: true }));
            isValid = false;
            }
        
            if (isNaN(rate) || rate <= 0) {
            setValidationErrors((prev) => ({ ...prev, rate: true }));
            isValid = false;
            }
        
            if (!mortgageType) {
            setValidationErrors((prev) => ({ ...prev, type: true }));
            isValid = false;
            }
        
            if (isValid) {
            let monthlyPaymentCalc = 0;
            let totalPaymentCalc = 0;
        
            if (mortgageType === 'repayment') {
                const monthlyRate = rate / 100 / 12;
                const n = term * 12;
                monthlyPaymentCalc = (amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -n));
                totalPaymentCalc = monthlyPaymentCalc * n;
            } else if (mortgageType === 'interest-only') {
                monthlyPaymentCalc = (amount * rate / 100) / 12;
                totalPaymentCalc = monthlyPaymentCalc * term * 12;
            }
        
            setMonthlyPayment(monthlyPaymentCalc.toFixed(2));
            setTotalPayment(totalPaymentCalc.toFixed(2));
            setShowResults(true);
            } else {
            setMonthlyPayment('');
            setTotalPayment('');
            setShowResults(false);
            }
        };


              
  function handleClear (ev) {
    ev.preventDefault();
    ref.current.reset();
    setAmount('');
    setTerm('');
    setRate('');
    setMortgageType('');
    setMonthlyPayment('');
    setTotalPayment('');
    setValidationErrors({});
    setShowResults(false);
  }

    return (
        <>
            <div className="left-side">
            <form id="mortgage-form" ref={ref}>
            <Header onClear={handleClear}/>
            <div className="entire-form">
                <label className="h2-text" htmlFor="mortgage-amount">Mortgage Amount</label>
                <div className={`input-div ${validationErrors.amount ? 'error' : null}`}
                
                id="input-div-id">
                <p className="symbol">£</p>
                <input 
                id="mortgage-amount" 
                type="number" 
                name="mortgage-amount" 
                onChange={(e)=> setAmount(e.target.value)}
                required />
                </div>
                {
                    validationErrors.amount ? <p className='alert' 
                    id="alert-for-amount">This field is required</p> : null
                }
                
            </div>

            <div className="entire-form">
                <div className="form-col">
                <div className="entire-form">
                    <label className="h2-text" htmlFor="mortgage-term">Mortgage Term</label>
                    <div className={`input-div ${validationErrors.amount ? 'error' : null}`}
                    
                    id="input-div2">
                    <input 
                    type="number" 
                    name="mortgage-term" 
                    id="mortgage-term" 
                    onChange={(e)=> setTerm(e.target.value)}
                    required />
                    <p className="symbol">years</p>
                    </div>
                    {
                    validationErrors.term ? <p className='alert' id="alert-for-amount">This field is required</p> : null
                    }

                </div>
                <div className="entire-form">
                    <label className="h2-text" htmlFor="Interest-rate">Interest-rate</label>
                    <div className={`input-div ${validationErrors.amount ? 'error' : null}`}
                    id="input-div3">
                    <input 
                    type="number" 
                    name="Interest-rate" 
                    id="Interest-rate" 
                    step="0.01" 
                    onChange={(e)=> setRate(e.target.value)}
                    required />
                    <p className="symbol">%</p>
                    </div>
                    {
                    validationErrors.amount ? <p className='alert' id="alert-for-amount">This field is required</p> : null
                    }
            
                    </div>
                </div>
            </div>

            <div className="entire-form">
                <label className="h2-text">Mortgage Type</label>

                <div className="radio-inputs">
                <input id="repayment" 
                type="radio" 
                className="mortgage-type" 
                name="mortgage-type" 
                value="repayment" 
                onChange={(e)=> setMortgageType(e.target.value)}
                required />
                <label htmlFor="repayment">Repayment</label>
                </div>

                <div className="radio-inputs">
                <input 
                id="interest-only" 
                type="radio" 
                className="mortgage-type" 
                name="mortgage-type" 
                value="interest-only" 
                onChange={(e)=> setMortgageType(e.target.value)}
                required />
                <label htmlFor="interest-only">Interest Only</label>
                </div>
                {
                    validationErrors.amount ? <p className='alert' 
                    id="alert-for-amount">This field is required</p> : null
                }
                </div>

            <div className="entire-form">
                <button 
                id="calculate-btn" 
                type="button" 
                className="calculate-btn"
                onClick={handleCalculate}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/>
                </svg>
                Calculate Repayments
                </button>
            </div>
            </form>
        </div>
        
        <div className='right-side'>
            
            {
                showResults? <CompletedResults monthly={monthlyPayment} total ={totalPayment}/> :
                <EmptyResults/>
            }
            
            


        </div> 

        </>


    





    )
};

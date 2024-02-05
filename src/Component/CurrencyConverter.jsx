import React from 'react'

function CurrencyConverter() {
    return (
        <div className="currency-converter">
            <div className="box"></div>
            <div className="data">
                <h1>Currency Converter</h1>
                <div className="input-container">
                    <label htmlFor="amt">Amount: </label>
                    <input type="number" id='amt' />
                </div>
                <div className="input-container">
                    <label htmlFor="from-currency">From Currency: </label>
                    <select id="from-currency">
                        <option value="USD">USD - United States Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="GBP">GBP - British Pound Sterling</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                        <option value="AUD">AUD - Australian Dollar</option>
                        <option value="CAD">CAD - Canadian Dollar</option>
                        <option value="CHF">CHF - Swiss Franc</option>
                        <option value="CNY">CNY - Chinese Yuan</option>
                        <option value="BRL">BRL - Brazilian Real</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="to-currency">To Currency: </label>
                    <select id="to-currency">
                        <option value="USD">USD - United States Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="GBP">GBP - British Pound Sterling</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                        <option value="AUD">AUD - Australian Dollar</option>
                        <option value="CAD">CAD - Canadian Dollar</option>
                        <option value="CHF">CHF - Swiss Franc</option>
                        <option value="CNY">CNY - Chinese Yuan</option>
                        <option value="BRL">BRL - Brazilian Real</option>
                    </select>
                </div>
                <div className="result">
                    <p>Converted Value is : x</p>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConverter
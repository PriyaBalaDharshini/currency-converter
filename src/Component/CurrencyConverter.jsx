import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("INR")
    const [convertedvalue, setConvertedvalue] = useState(null)
    const [exchangeRate, setExchangeRate] = useState(null)

    useEffect(() => {
        const getExchangeRate = async () => {
            try {
                let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
                let result = await axios.get(url);
                setExchangeRate(result.data.rates[toCurrency])

                console.log(result);

            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        }
        getExchangeRate()

    }, [fromCurrency, toCurrency])

    useEffect(() => {
        if (exchangeRate !== null) {
            setConvertedvalue((amount * exchangeRate).toFixed(2))
        }
    }, [amount, exchangeRate])

    const handleAmountChnage = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(isNaN(value) ? 0 : value);
    }
    const handleFromCurrencyChnage = (e) => {
        setFromCurrency(e.target.value)
    }
    const handletoCurrencyChnage = (e) => {
        setToCurrency(e.target.value)
    }


    return (
        <div className="currency-converter">
            <div className="box"></div>
            <div className="data">
                <h1>Currency Converter</h1>
                <div className="input-container">
                    <label htmlFor="amt">Amount: </label>
                    <input type="number" id='amt' value={amount} onChange={handleAmountChnage} />
                </div>
                <div className="input-container">
                    <label htmlFor="from-currency">From Currency: </label>
                    <select id="from-currency" value={fromCurrency} onChange={handleFromCurrencyChnage}>
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
                    <select id="to-currency" value={toCurrency} onChange={handletoCurrencyChnage}>
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
                    <p>{amount} of {fromCurrency} is equal to {convertedvalue} {toCurrency}</p>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConverter
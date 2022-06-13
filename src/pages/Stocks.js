import React from 'react';
import StocksData from '../components/StocksData';
import { Link } from 'react-router-dom';

const Stocks = (props) => {
    return (
        <div className="stocks">
            {StocksData.map((stock, index) => {
                const { name, symbol, lastPrice, change, high, low, open } = stock;
                
                return (
                    <Link key={index} to={`/stocks/${symbol}`}>
                    <h2>{name}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default Stocks;
import { getConfig } from '@testing-library/react';
import { useState, useEffect } from 'react'
import StocksData from '../components/StocksData'

const Price = (props) => {
    const symbol = StocksData.symbol;

    const [stock, setStock] = useState(null);

    const getStock = async () => {
        setStock(data)
    }

    useEffect(() => {
        getConfig()
    }, [])

    const loading = () => {
        return <h2>Now Loading...</h2>
    }

    const loaded = () => {
        return (
            <div>
                <h1>
                    {stock.name}/{stock.symbol}
                </h1>
                <h2>
                   Price: {stock.lastPrice}
                </h2>
                <h3>
                    Change: {stock.change}
                </h3>
                <h3>
                    High: {stock.high}
                </h3>
                <h3>
                    Low: {stock.low}
                </h3>
                <h3>
                    Open: {stock.open}
                </h3>
            </div>
        )
    }
    return stock ? loaded() : loading();
};

export default Price;
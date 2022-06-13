import { getConfig } from '@testing-library/react';
import { useState, useEffect } from 'react';

const Price = (props) => {

    const stock = props.stockData.filter(stock => stock.symbol === props.match.params.symbol)[0];

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
};

export default Price;
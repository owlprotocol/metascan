import { useEffect, useState } from 'react';
import axios from 'axios';

function useEthPrice() {
    const [price, setPrice] = useState<string>('0');

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://api.coinbase.com/v2/exchange-rates?currency=ETH');
                setPrice(data.data.rates.USD);
            } catch (err) {
                console.log(err);
            }
        })();
    });
    return parseFloat(price);
}

export default useEthPrice;

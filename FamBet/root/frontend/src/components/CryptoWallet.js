import React, { useState } from 'react';
import axios from 'axios';

const CryptoWallet = () => {
    const [currency, setCurrency] = useState('BTC');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleDeposit = async () => {
        try {
            const response = await axios.post('/crypto/deposit', { currency, amount });
            setMessage(response.data);
        } catch (err) {
            console.error(err);
            setMessage('Error depositing');
        }
    };

    const handleWithdraw = async () => {
        try {
            const response = await axios.post('/crypto/withdraw', { currency, amount });
            setMessage(response.data);
        } catch (err) {
            console.error(err);
            setMessage('Error withdrawing');
        }
    };

    return (
        <div>
            <h1>Crypto Wallet</h1>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
            </select>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleWithdraw}>Withdraw</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CryptoWallet;

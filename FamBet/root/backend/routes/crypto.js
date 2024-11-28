const express = require('express');
const router = express.Router();

// Mock blockchain interactions
const mockBalance = { BTC: 10, ETH: 50 };

// Deposit
router.post('/deposit', (req, res) => {
    const { userId, currency, amount } = req.body;
    // Verify user and amount
    if (!mockBalance[currency]) return res.status(400).send("Unsupported currency");
    if (amount <= 0) return res.status(400).send("Invalid amount");

    mockBalance[currency] += amount;
    res.status(200).send(`Deposited ${amount} ${currency}`);
});

// Withdraw
router.post('/withdraw', (req, res) => {
    const { userId, currency, amount } = req.body;
    // Verify user and amount
    if (!mockBalance[currency]) return res.status(400).send("Unsupported currency");
    if (mockBalance[currency] < amount) return res.status(400).send("Insufficient balance");

    mockBalance[currency] -= amount;
    res.status(200).send(`Withdrew ${amount} ${currency}`);
});

module.exports = router;

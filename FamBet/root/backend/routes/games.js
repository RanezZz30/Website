const express = require('express');
const { generateRandomSeed, getRandomNumber } = require('../utils/random');
const router = express.Router();

// Mines game
router.post('/mines', (req, res) => {
    const { clientSeed, gridSize, diamonds } = req.body;
    const serverSeed = 'server-secret-seed'; // Replace with dynamic seed generation
    const seed = generateRandomSeed(serverSeed, clientSeed);

    const grid = [];
    const bombCount = gridSize * gridSize - diamonds;
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.push(i < bombCount ? 'bomb' : 'diamond');
    }

    // Shuffle grid using provably fair randomness
    for (let i = grid.length - 1; i > 0; i--) {
        const j = getRandomNumber(seed, 0, i);
        [grid[i], grid[j]] = [grid[j], grid[i]];
    }

    res.json({ grid, seed });
});

module.exports = router;

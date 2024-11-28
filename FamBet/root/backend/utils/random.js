const crypto = require('crypto');

// Provably fair random number generator
const generateRandomSeed = (serverSeed, clientSeed) => {
    const hash = crypto.createHash('sha256');
    hash.update(serverSeed + clientSeed);
    return hash.digest('hex');
};

const getRandomNumber = (seed, min, max) => {
    const hash = crypto.createHash('sha256').update(seed).digest('hex');
    const random = parseInt(hash.substr(0, 8), 16);
    return min + (random % (max - min + 1));
};

module.exports = { generateRandomSeed, getRandomNumber };

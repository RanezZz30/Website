import React, { useState } from 'react';
import axios from 'axios';

const MinesGame = () => {
    const [grid, setGrid] = useState([]);
    const [clientSeed, setClientSeed] = useState('');
    const [gridSize, setGridSize] = useState(5);
    const [diamonds, setDiamonds] = useState(5);

    const startGame = async () => {
        try {
            const response = await axios.post('/games/mines', { clientSeed, gridSize, diamonds });
            setGrid(response.data.grid);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Mines Game</h1>
            <input
                type="text"
                placeholder="Client Seed"
                value={clientSeed}
                onChange={(e) => setClientSeed(e.target.value)}
            />
            <button onClick={startGame}>Start Game</button>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 50px)` }}>
                {grid.map((cell, index) => (
                    <div
                        key={index}
                        style={{
                            width: 50,
                            height: 50,
                            border: '1px solid black',
                            textAlign: 'center',
                            lineHeight: '50px',
                            backgroundColor: 'lightgray',
                        }}
                    >
                        {cell === 'diamond' ? '💎' : '💣'}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MinesGame;

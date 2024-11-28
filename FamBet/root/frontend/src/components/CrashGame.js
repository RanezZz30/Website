import React, { useState, useEffect } from 'react';

const CrashGame = () => {
    const [multiplier, setMultiplier] = useState(1);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setMultiplier(prev => prev + 0.01);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => {
        setIsRunning(false);
        alert(`You cashed out at ${multiplier.toFixed(2)}x`);
    };

    return (
        <div>
            <h1>Crash Game</h1>
            <p>Multiplier: {multiplier.toFixed(2)}x</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default CrashGame;

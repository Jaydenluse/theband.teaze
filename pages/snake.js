// snake.js
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SnakeModal from '../components/SnakeModal.js';

const Snake = () => {
    const canvasSize = 600;
    const snakePartSize = 20;
    const canvasRef = useRef(null);
    const initialSnakeLength = 3;
    const initialSnake = Array.from({ length: initialSnakeLength }, (_, i) => {
        return { x: 200 - i * snakePartSize, y: 200 };
    });
    const [snake, setSnake] = useState(initialSnake);
    const [food, setFood] = useState({ x: 300, y: 300 });
    const [direction, setDirection] = useState({ x: 0, y: 0 });
    const [speed, setSpeed] = useState(100);
    const [score, setScore] = useState(0);
    const [foodEatenCount, setFoodEatenCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [pointMultiplier, setPointMultiplier] = useState(1);
    const [wallBreakerActive, setWallBreakerActive] = useState(false);
    const [wallBreakerStartTime, setWallBreakerStartTime] = useState(null);
    const [wallBreakerTimeLeft, setWallBreakerTimeLeft] = useState(0);


    const fillScreen = () => {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        context.font = "15px Inter, sans-serif";
        context.fillStyle = "lime";
        context.fillText(`Score: ${score}`, 20, 30);
        context.fillText(`Speed: ${score}`, 20, 55);

        // Draw the snake
        context.fillStyle = 'lime';
        snake.forEach(part => context.fillRect(part.x, part.y, snakePartSize, snakePartSize));
        
        // Draw the food
        context.fillStyle = (foodEatenCount % 10 === 0 && foodEatenCount !== 0) ? 'gold' : 'red';
        context.fillRect(food.x, food.y, snakePartSize, snakePartSize);
        return;
    }

    const activateWallBreaker = () => {
        setWallBreakerActive(true);
        const currentTime = Date.now();
        setWallBreakerStartTime(currentTime);
        setIsModalOpen(false);
        setGameStarted(true);
        setTimeout(() => {
            setWallBreakerActive(false);
            setWallBreakerStartTime(null);
        }, 30000); // Boost lasts for 30 seconds
    };

    const resetSpeed = () => {
        setSpeed(100);
        setIsModalOpen(false);
        setGameStarted(true);
    };

    const keepSpeed = () => {
        const minSpeed = 200; // The higher the number, the slower the speed
        const newSpeed = Math.min(speed + 10, minSpeed);
        setSpeed(newSpeed);
        setIsModalOpen(false);
        setGameStarted(true);
    };

    const increasePointMultiplier = () => {
        setPointMultiplier(prevMultiplier => prevMultiplier * 2);
        setIsModalOpen(false);
        setGameStarted(true);
    };
    
    const resetSnakeSize = () => {
        const resizedSnake = initialSnake.map((part, index) => {
            if (index === 0) {
                return { x: snake[0].x, y: snake[0].y };
            }
            return { x: snake[0].x - index * snakePartSize, y: snake[0].y };
        });
        setSnake(resizedSnake);
        setIsModalOpen(false);
        setGameStarted(true);
    };

    const checkCollision = (head, snake) => {
        if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
            return true;
        }
    
        for (let segment of snake) {
            if (head.x === segment.x && head.y === segment.y) {
                return true;
            }
        }
    
        return false;
    };

    const handleKeyDown = (e) => {
        if (isModalOpen) {
            if (e.keyCode === 32) {
                setIsModalOpen(false);
                setGameStarted(true);
            }
            return;
        }

        if (!gameStarted) {
            switch (e.keyCode) {
                case 37: // left
                    setDirection({ x: -20, y: 0 });
                    break;
                case 38: // up
                    setDirection({ x: 0, y: -20 });
                    break;
                case 39: // right
                    setDirection({ x: 20, y: 0 });
                    break;
                case 40: // down
                    setDirection({ x: 0, y: 20 });
                    break;
                default:
                    return; // If it's not an arrow key, don't do anything.
            }
            setGameStarted(true);
        } else {
                // Normal direction change logic
                switch (e.keyCode) {
                    case 37: // left
                        if (direction.y !== 0) setDirection({ x: -20, y: 0 });
                        break;
                    case 38: // up
                        if (direction.x !== 0) setDirection({ x: 0, y: -20 });
                        break;
                    case 39: // right
                        if (direction.y !== 0) setDirection({ x: 20, y: 0 });
                        break;
                    case 40: // down
                        if (direction.x !== 0) setDirection({ x: 0, y: 20 });
                        break;
                    default:
                        break;
                }
            }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [direction, gameStarted]);

    useEffect(() => {
        const speedIncreaseMilestone = 10;
    
        if (foodEatenCount % speedIncreaseMilestone === 1 && foodEatenCount !== 1) {
            const speedDecrement = 10; 
            const newSpeed = Math.max(speed - speedDecrement, 50);
            setSpeed(newSpeed);
        }
    }, [foodEatenCount]);

    useEffect(() => {
        if (foodEatenCount % 10 === 1 && foodEatenCount > 1) {
            setIsModalOpen(true);
            setGameStarted(false);
        }
    }, [foodEatenCount]);

    const closeModal = () => {
        setIsModalOpen(false);
        setGameStarted(true);
    };

    const runGame = () => {
        if (!gameStarted) return;
    
        let newSnake = [...snake];
        let head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };
    
        // Handling wall breaker
        if (wallBreakerActive) {
            const timeElapsed = Date.now() - wallBreakerStartTime;
            setWallBreakerTimeLeft(Math.max(0, 30 - Math.floor(timeElapsed / 1000)));
            if (head.x >= canvasSize) head.x = 0;
            else if (head.x < 0) head.x = canvasSize - snakePartSize;
    
            if (head.y >= canvasSize) head.y = 0;
            else if (head.y < 0) head.y = canvasSize - snakePartSize;
        }
    
        // Check collision only if Wall Breaker is not active
        if (!wallBreakerActive && checkCollision(head, newSnake)) {
            // Reset game on collision
            setSnake(initialSnake);
            setDirection({ x: 0, y: 0 });
            setScore(0);
            setSpeed(100);
            setFoodEatenCount(0);
            setGameStarted(false); 
            setPointMultiplier(1);
            return; // Return here to stop executing further code
        }
    
        newSnake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            setFoodEatenCount(prevCount => prevCount + 1);
            setFood({ x: Math.round(Math.random() * (canvasSize / snakePartSize - 1)) * snakePartSize, y: Math.round(Math.random() * (canvasSize / snakePartSize - 1)) * snakePartSize });
            setScore(prevScore => prevScore + (1 * pointMultiplier));
        } else {
            newSnake.pop();
        }
        setSnake(newSnake);
    };

    useEffect(() => {
        const gameInterval = setInterval(runGame, speed);
        return () => clearInterval(gameInterval);
    }, [snake, direction, speed, food, foodEatenCount, gameStarted]);

    useEffect(() => {
        if (!gameStarted) {
            fillScreen()
        }
        
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
        context.font = "14px Inter, sans-serif";
        context.fillStyle = "lime";
        context.fillText(`Score: ${score}`, 20, 30);
        context.fillText(`Speed: ${speed}`, 20, 52);
        if (wallBreakerActive) {
            context.font = "14px Inter, sans-serif";
            context.fillStyle = "lime";
            context.fillText(`Wall Breaker: ${wallBreakerTimeLeft} sec`, 20, canvasSize - 20);
        }
    
        // Draw the snake
        context.fillStyle = 'lime';
        snake.forEach(part => context.fillRect(part.x, part.y, snakePartSize, snakePartSize));
        
        // Draw the food
        context.fillStyle = (foodEatenCount % 10 === 0 && foodEatenCount !== 0) ? 'gold' : 'red';
        context.fillRect(food.x, food.y, snakePartSize, snakePartSize);

    }, [snake, food, score, foodEatenCount, gameStarted]);

    return (
        <>
            <Header/>
            <Footer/>
            <SnakeModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="text-container p-4 border border-lime-400 rounded-md glowing-border">
                    <h2 className="text-2xl font-bold text-lime-400 mb-6 text-center">- - - - Python's Parlor - - - -</h2>
                    {foodEatenCount != 11 ?
                        (
                        <>
                            <button className="mb-4 text-lime-400 text-center w-full py-2 hover:text-lime-200 hover:scale-105 transition duration-300" onClick={resetSnakeSize}>
                                Reset Snake Size
                            </button>
                            <button className="mb-4 text-lime-400 text-center w-full py-2 hover:text-lime-200 hover:scale-105 transition duration-300" onClick={increasePointMultiplier}>
                                Increase Score Multiplier (Current: {pointMultiplier}x)
                            </button>
                            <button className="text-lime-400 text-center w-full py-2 hover:text-lime-200 hover:scale-105 transition duration-300" onClick={keepSpeed}>
                                Keep Same Speed
                            </button>
                        </>
                        ) : 
                        (
                        <>
                            <button className="mb-4 text-lime-400 text-center w-full py-2 hover:text-lime-200 hover:scale-105 transition duration-300" onClick={resetSnakeSize}>
                                +1 Life
                            </button>
                            <button className="mb-4 text-lime-400 text-center w-full py-2 hover:text-lime-200 hover:scale-105 transition duration-300" onClick={resetSpeed}>
                                Reset Speed to 100
                            </button>
                            <button className="text-lime-400 text-center w-full py-2 hover:text-lime-200 hover:scale-105 transition duration-300" onClick={activateWallBreaker}>
                                Go Thru Walls (30 seconds)
                            </button>
                        </>
                        )
                    }
                </div>
            </SnakeModal>


            <div className="flex justify-center items-center h-screen bg-black">
            {/* Canvas and Rules Container */}
            <div className="flex justify-center flex-1 pl-80">
                {/* Canvas Container */}
                <div style={{ maxWidth: '600px' }}>
                    <canvas ref={canvasRef} width={canvasSize} height={canvasSize} className="snake-canvas" />
                </div>

                {/* Rules Section */}
                <div className="rules-container" style={{ width: '450px', padding: '80px' }}>
                    <h3 className="text-lime-400 text-xl font-bold mb-4">Game Rules</h3>
                    <ul className="text-lime-400 text-sm list-disc pl-5">
                        <li className="mb-2">Use the arrow keys to move the snake.</li>
                        <li className="mb-4">As you eat tokens your score will increase by a multiplier that starts at 1x.</li>
                        <li className="mb-2">Every 10th token eaten the speed will increase gradually, you will also have a choice of various boosts.</li>
                        <ul className="pl-8 list-disc">
                            <li className="mb-2 text-xs">Reset Snake Size</li>
                            <li className="mb-2 text-xs">Points Multiplier (compounds)</li>
                            <li className="mb-4 text-xs">Keep Same Speed</li>
                        </ul>
                        <li className="mb-2">Every 50th token you will have a choice of better boosts.</li>
                        <ul className="pl-8 list-disc">
                            <li className="mb-2 text-xs">+1 Life</li>
                            <li className="mb-2 text-xs">Reset Speed to 100</li>
                            <li className="mb-2 text-xs">Go Thru Walls (30 seconds)</li>
                        </ul>
                        {/* Add more rules as needed */}
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
};

export default Snake;
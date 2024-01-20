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

    const decreaseSpeed = () => {
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
        if (checkCollision(head, newSnake)) {
            setSnake(initialSnake);
            setDirection({ x: 0, y: 0 });
            setScore(0);
            setSpeed(100);
            setFoodEatenCount(0);
            setGameStarted(false); 
            setPointMultiplier(1);
        } else {
            newSnake.unshift(head);
            if (head.x === food.x && head.y === food.y) {
                setFoodEatenCount(prevCount => prevCount + 1);
                setFood({ x: Math.round(Math.random() * (canvasSize / snakePartSize - 1)) * snakePartSize, y: Math.round(Math.random() * (canvasSize / snakePartSize - 1)) * snakePartSize });
                setScore(prevScore => prevScore + (1 * pointMultiplier));
            } else {
                newSnake.pop();
            }
            setSnake(newSnake);
        }
    };

    useEffect(() => {
        const gameInterval = setInterval(runGame, speed);
        return () => clearInterval(gameInterval);
    }, [snake, direction, speed, food, foodEatenCount, gameStarted]);

    useEffect(() => {
        if (!gameStarted) {
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
        
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
        context.font = "15px Inter, sans-serif";
        context.fillStyle = "lime";
        context.fillText(`Score: ${score}`, 20, 30);
        context.fillText(`Speed: ${speed}`, 20, 55);
    
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
                    <button className="mb-4 text-lime-400 text-center w-full py-2 hover:text-lime-200 hover:scale-105 transition duration-300" onClick={resetSnakeSize}>
                        Reset Snake Size
                    </button>
                    <button className="mb-4 text-lime-400 text-center w-full py-2 hover:text-lime-200 hover:scale-105 transition duration-300" onClick={increasePointMultiplier}>
                        Increase Score Multiplier (Current: {pointMultiplier}x)
                    </button>
                    <button className="text-lime-400 text-center w-full py-2 hover:text-lime-200 hover:scale-105 transition duration-300" onClick={decreaseSpeed}>
                        Keep Same Speed
                    </button>
                </div>
            </SnakeModal>
            <div className="flex justify-center items-center h-screen bg-black">
                <canvas ref={canvasRef} width={canvasSize} height={canvasSize} className="snake-canvas" />
            </div>
        </>
    );
};

export default Snake;
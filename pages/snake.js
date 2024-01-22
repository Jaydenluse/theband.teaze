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
    const [lives, setLives] = useState(1);  // Starting with 1 life
    const [leaderboard, setLeaderboard] = useState([]);
    const [usernameModalOpen, setUsernameModalOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [isPaused, setIsPaused] = useState(false);


    const saveScore = async (username, score) => {
        console.log(`Saving score for ${username}: ${score}`);
        try {
            const response = await fetch('http://localhost:5000/api/scores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, score }),
            });
    
            const data = await response.json();
            if (!response.ok) {
                console.error('Score submission failed', data);
                throw new Error('Score submission failed');
            }
    
            console.log('Score saved successfully:', data);
            await fetchLeaderboard();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchLeaderboard = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/scores');
            if (!response.ok) throw new Error('Failed to load leaderboard');
            const data = await response.json();
            setLeaderboard(data);
        } catch (error) {
            console.error('Error loading leaderboard:', error);
        }
    };
    
    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const gameOver = () => {
        if (score >= 1) {
            setUsernameModalOpen(true); // Show username modal
        } else {
            resetGame();
        }
    };
    
    const resetGame = () => {
        // Reset game state
        setSnake(initialSnake);
        setDirection({ x: 0, y: 0 });
        setScore(0);
        setSpeed(100);
        setFoodEatenCount(0);
        setGameStarted(false);
        setPointMultiplier(1);
        setLives(1);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUsernameSubmit();
        }
    };
    
    const handleUsernameSubmit = () => {
        if (username) {
            saveScore(username, score).then(() => {
                setUsernameModalOpen(false); // Close the modal
                resetGame(); // Reset the game
            });
        } else {
            alert("Please enter a username.");
        }
    };


    const fillScreen = () => {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        context.font = "15px Inter, sans-serif";
        context.fillStyle = "lime";
        context.fillText(`Score: ${score}`, 20, 30);
        context.fillText(`Speed: ${score}`, 20, 55);

        const multiplierText = `${pointMultiplier}x`;
        const textWidth = context.measureText(multiplierText).width;
        const multiplierPosX = 570 - textWidth; // Adjust the position based on the text width
        context.fillText(multiplierText, multiplierPosX, 30);

        for (let i = 0; i < lives; i++) {
            context.fillText("♥", 20 + (i * 20), 74); // Adjust position as needed
        }

        // Draw the snake
        context.fillStyle = 'lime';
        snake.forEach(part => context.fillRect(part.x, part.y, snakePartSize, snakePartSize));
        
        // Draw the food
        context.fillStyle = (foodEatenCount % 10 === 0 && foodEatenCount !== 0) ? 'gold' : 'red';
        context.fillRect(food.x, food.y, snakePartSize, snakePartSize);
        return;
    }

    const addLife = () => {
        setLives(lives => {
            const newLives = lives + 1;
            console.log("Adding a life. Current lives: ", lives, "New lives count: ", newLives);
            return newLives;
        });
        setIsModalOpen(false);
        setGameStarted(true);
    };

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

    const getRandomFoodPosition = () => {
        let foodPosition;
        let collision;
    
        do {
            foodPosition = {
                x: Math.floor(Math.random() * (canvasSize / snakePartSize)) * snakePartSize,
                y: Math.floor(Math.random() * (canvasSize / snakePartSize)) * snakePartSize
            };
    
            // Check for collision with the snake
            collision = snake.some(segment => segment.x === foodPosition.x && segment.y === foodPosition.y);
        } while (collision);
    
        return foodPosition;
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
    
    const halveSnakeSize = () => {
        const halfLength = Math.ceil(snake.length / 2);
        const newSnake = snake.slice(0, halfLength);
        setSnake(newSnake);
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
        if (isModalOpen || usernameModalOpen || isPaused) return;
    
        let newDirection = { ...direction };
        switch (e.keyCode) {
            case 37: // left
                if (direction.x === 0) newDirection = { x: -20, y: 0 };
                break;
            case 38: // up
                if (direction.y === 0) newDirection = { x: 0, y: -20 };
                break;
            case 39: // right
                if (direction.x === 0) newDirection = { x: 20, y: 0 };
                break;
            case 40: // down
                if (direction.y === 0) newDirection = { x: 0, y: 20 };
                break;
            case 32: // space bar for pause/unpause
                setIsPaused(prev => !prev);
                return;
            default:
                return;
        }
    
        if (!gameStarted) setGameStarted(true);
        setDirection(newDirection);
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
        if (!gameStarted || usernameModalOpen || isPaused) return;
    
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
        const hasCollision = checkCollision(head, newSnake);
        if (!wallBreakerActive && hasCollision) {
            if (lives > 1) {
                setLives(lives => lives - 1);
                setPointMultiplier(1)
                setSnake(initialSnake);
                setDirection({ x: 0, y: 0 }); // Stop the snake
                setGameStarted(false); // Require a key press to start again
                return false; // Continue the game with reduced life
            } else {
                // Game over logic
                gameOver()
                return true; // End the game
            }
        }
    
        newSnake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            setFoodEatenCount(prevCount => prevCount + 1);
            setFood(getRandomFoodPosition()); 
            setScore(prevScore => prevScore + (1 * pointMultiplier));
        } else {
            newSnake.pop();
        }
        setSnake(newSnake);
    };

    useEffect(() => {
        if (!gameStarted || usernameModalOpen || isPaused) return;
    
        const gameInterval = setInterval(runGame, speed);
    
        return () => clearInterval(gameInterval);
    }, [gameStarted, isPaused, usernameModalOpen, speed, runGame]);

    useEffect(() => {
        fillScreen(); // Call fillScreen to update the canvas including lives
    }, [lives]);

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
        
        const multiplierText = `${pointMultiplier}x`;
        const textWidth = context.measureText(multiplierText).width;
        const multiplierPosX = 580 - textWidth; // Adjust the position based on the text width
        context.fillText(multiplierText, multiplierPosX, 30);

        for (let i = 0; i < lives; i++) {
            context.fillText("♥", 20 + (i * 20), 74); // Adjust position as needed
        }
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

    }, [snake, food, score, foodEatenCount, gameStarted, lives]);

    return (
        <>
            <Header/>
            <Footer/>
            {isPaused && (
            <div className="pause-modal">
                <p className="pause-modal-content">Paused</p>
            </div>
            )}
            <SnakeModal isOpen={usernameModalOpen} onClose={() => setUsernameModalOpen(false)}>
            <div className="username-input-container">
                <input
                    type="text"
                    maxLength="3"
                    placeholder="Enter Username"
                    style={{
                        backgroundColor: 'black',
                        color: 'lime',
                        border: '2px solid lime',
                        outline: 'none',
                        padding: '10px',
                        width: '200px',
                        borderRadius: '5px',
                        fontSize: '16px',
                        textAlign: 'center',
                        transition: 'background-color 0.3s ease',
                        '::placeholder': {
                            color: 'rgba(255, 255, 255, 0.5)'
                        },
                        ':focus': {
                            backgroundColor: '#32CD32'  
                        }
                    }}
                    className="username-input"
                    onChange={(e) => setUsername(e.target.value.toUpperCase().substring(0, 6))}
                    onKeyPress={(e) => handleKeyPress(e)}
                    value={username}
                />
                    <p style={{ color: 'lime', fontSize: '12px', marginTop: '10px' }}>
                        Press 'Enter' to submit
                    </p>
            </div>
            </SnakeModal>
            <SnakeModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="text-container p-4 border border-lime-400 rounded-md glowing-border">
                    <h2 className="text-2xl font-bold green mb-6 text-center">- - - - Python's Parlor - - - -</h2>
                    {(foodEatenCount % 50) != 1 ? 
                        (
                        <>
                            <button className="mb-4 green text-center w-full py-2 hover:text-lime-200 transition duration-300" onClick={halveSnakeSize}>
                                Half Snake Size
                            </button>
                            <button className="mb-4 green text-center w-full py-2 hover:text-lime-200 transition duration-300" onClick={increasePointMultiplier}>
                                Increase Score Multiplier (Current: {pointMultiplier}x)
                            </button>
                            <button className="green text-center w-full py-2 hover:text-lime-200 transition duration-300" onClick={keepSpeed}>
                                Keep Same Speed
                            </button>
                        </>
                        ) : 
                        (
                        <>
                            <button className="mb-4 green text-center w-full py-2 hover:text-lime-200 transition duration-300" onClick={addLife}>
                                +1 Life
                            </button>
                            <button className="mb-4 green text-center w-full py-2 hover:text-lime-200 transition duration-300" onClick={resetSpeed}>
                                Reset Speed to 100
                            </button>
                            <button className="green text-center w-full py-2 hover:text-lime-200 transition duration-300" onClick={activateWallBreaker}>
                                Go Thru Walls + Snake (30 seconds)
                            </button>
                        </>
                        )
                    }
                </div>
            </SnakeModal>

            
            <div className="flex justify-center items-center h-screen bg-black">
                <div className="flex justify-start" style={{ maxWidth: '100px', flexWrap: 'nowrap' }}> 
                    {/* Leaderboard Section */}
                    <div style={{ 
                        width: '400px', 
                        marginLeft: '150px', 
                        marginBottom: '405px', 
                        maxHeight: '50px',  // Set a fixed maximum height
                    }}> 
                        <h3 className="green text-xl font-bold mb-4">Leaderboard</h3>
                        <ul className="green text-sm">
                            {leaderboard.map((entry, index) => (
                                <li key={index}>
                                    {index + 1}. {entry.username} -- {entry.score}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            {/* Canvas and Rules Container */}
            <div className="flex justify-center flex-1 pl-80 pt-20">
                {/* Canvas Container */}
                <div style={{ maxWidth: '600px' }}>
                    <canvas ref={canvasRef} width={canvasSize} height={canvasSize} className="snake-canvas" />
                </div>

                {/* Rules Section */}
                <div className="rules-container" style={{ width: '450px', padding: '80px' }}>
                    <h3 className="green text-xl font-bold mb-4">Game Rules</h3>
                    <ul className="green text-sm list-disc pl-5">
                        <li className="mb-2">Use the arrow keys to move the snake.</li>
                        <li className="mb-2">Press the spacebar to pause/unpause the game.</li>
                        <li className="mb-4">As you eat tokens your score will increase by a multiplier that starts at 1x.</li>
                        <li className="mb-2">Every 10th token eaten the speed will increase gradually, you will also have a choice of various boosts.</li>
                        <ul className="pl-8 list-disc">
                            <li className="mb-2 text-xs">Half Snake Size</li>
                            <li className="mb-2 text-xs">Points Multiplier (compounds)</li>
                            <li className="mb-4 text-xs">Keep Same Speed</li>
                        </ul>
                        <li className="mb-2">Every 50th token you will have a choice of better boosts.</li>
                        <ul className="pl-8 list-disc">
                            <li className="mb-2 text-xs">+1 Life</li>
                            <li className="mb-2 text-xs">Reset Speed to 100</li>
                            <li className="mb-4 text-xs">Go Thru Walls + Snake (30 seconds)</li>
                        </ul>
                        <li className="mb-2">If you lose a life your score multiplier will reset back to 1x.</li>
                        {/* Add more rules as needed */}
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
};

export default Snake;
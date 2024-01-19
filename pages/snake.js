// snake.js
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js'

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

    useEffect(() => {
        const handleKeyDown = (e) => {
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
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const gameInterval = setInterval(() => {
            if (direction.x !== 0 || direction.y !== 0) {
                let newSnake = [...snake];
                let head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };
    
                if (checkCollision(head, newSnake)) {
                    setSnake(initialSnake); 
                    setDirection({ x: 0, y: 0 });
                    setSpeed(100);
                    return;
                }
    
                newSnake.unshift(head);
                if (head.x === food.x && head.y === food.y) {
                    setFood({ x: Math.round(Math.random() * (canvasSize / snakePartSize - 1)) * snakePartSize, y: Math.round(Math.random() * (canvasSize / snakePartSize - 1)) * snakePartSize });
                } else {
                    newSnake.pop();
                }
                setSnake(newSnake);
            }
        }, speed);
    
        return () => clearInterval(gameInterval);
    }, [snake, direction, speed, food]);

    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        context.fillStyle = 'green';
        snake.forEach(part => context.fillRect(part.x, part.y, snakePartSize, snakePartSize));
        context.fillStyle = 'red';
        context.fillRect(food.x, food.y, snakePartSize, snakePartSize);
    }, [snake, food]);

    return (
        <>
            <Header/>
            <Footer/>
            <div className="flex justify-center items-center h-screen bg-black">
                <canvas ref={canvasRef} width={canvasSize} height={canvasSize} className="bg-gray-800 border border-black" />
            </div>
        </>
    );
};

export default Snake;
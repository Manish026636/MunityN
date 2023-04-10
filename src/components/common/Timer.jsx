import { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);  

  return (
    <div
      className="flex items-center mt-4 bg-gray-100 p-2 rounded-md shadow-md"
      style={{ maxWidth: 300 }}>
      {isRunning ? (
        <FaPause className="text-red-500 mr-4 cursor-pointer" onClick={() => setIsRunning(false)} />
      ) : (
        <FaPlay className="text-green-500 mr-4 cursor-pointer" onClick={() => setIsRunning(true)} />
      )}
      <div className="text-4xl font-bold">{timer}</div>
      <div className="ml-4">seconds</div>
    </div>
  );
}
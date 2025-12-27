import { useState, useEffect } from 'react';

const useTypingEffect = (text, duration) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const items = text.split("");

  useEffect(() => {
    if (currentPosition >= items.length) return;

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + 1);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPosition, items, duration]);

  return items.slice(0, currentPosition).join("");
};

export default useTypingEffect;

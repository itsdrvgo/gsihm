import { useEffect, useState } from "react";

const useCountUp = (start: number, end: number, duration: number): number => {
  const [count, setCount] = useState<number>(start);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrameId: number;

    const startCountAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const newValue = Math.floor(start + (end - start) * percentage);
      setCount(newValue);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(startCountAnimation);
      }
    };

    animationFrameId = requestAnimationFrame(startCountAnimation);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [start, end, duration]);

  return count;
};

export default useCountUp;

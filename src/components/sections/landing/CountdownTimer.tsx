import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  eventDate: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function CountdownTimer({ eventDate }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() => getTimeRemaining(eventDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(eventDate));
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [eventDate]);

  function getTimeRemaining(eventDate: string): TimeRemaining {
    const now = new Date().getTime();
    const eventTime = new Date(eventDate).getTime();
    const timeDiff = eventTime - now;

    if (timeDiff > 0) {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  return (
    <div className="mt-4 text-2xl font-semibold text-red-500">
      {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
    </div>
  );
}

export default CountdownTimer;

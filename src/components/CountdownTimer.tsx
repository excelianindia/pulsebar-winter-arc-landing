import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

const CountdownTimer = () => {
  const targetDate = new Date('2025-10-30T23:59:59').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <Card className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-card shadow-subtle border-border">
        <span className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </Card>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-3 md:gap-4 justify-center animate-fade-in">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;

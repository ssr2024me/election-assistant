import { useState, useEffect } from 'react';

const CountdownTimer = ({ t, lang }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-05-15T00:00:00');
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-title">🗳️ {t.countdown}: <span className="election-name">{lang === 'hi' ? (election.nameHi || election.name) : election.name}</span></div>
      <div className="countdown-grid" role="timer" aria-label="Election Countdown">
        {[
          { val: timeLeft.days, label: t.days },
          { val: timeLeft.hours, label: t.hours },
          { val: timeLeft.minutes, label: t.minutes },
          { val: timeLeft.seconds, label: t.seconds }
        ].map((item, idx) => (
          <div key={idx} className="timer-item">
            <span className="timer-val">{item.val}</span>
            <span className="timer-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;

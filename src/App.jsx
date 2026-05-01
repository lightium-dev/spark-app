import { useEffect, useState } from 'react';
import ChallengeCard from './components/ChallengeCard.jsx';
import StreakTracker from './components/StreakTracker.jsx';
import HistoryList from './components/HistoryList.jsx';
import challenges from './data/challenges.js';
import './App.css';

const STORAGE_KEY = 'spark-daily-challenge-state';

const formatDate = (date) => date.toISOString().slice(0, 10);
const todayKey = () => formatDate(new Date());

const getChallengeOfTheDay = () => {
  const now = new Date();
  const dayNumber = Math.floor(now.setHours(0, 0, 0, 0) / 86400000);
  const index = dayNumber % challenges.length;
  return challenges[index];
};

const loadState = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
};

const buildLast7Days = (history) => {
  const dates = [];
  for (let daysAgo = 6; daysAgo >= 0; daysAgo -= 1) {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    const dayKey = formatDate(date);
    const done = history.some((item) => item.date === dayKey);
    dates.push({ date: dayKey, done });
  }
  return dates;
};

const calculateStreak = (history) => {
  const completed = new Set(history.map((item) => item.date));
  let count = 0;
  const day = new Date();
  if (!completed.has(formatDate(day))) {
    day.setDate(day.getDate() - 1);
  }
  while (true) {
    const key = formatDate(day);
    if (!completed.has(key)) break;
    count += 1;
    day.setDate(day.getDate() - 1);
  }
  return count;
};

function App() {
  const userName = 'User';
  const today = todayKey();
  const [history, setHistory] = useState(() => loadState().history || []);
  const [completedToday, setCompletedToday] = useState(() => loadState().completedToday || false);

  const challengeOfTheDay = getChallengeOfTheDay();
  const streak = calculateStreak(history);
  const last7Days = buildLast7Days(history);

  useEffect(() => {
    const saved = loadState();
    if (saved.lastDate !== today) {
      setCompletedToday(false);
    } else if (saved.completedToday) {
      setCompletedToday(true);
    }
  }, [today]);

  useEffect(() => {
    const payload = {
      history,
      completedToday,
      lastDate: today,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [history, completedToday, today]);

  const markAsDone = () => {
    if (completedToday) return;

    const newEntry = {
      id: `${today}-${challengeOfTheDay.title}`,
      date: today,
      title: challengeOfTheDay.title,
      category: challengeOfTheDay.category,
      description: challengeOfTheDay.description,
    };

    setHistory((prev) => [newEntry, ...prev]);
    setCompletedToday(true);
    alert(`Great job! Your streak is now ${streak + 1} days.`);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Spark Daily Challenge</h1>
        <p>Welcome, {userName}!</p>
      </header>

      <main className="main">
        <div className="hero">
          <h2>Today's Challenge</h2>
          <p>Complete one task to keep your streak going.</p>
        </div>

        <ChallengeCard
          challenge={challengeOfTheDay}
          completed={completedToday}
          onComplete={markAsDone}
        />

        <StreakTracker streak={streak} last7Days={last7Days} />

        <HistoryList items={history} />
      </main>
    </div>
  );
}

export default App;

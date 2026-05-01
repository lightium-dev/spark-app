function StreakTracker({ streak, last7Days }) {
  return (
    <section className="panel-card">
      <div className="panel-header">
        <h3>Suivi de série</h3>
        <span>{streak} jour{streak > 1 ? 's' : ''}</span>
      </div>
      <div className="streak-row">
        {last7Days.map((day) => (
          <div key={day.date} className={`streak-dot ${day.done ? 'done' : ''}`}>
            <span>{day.date.slice(5)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StreakTracker;

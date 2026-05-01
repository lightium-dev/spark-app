function ChallengeCard({ challenge, completed, onComplete }) {
  return (
    <section className={`challenge-card ${completed ? 'complete' : ''}`}>
      <div className="challenge-top">
        <span className="challenge-icon">{challenge.icon}</span>
        <div>
          <p className="challenge-category">{challenge.category}</p>
          <h2>{challenge.title}</h2>
        </div>
      </div>

      <p className="challenge-description">{challenge.description}</p>

      <button className="challenge-button" onClick={onComplete} disabled={completed}>
        {completed ? 'Défi accompli ✅' : 'Marquer comme fait'}
      </button>
    </section>
  );
}

export default ChallengeCard;

function CompletionMessage({ streak }) {
  return (
    <section className="completion-card">
      <div className="completion-icon">🏆</div>
      <h3>Bravo, défi complété !</h3>
      <p>Ta série est maintenant de {streak} jour{streak > 1 ? 's' : ''}.</p>
      <p className="completion-note">Continue comme ça, demain est un nouveau départ.</p>
    </section>
  );
}

export default CompletionMessage;

import HistoryItem from './HistoryItem.jsx';

function HistoryList({ items }) {
  return (
    <section className="panel-card history-panel">
      <div className="panel-header">
        <h3>Historique des défis</h3>
        <span>{items.length} trouvé{items.length > 1 ? 's' : ''}</span>
      </div>
      <div className="history-list">
        {items.length === 0 ? (
          <p className="empty-state">Aucun défi complété dans cette catégorie.</p>
        ) : (
          items.map((item) => <HistoryItem key={item.id} item={item} />)
        )}
      </div>
    </section>
  );
}

export default HistoryList;

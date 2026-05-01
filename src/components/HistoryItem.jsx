function HistoryItem({ item }) {
  return (
    <div className="history-item">
      <div>
        <p className="history-title">{item.title}</p>
        <p className="history-subtitle">{item.category} • {item.date}</p>
      </div>
    </div>
  );
}

export default HistoryItem;

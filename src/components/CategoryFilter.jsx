const categories = ['All', 'Créatif', 'Bien-être', 'Social'];

function CategoryFilter({ selected, onSelect }) {
  return (
    <section className="panel-card filter-panel">
      <h3>Filtrer par catégorie</h3>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={selected === category ? 'filter-button active' : 'filter-button'}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryFilter;

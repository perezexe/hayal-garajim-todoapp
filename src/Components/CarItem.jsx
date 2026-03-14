function CarItem({ car, onDelete, onUpdate }) {
  return (
    <div className="card">
      <div>
        <h3 className={`card__title ${car.isOwned ? 'line-through' : ''}`}>
          {car.brand} <span className="title__highlight">{car.model}</span>
        </h3>
        <p className={`status ${car.isOwned ? 'status--owned' : 'status--wishlist'}`}>
          {car.isOwned ? '✅ Garajda / Satın Alındı' : '⏳ Hayalimdeki Araba'}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => onUpdate(car.id)}
          className="btn btn-secondary"
        >
          {car.isOwned ? 'Hayale Çevir' : 'Aldım ✅'}
        </button>
        <button
          onClick={() => onDelete(car.id)}
          className="btn btn-danger"
        >
          Sil 🗑️
        </button>
      </div>
    </div>
  );
}
export default CarItem;
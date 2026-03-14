import { useState } from 'react';
import CarForm from '../Components/CarForm';
import CarItem from '../Components/CarItem';

function HomePage() {
  // Başlangıç verileri (Listeleme işlemi için)
  const [cars, setCars] = useState([
    { id: 1, brand: "Lamborghini", model: "Aventador", isOwned: false },
    { id: 2, brand: "Mustang", model: "Shelby GT500", isOwned: true }
  ]);

  // EKLEME (Create)
  const addCar = (brand, model) => {
    const newCar = { id: Date.now(), brand, model, isOwned: false };
    setCars([newCar, ...cars]);
  };

  // SİLME (Delete)
  const deleteCar = (id) => {
    if(window.confirm("Bu arabayı silmek istediğine emin misin?")) {
        setCars(cars.filter(car => car.id !== id));
    }
  };

  // GÜNCELLEME (Update)
  const updateCar = (id) => {
    setCars(cars.map(car => 
      car.id === id ? { ...car, isOwned: !car.isOwned } : car
    ));
  };

  return (
    <div className="page">
      <header className="page__header text-center">
        <h1 className="title">
          GARAJ<span className="title__highlight">PRO</span>
        </h1>
        <p className="subtitle">Hayalindeki araba koleksiyonunu buradan yönet.</p>
      </header>

      <CarForm onAdd={addCar} />

      <section>
        <div className="card__header">
          <h2 className="card__title">Koleksiyonum</h2>
          <span className="card__badge">{cars.length} Araç</span>
        </div>

        {cars.map(car => (
          <CarItem key={car.id} car={car} onDelete={deleteCar} onUpdate={updateCar} />
        ))}

        {cars.length === 0 && (
          <div className="empty-state">
            Garajın boş görünüyor. Hemen bir araba ekle!
          </div>
        )}
      </section>
    </div>
  );
}
export default HomePage;
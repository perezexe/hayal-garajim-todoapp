import { useState } from 'react';

function CarForm({ onAdd }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!brand || !model) return alert("Lütfen marka ve model yazın!");
    onAdd(brand, model); // Arabayı listeye ekle
    setBrand(""); setModel(""); // Kutuları temizle
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form__title">Yeni Araba Ekle</h2>

      <div className="form__row">
        <input
          className="input"
          placeholder="Marka (Örn: Porsche)"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          className="input"
          placeholder="Model (Örn: 911 Turbo)"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>

      <button className="btn btn-primary">
        Garaja Ekle 🏎️
      </button>
    </form>
  );
}
export default CarForm;
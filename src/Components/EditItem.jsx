import { useState } from "react";

function EditItem(props) {
  const { item, onUpdate } = props;

  const [name, setName] = useState(item.name);
  const [brand, setBrand] = useState(item.brand);
  const [price, setPrice] = useState(item.price);
  const [stock, setStock] = useState(item.stock);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedItem = {
      ...item,
      name,
      brand,
      price: Number(price),
      stock: Number(stock),
    };

    onUpdate(updatedItem);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Edit supplement</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={brand} onChange={(e) => setBrand(e.target.value)} />
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <input value={stock} onChange={(e) => setStock(e.target.value)} />

      <button type="submit">Update</button>
    </form>
  );
}

export default EditItem;
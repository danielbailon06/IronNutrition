import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Date.now(),
            name,
            brand,
            price: Number(price),
            stock: Number(stock),
        };

        props.onAddItem(newItem);

        setName("");
        setBrand("");
        setPrice("");
        setStock("");
  };

   return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add new supplement</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddItem;
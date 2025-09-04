import React, { useState } from "react";
function AddItem({ addItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(name, price);
    setName("");
    setPrice("");
  };
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <input
        type="number"
        placeholder="Price ($)"
        value={price}
        onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
}
export default AddItem;

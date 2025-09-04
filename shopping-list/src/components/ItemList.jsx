import React, { useState } from "react";
function ItemList({ items, removeItem, clearAll, updateItem }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const getPriceColor = (price) => {
    if (price < 20) return "green";
    if (price >= 20 && price <= 50) return "orange";
    return "red";
  };
  const startEdit = (index, item) => {
    setEditIndex(index);
    setEditName(item.name);
    setEditPrice(item.price);
  };
  const saveEdit = (index) => {
    updateItem(index, editName, parseFloat(editPrice));
    setEditIndex(null);
    setEditName("");
    setEditPrice("");
  };
  const cancelEdit = () => {
    setEditIndex(null);
    setEditName("");
    setEditPrice("");
  };
  return (
    <div className="item-list">
      <h3>Shopping Items ({items.length})</h3>
      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)} />
                    <input
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)} />
                    <button className="save-btn" onClick={() => saveEdit(index)}>Save</button>
                    <button className="cancel-btn"onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <span>{item.name}</span>
                    <span style={{ color: getPriceColor(item.price) }}>
                      ${item.price.toFixed(2)}
                    </span>
                    <button className="edit-btn" onClick={() => startEdit(index, item)}>Edit</button>
                    <button className="x-btn" onClick={() => removeItem(index)}>x</button>
                  </>
                )}
              </li>
            ))}
          </ul>
          <button className="clear" onClick={clearAll}>
            Clear All
          </button>
        </>
      )}
    </div>
  );
}
export default ItemList;
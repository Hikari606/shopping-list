import React, { useState } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import TotalCost from "./components/TotalCost";
import "./App.css";
function App() {
    const [items, setItems] = useState([]);
    const addItem = (name, price) => {
        if (!name || price <= 0) {
            alert("Please enter valid item name and price!");
            return;
        }
        if (items.some((item) => item.name.toLowerCase() === name.toLowerCase())) {
            alert("Item already exists!");
            return;
        }
        setItems([...items, { name, price: parseFloat(price) }]);
    }
    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };
    const clearAll = () => {
        setItems([]);
    };
    const updateItem = (index, newName, newPrice) => {
        if (!newName || newPrice <= 0) {
            alert("Please enter valid values!");
            return;
        }
        if (
            items.some(
                (item, i) =>
                    i !== index && item.name.toLowerCase() === newName.toLowerCase())
        ) {
            alert("Item name already exists!");
            return;
        }
        const updatedItems = [...items];
        updatedItems[index] = { name: newName, price: newPrice };
        setItems(updatedItems);
    };
    return (
        <div className="app">
            <h1>🛒 Shopping List</h1>
            <TotalCost items={items} />
            <AddItem addItem={addItem} />
            <ItemList
                items={items}
                removeItem={removeItem}
                clearAll={clearAll}
                updateItem={updateItem}
            />
        </div>
    );
}
export default App;

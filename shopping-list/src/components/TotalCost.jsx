import React from "react";
function TotalCost({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="total-cost">
      <p>Items: {items.length}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}
export default TotalCost;

import { useState } from "react";
function ExpenseList({ transactions, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editAmount, setEditAmount] = useState("");
  const [editCategory, setEditCategory] = useState("");

  const startEdit = (t) => {
    setEditingId(t.id);
    setEditAmount(t.amount);
    setEditCategory(t.category);
  };

  const saveEdit = (id) => {
    onEdit(id, editAmount, editCategory);
    setEditingId(null);
  };

  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 14,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Transaction History</h3>
      {transactions.length === 0 && <p>No records yet</p>}
      {transactions.map((t) => (
        <div
          key={t.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            borderBottom: "1px solid #eee",
          }}
        >
          {editingId === t.id ? (
            <>
              <input
                style={{
                  width: "70px",
                  marginRight: 10,
                  padding: 5,
                  borderRadius: 6,
                  border: "1px solid #ccc",
                }}
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
              />
              <input
                style={{
                  width: "70px",
                  marginRight: 10,
                  padding: 5,
                  borderRadius: 6,
                  border: "1px solid #ccc",
                }}
                type="number"
                value={editAmount}
                onChange={(e) => setEditAmount(e.target.value)}
              />
            </>
          ) : (
            <div>
              <strong>{t.category}</strong>
              <div style={{ fontSize: 12, color: "#777" }}>
                {t.member} • {t.date}
              </div>
            </div>
          )}

          <span style={{ color: t.type === "income" ? "#4CAF50" : "#FF5722" }}>
            {t.type === "income" ? "+" : "-"}
            {t.amount}
          </span>

          {editingId === t.id ? (
            <button
              style={{
                background: "#2196F3",
                color: "white",
                border: "none",
                padding: 6,
                borderRadius: 6,
                cursor: "pointer",
                marginLeft: 5,
              }}
              onClick={() => saveEdit(t.id)}
            >
              Save
            </button>
          ) : (
            <button
              style={{
                background: "#2196F3",
                color: "white",
                border: "none",
                padding: 6,
                borderRadius: 6,
                cursor: "pointer",
                marginLeft: 5,
              }}
              onClick={() => startEdit(t)}
            >
              Edit
            </button>
          )}

          <button
            style={{
              background: "transparent",
              border: "none",
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => onDelete(t.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
export default ExpenseList;

import { useState } from "react";
function Auth({ onLogin }) {
  const [name, setName] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#2196F3,#4CAF50)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 14,
          width: 340,
          textAlign: "center",
        }}
      >
        <h2>Family Budget Planner 💰</h2>
        <p>Manage your household finances easily</p>
        <input
          style={{
            width: "100%",
            marginRight: 10,
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          style={{
            background: "#4CAF50",
            color: "white",
            border: "none",
            padding: 12,
            borderRadius: 8,
            marginTop: 12,
            cursor: "pointer",
            width: "100%",
          }}
          onClick={() => name.trim() && onLogin(name)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default Auth;

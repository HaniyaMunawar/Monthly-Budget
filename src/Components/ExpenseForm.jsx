import { useState } from "react";
function ExpenseForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");
  const [source, setSource] = useState("");
  const [member, setMember] = useState("Family");

  const submit = () => {
    if (!amount) return;

    onAdd({
      amount: Number(amount),
      type,
      category: type === "income" ? source || "Income" : category,
      member,
    });

    setAmount("");
    setSource("");
    setCategory("Food");
  };

  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 14,
        boxShadow: "0 10px 25px #cecccc",
      }}
    >
      <h3>Add Transaction</h3>
      <select
        style={{
          width: "100%",
          padding: 10,
          marginTop: 10,
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select
        style={{
          width: "100%",
          padding: 10,
          marginTop: 10,
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
        value={member}
        onChange={(e) => setMember(e.target.value)}
      >
        <option>Family</option>
        <option>Children</option>
        <option>Wife</option>
        <option>Husband</option>
        <option>Bills</option>
        <option>Savings</option>
      </select>

      {type === "income" ? (
        <input
          style={{
            width: "100%",
            padding: 10,
            marginTop: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
          placeholder="Income source (Job, Gift, Freelance)"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      ) : (
        <select
          style={{
            width: "100%",
            padding: 10,
            marginTop: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Rent</option>
          <option>Transport</option>
          <option>Education</option>
          <option>Medical</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>
      )}

      <input
        style={{
          width: "96%",
          padding: 10,
          marginTop: 10,
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        style={{
          background: "linear-gradient(135deg, #2196F3, #4d26da) ",
          color: "white",
          border: "none",
          padding: 12,
          borderRadius: 8,
          marginTop: 12,
          cursor: "pointer",
          width: "100%",
        }}
        onClick={submit}
      >
        Add Transaction
      </button>
    </div>
  );
}
export default ExpenseForm;

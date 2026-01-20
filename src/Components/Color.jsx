import Box from "./Box";
function Color({ income, expenses, savings }) {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 15 }}
    >
      <Box title="Income" value={income} color="#4CAF50" />
      <Box title="Expenses" value={expenses} color="#FF5722" />
      <Box title="Savings" value={savings} color="#2196F3" />
    </div>
  );
}
export default Color;

function Box({ title, value, color }) {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 14,
        boxShadow: "0 10px 25px #cecccc",
        borderLeft: `6px solid ${color}`,
      }}
    >
      <p>{title}</p>
      <h2
        style={{
          background: "white",
          padding: 20,
          borderRadius: 14,
          boxShadow: "0 10px 25px #cecccc",
        }}
      >
        {value}
      </h2>
    </div>
  );
}
export default Box;

function Navbar({ user }) {
  return (
    <div
      style={{
        background: "#2196F3    ",
        color: "white",
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>Expense Tracker</h2>
        <small>Track - Save - Plan</small>
      </div>
      <div
        style={{
          background: "#ffffff33",
          padding: "6px 14px",
          borderRadius: 20,
        }}
      >
        User: {user}
      </div>
    </div>
  );
}
export default Navbar;

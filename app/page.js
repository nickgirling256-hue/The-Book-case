export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: "serif", background: "#f5efe6", minHeight: "100vh" }}>
      <h1>My Bookshelf</h1>

      <div
        style={{
          width: 180,
          background: "#e7dcc8",
          padding: 12,
          textAlign: "center",
          borderRadius: 8
        }}
      >
        <div
          style={{
            width: "100%",
            height: 240,
            background: "#cfcfcf",
            marginBottom: 12
          }}
        />
        <p style={{ fontSize: 18, margin: "8px 0" }}>1984</p>
        <p style={{ fontSize: 24, margin: 0 }}>⭐⭐⭐⭐⭐</p>
      </div>
    </main>
  );
}



export default function Home() {
  return (
    <div style={{ padding: 20, background: "#f5efe6", minHeight: "100vh" }}>
      <h1 style={{ fontFamily: "serif" }}>My Bookshelf</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20
        }}
      >
        {books.map((book, i) => (
          <div
            key={i}
            style={{
              background: "#e7dcc8",
              padding: 12,
              textAlign: "center",
              borderRadius: 8
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                display: "block",
                marginBottom: 12
              }}
            />
            <p style={{ fontFamily: "serif", fontSize: 18, margin: "8px 0" }}>
              {book.title}
            </p>
            <p style={{ margin: 0, fontSize: 24 }}>
              {"⭐".repeat(book.rating)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

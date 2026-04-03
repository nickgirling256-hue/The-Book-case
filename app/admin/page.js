export default function Home() {
  const books = [
    { title: "1984", rating: 5 },
    { title: "The Hobbit", rating: 4 },
    { title: "Dune", rating: 5 },
    { title: "Atomic Habits", rating: 4 },
    { title: "Harry Potter", rating: 5 },
    { title: "The Alchemist", rating: 3 }
  ];

  return (
    <main
      style={{
        padding: 20,
        fontFamily: "serif",
        background: "#f5efe6",
        minHeight: "100vh"
      }}
    >
      <h1>My Bookshelf</h1>

      <a
        href="/admin"
        style={{
          display: "inline-block",
          marginBottom: 20,
          padding: "10px 14px",
          background: "#8b5e3c",
          color: "white",
          textDecoration: "none",
          borderRadius: 6
        }}
      >
        Go to Add a Book
      </a>

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
            <div
              style={{
                width: "100%",
                height: 220,
                background: "#cfcfcf",
                marginBottom: 12
              }}
            />
            <p style={{ fontSize: 18, margin: "8px 0" }}>{book.title}</p>
            <p style={{ fontSize: 24, margin: 0 }}>
              {"⭐".repeat(book.rating)}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

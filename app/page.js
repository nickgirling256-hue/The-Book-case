export default function Home() {
  const books = [
    { title: "1984", rating: 5 },
    { title: "The Hobbit", rating: 4 },
    { title: "Dune", rating: 5 },
    { title: "Sapiens", rating: 4 },
    { title: "Atomic Habits", rating: 4 },
    { title: "Harry Potter", rating: 5 },
    { title: "The Alchemist", rating: 3 },
    { title: "Brave New World", rating: 4 }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>My Bookshelf</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20
        }}
      >
        {books.map((book, i) => (
          <div
            key={i}
            style={{
              background: "#eee",
              padding: 10,
              textAlign: "center"
            }}
          >
            <div style={{ height: 120, background: "#ccc" }} />
            <p>{book.title}</p>
            <p>{"⭐".repeat(book.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
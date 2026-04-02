import { books } from "../data/books";

export default function AdminPage() {
  return (
    <main style={{ padding: 20, fontFamily: "serif" }}>
      <h1>Add a Book</h1>

      <form style={{ display: "grid", gap: 12, maxWidth: 500 }}>
        <input placeholder="Book title" style={{ padding: 12, fontSize: 16 }} />
        <input placeholder="Author" style={{ padding: 12, fontSize: 16 }} />
        <input
          placeholder="Rating out of 5"
          type="number"
          min="0"
          max="5"
          style={{ padding: 12, fontSize: 16 }}
        />
        <input placeholder="Cover image URL" style={{ padding: 12, fontSize: 16 }} />
        <textarea
          placeholder="Your review"
          rows="5"
          style={{ padding: 12, fontSize: 16 }}
        />
        <button type="button" style={{ padding: 12, fontSize: 16 }}>
          Save Book
        </button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      <h2>Current Books</h2>

      <div style={{ display: "grid", gap: 10 }}>
        {books.map((book, i) => (
          <div key={i}>
            {book.title} — {"⭐".repeat(book.rating)}
          </div>
        ))}
      </div>
    </main>
  );
}

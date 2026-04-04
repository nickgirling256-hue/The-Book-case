
"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks =
      JSON.parse(localStorage.getItem("myBooks")) || [];
    setBooks(storedBooks);
  }, []);

  function deleteBook(index) {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
    localStorage.setItem("myBooks", JSON.stringify(updatedBooks));
  }

  return (
    <main
      style={{
        padding: 20,
        fontFamily: "serif",
        background: "#f5efe6",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ marginBottom: 20 }}>My Bookshelf</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          marginBottom: 20
        }}
      >
        <a
          href="/admin"
          style={{
            textAlign: "center",
            padding: 12,
            background: "#3c6e71",
            color: "white",
            textDecoration: "none",
            borderRadius: 8,
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
          }}
        >
          ➕ Add Book
        </a>

        <a
          href="/wanted"
          style={{
            textAlign: "center",
            padding: 12,
            background: "#d9a441",
            color: "white",
            textDecoration: "none",
            borderRadius: 8,
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
          }}
        >
          📚 Wanted Books
        </a>
      </div>

      {books.length === 0 ? (
        <p>No books saved yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20
          }}
        >
          {books.map((book, index) => (
            <div
              key={index}
              style={{
                background: "#ddd",
                padding: 10,
                borderRadius: 6,
                textAlign: "center"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 150,
                  background: "#bbb",
                  marginBottom: 10
                }}
              >
                {book.image ? (
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                ) : null}
              </div>

              <div style={{ fontSize: 18 }}>{book.title}</div>

              <div style={{ color: "gold", margin: "6px 0" }}>
                {"⭐".repeat(Number(book.rating || 0))}
              </div>

              <button
                onClick={() => deleteBook(index)}
                style={{
                  marginTop: 8,
                  padding: "6px 10px",
                  background: "#c44536",
                  color: "white",
                  border: "none",
                  borderRadius: 6
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

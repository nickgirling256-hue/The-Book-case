"use client";

import { useEffect, useState } from "react";

export default function WantedPage() {
  const [wantedBooks, setWantedBooks] = useState([]);

  useEffect(() => {
    const savedWantedBooks = localStorage.getItem("wantedBooks");
    if (savedWantedBooks) {
      setWantedBooks(JSON.parse(savedWantedBooks));
    }
  }, []);

  function deleteWantedBook(indexToDelete) {
    const updatedBooks = wantedBooks.filter((_, index) => index !== indexToDelete);
    setWantedBooks(updatedBooks);
    localStorage.setItem("wantedBooks", JSON.stringify(updatedBooks));
  }

  function markAsRead(book, rating, indexToDelete) {
    const existingReadBooks = JSON.parse(localStorage.getItem("myBooks")) || [];

    const movedBook = {
      ...book,
      rating
    };

    const updatedReadBooks = [movedBook, ...existingReadBooks];
    localStorage.setItem("myBooks", JSON.stringify(updatedReadBooks));

    const updatedWantedBooks = wantedBooks.filter((_, index) => index !== indexToDelete);
    setWantedBooks(updatedWantedBooks);
    localStorage.setItem("wantedBooks", JSON.stringify(updatedWantedBooks));

    alert("Book moved to your main bookshelf!");
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
      <h1>Wanted Books</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginBottom: 20
        }}
      >
        <a
          href="/"
          style={{
            display: "block",
            textAlign: "center",
            padding: "12px 10px",
            background: "#8b5e3c",
            color: "white",
            textDecoration: "none",
            borderRadius: 8,
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
          }}
        >
          ← My Bookshelf
        </a>

        <a
          href="/wanted/add"
          style={{
            display: "block",
            textAlign: "center",
            padding: "12px 10px",
            background: "#3c6e71",
            color: "white",
            textDecoration: "none",
            borderRadius: 8,
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
          }}
        >
          ➕ Add Wanted Book
        </a>
      </div>

      {wantedBooks.length === 0 ? (
        <p>No wanted books yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
            marginTop: 20
          }}
        >
          {wantedBooks.map((book, i) => (
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
                src={book.image || "https://via.placeholder.com/200x300?text=No+Cover"}
                alt={book.title}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/200x300?text=No+Cover";
                }}
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  marginBottom: 12,
                  borderRadius: 4
                }}
              />

              <p style={{ fontSize: 18, margin: "8px 0" }}>{book.title}</p>

              <p style={{ margin: "8px 0" }}>
                Tap stars when you’ve read it:
              </p>

              <div style={{ marginBottom: 12 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => markAsRead(book, star, i)}
                    style={{
                      fontSize: 22,
                      background: "none",
                      border: "none",
                      padding: 2
                    }}
                  >
                    ⭐
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => deleteWantedBook(i)}
                style={{
                  padding: "8px 12px",
                  fontSize: 14,
                  background: "#a94442",
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
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


"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const starterBooks = [
    {
      title: "1984",
      rating: 5,
      image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
      review: ""
    },
    {
      title: "The Hobbit",
      rating: 4,
      image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
      review: ""
    },
    {
      title: "Dune",
      rating: 5,
      image: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
      review: ""
    },
    {
      title: "Atomic Habits",
      rating: 4,
      image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
      review: ""
    }
  ];

  const [books, setBooks] = useState(starterBooks);

  useEffect(() => {
    const savedBooks = localStorage.getItem("myBooks");
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

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

      <p>
        <a href="/admin">Go to Add a Book</a>
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
          marginTop: 20
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
              src={book.image || "https://via.placeholder.com/200x300?text=No+Cover"}
              alt={book.title}
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                marginBottom: 12,
                borderRadius: 4
              }}
            />
            <p style={{ fontSize: 18, margin: "8px 0" }}>{book.title}</p>
            <p style={{ fontSize: 24, margin: 0 }}>
              {"⭐".repeat(Number(book.rating || 0))}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");

  async function saveBook() {
    setMessage("Fetching book cover...");

    let image = "";

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}`
      );
      const data = await response.json();

      if (data.docs && data.docs.length > 0) {
        const firstBook = data.docs[0];

        if (firstBook.cover_i) {
          image = `https://covers.openlibrary.org/b/id/${firstBook.cover_i}-L.jpg`;
        }
      }
    } catch (error) {
      console.log("Cover fetch failed", error);
    }

    const existingBooks = JSON.parse(localStorage.getItem("myBooks")) || [];

    const newBook = {
      title,
      author,
      rating: Number(rating),
      image,
      review
    };

    const updatedBooks = [newBook, ...existingBooks];
    localStorage.setItem("myBooks", JSON.stringify(updatedBooks));

    setMessage("Book saved!");

    setTitle("");
    setAuthor("");
    setRating("");
    setReview("");
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
      <h1>Add a Book</h1>

      <div style={{ marginBottom: 20 }}>
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
          ← Back to Bookshelf
        </a>
      </div>

      <div style={{ display: "grid", gap: 12, maxWidth: 500, marginTop: 20 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          style={{
            padding: 12,
            fontSize: 16,
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          style={{
            padding: 12,
            fontSize: 16,
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />
        <input
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Rating out of 5"
          type="number"
          min="0"
          max="5"
          style={{
            padding: 12,
            fontSize: 16,
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Your review"
          rows="5"
          style={{
            padding: 12,
            fontSize: 16,
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />
        <button
          type="button"
          onClick={saveBook}
          style={{
            padding: 12,
            fontSize: 16,
            background: "#8b5e3c",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
          }}
        >
          Save Book
        </button>

        {message ? <p>{message}</p> : null}
      </div>
    </main>
  );
}

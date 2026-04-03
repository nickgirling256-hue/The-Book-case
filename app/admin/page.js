"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [review, setReview] = useState("");

  function saveBook() {
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

    alert("Book saved!");

    setTitle("");
    setAuthor("");
    setRating("");
    setImage("");
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

      <p>
        <a href="/">Back to Bookshelf</a>
      </p>

      <div style={{ display: "grid", gap: 12, maxWidth: 500, marginTop: 20 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Rating out of 5"
          type="number"
          min="0"
          max="5"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Cover image URL"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Your review"
          rows="5"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
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
            borderRadius: 6
          }}
        >
          Save Book
        </button>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";

export default function AddWantedBookPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

  async function saveWantedBook() {
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

    const existingWantedBooks =
      JSON.parse(localStorage.getItem("wantedBooks")) || [];

    const newBook = {
      title,
      author,
      notes,
      image,
      rating: 0
    };

    const updatedWantedBooks = [newBook, ...existingWantedBooks];
    localStorage.setItem("wantedBooks", JSON.stringify(updatedWantedBooks));

    setMessage("Wanted book saved!");

    setTitle("");
    setAuthor("");
    setNotes("");
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
      <h1>Add a Wanted Book</h1>

      <p>
        <a href="/wanted">Back to Wanted Books</a>
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
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Why you want to read it"
          rows="5"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <button
          type="button"
          onClick={saveWantedBook}
          style={{
            padding: 12,
            fontSize: 16,
            background: "#8b5e3c",
            color: "white",
            border: "none",
            borderRadius: 6
          }}
        >
          Save Wanted Book
        </button>

        {message ? <p>{message}</p> : null}
      </div>
    </main>
  );
}

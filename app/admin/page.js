export default function AdminPage() {
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
        Go back to the homepage by removing <strong>/admin</strong> from the address bar.
      </p>

      <form style={{ display: "grid", gap: 12, maxWidth: 500, marginTop: 20 }}>
        <input
          placeholder="Book title"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          placeholder="Author"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          placeholder="Rating out of 5"
          type="number"
          min="0"
          max="5"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          placeholder="Cover image URL"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <textarea
          placeholder="Your review"
          rows="5"
          style={{ padding: 12, fontSize: 16, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <button
          type="button"
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
      </form>
    </main>
  );
}

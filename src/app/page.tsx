
"use client";

import { useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
  tag: string;
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Welcome to Cloud Notes",
      content: "Your ideas, organized in one place.",
      tag: "Personal",
    },
    {
      id: 2,
      title: "Project Ideas",
      content: "Build, learn, and create something amazing.",
      tag: "Work",
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function addNote() {
    if (!title.trim() || !content.trim()) {
      alert("Please enter both a title and note content.");
      return;
    }

    setNotes([
      {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        tag: "Personal",
      },
      ...notes,
    ]);

    setTitle("");
    setContent("");
  }

  function deleteNote(id: number) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  const filteredNotes = notes.filter((note) =>
    `${note.title} ${note.content} ${note.tag}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main style={{
      maxWidth: 900,
      margin: "0 auto",
      padding: 24,
      fontFamily: "Arial, sans-serif",
      color: "#1f2937"
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12
      }}>
        <div>
          <h1 style={{ marginBottom: 4 }}>Cloud Notes ☁️</h1>
          <p style={{ color: "#64748b" }}>
            Your thoughts, always within reach.
          </p>
        </div>
        <span style={{
          background: "#dbeafe",
          color: "#1d4ed8",
          padding: "8px 12px",
          borderRadius: 20
        }}>
          My Workspace
        </span>
      </header>

      <input
        aria-label="Search notes"
        placeholder="Search your notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: 14,
          margin: "20px 0",
          border: "1px solid #cbd5e1",
          borderRadius: 10,
          fontSize: 16
        }}
      />

      <section style={{
        background: "#f8fafc",
        padding: 20,
        borderRadius: 12,
        marginBottom: 24
      }}>
        <h2>Create a note</h2>
        <input
          aria-label="Note title"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: 12,
            marginBottom: 12,
            border: "1px solid #cbd5e1",
            borderRadius: 8
          }}
        />
        <textarea
          aria-label="Note content"
          placeholder="Write your thoughts here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: 12,
            marginBottom: 12,
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            fontFamily: "inherit"
          }}
        />
        <button
          onClick={addNote}
          style={{
            background: "#2563eb",
            color: "white",
            padding: "12px 18px",
            border: "none",
            borderRadius: 8,
            fontSize: 15
          }}
        >
          + Add Note
        </button>
      </section>

      <h2>Your Notes ({filteredNotes.length})</h2>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16
      }}>
        {filteredNotes.map((note) => (
          <article key={note.id} style={{
            border: "1px solid #e2e8f0",
            borderRadius: 12,
            padding: 18,
            overflowWrap: "anywhere"
          }}>
            <span style={{
              color: "#2563eb",
              fontSize: 13
            }}>
              {note.tag}
            </span>
            <h3>{note.title}</h3>
            <p style={{
              color: "#475569",
              whiteSpace: "pre-wrap"
            }}>
              {note.content}
            </p>
            <button
              onClick={() => deleteNote(note.id)}
              style={{
                background: "#fee2e2",
                color: "#b91c1c",
                border: "none",
                borderRadius: 6,
                padding: "8px 12px"
              }}
            >
              Delete
            </button>
          </article>
        ))}
      </section>

      {filteredNotes.length === 0 && (
        <p>No matching notes found.</p>
      )}

      <footer style={{
        textAlign: "center",
        color: "#64748b",
        marginTop: 40
      }}>
        Cloud Notes · Built with Next.js
      </footer>
    </main>
  );
            }

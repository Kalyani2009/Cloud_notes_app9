
"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function saveNote() {
    if (!title.trim() || !content.trim()) {
      setMessage("Please enter both title and content.");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      await addDoc(collection(db, "notes"), {
        title: title.trim(),
        content: content.trim(),
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setContent("");
      setMessage("Note saved successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Could not save note. Check Firebase settings.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main style={{
      padding: "24px",
      maxWidth: "600px",
      margin: "auto",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>☁️ Cloud Notes</h1>
      <p>Write and save your notes in the cloud.</p>

      <input
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
          boxSizing: "border-box"
        }}
      />

      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          minHeight: "150px",
          padding: "12px",
          marginBottom: "12px",
          boxSizing: "border-box"
        }}
      />

      <button
        onClick={saveNote}
        disabled={saving}
        style={{ padding: "12px 20px" }}
      >
        {saving ? "Saving..." : "Save Note"}
      </button>

      <p role="status">{message}</p>
    </main>
  );
}
  
              

import { useState } from "react";
import { createUser } from "../api/userApi";

export default function UserForm({ onUserCreated }: { onUserCreated: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!name || !email) return;

    await createUser({ name, email });

    setName("");
    setEmail("");
    onUserCreated();
  };

  return (
    <div>
      <h2 data-testid="user-form-title">Create User</h2>

      <div style={{ marginBottom: 10 }}>
        <input
          data-testid="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <input
          data-testid="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <button
        data-testid="create-btn"
        onClick={handleSubmit}
      >
        Create
      </button>
    </div>
  );
}
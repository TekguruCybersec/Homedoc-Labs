import { useState } from "react";

export default function ClientCard({ client, onEdit, onDelete }) {
  const [edit, setEdit] = useState(false);

  const [draft, setDraft] = useState({
    name: client.name || "",
    email: client.email || "",
    age: client.age || "",
    gender: client.gender || ""
  });

  function handleSave(e) {
    e.preventDefault();

    // basic validation
    if (!draft.name || !draft.email) {
      alert("Name and email are required");
      return;
    }

    onEdit(client._id, draft);
    setEdit(false);
  }

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      {!edit ? (
        // VIEW MODE
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Name: {client.name}</h3>
            <p className="text-slate-600 text-sm">Email: {client.email}</p>
            <p className="text-slate-600 text-sm">Age: {client.age}</p>
            <p className="text-slate-600 text-sm">Gender: {client.gender}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setEdit(true)}
              className="border px-3 py-1 rounded-lg text-sm"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(client._id)}
              className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              Del
            </button>
          </div>
        </div>
      ) : (
        // EDIT MODE
        <form onSubmit={handleSave} className="space-y-3">

          <input
            className="border rounded-lg px-3 py-1 w-full"
            placeholder="Name"
            value={draft.name}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          />

          <input
            className="border rounded-lg px-3 py-1 w-full"
            placeholder="Email"
            type="email"
            value={draft.email}
            onChange={(e) => setDraft({ ...draft, email: e.target.value })}
          />

          <input
            className="border rounded-lg px-3 py-1 w-full"
            placeholder="Age"
            type="number"
            value={draft.age}
            onChange={(e) =>
              setDraft({ ...draft, age: Number(e.target.value) })
            }
          />

          {/* Recommended: dropdown instead of free text */}
          <select
            className="border rounded-lg px-3 py-1 w-full"
            value={draft.gender}
            onChange={(e) => setDraft({ ...draft, gender: e.target.value })}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => setEdit(false)}
              className="border px-3 py-1 rounded-lg text-sm"
            >
              Cancel
            </button>
          </div>

        </form>
      )}
    </div>
  );
}

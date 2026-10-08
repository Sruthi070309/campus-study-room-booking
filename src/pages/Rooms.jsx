import { useEffect, useState } from "react";
import { rooms } from "../data/rooms.js";
import SearchBar from "../components/SearchBar.jsx";
import RoomCard from "../components/RoomCard.jsx";

export default function Rooms() {
  const [query, setQuery] = useState("");

  // useEffect: runs once when the page loads
  useEffect(() => {
    document.title = "Rooms | Campus Study Room Booking";
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = rooms.filter(
    (r) => r.name.toLowerCase().includes(q) || r.building.toLowerCase().includes(q)
  );

  return (
    <section>
      <h1 className="mb-6 font-display text-4xl font-semibold tracking-tight">Study rooms</h1>
      <SearchBar value={query} onChange={setQuery} />
      <p className="mt-2 text-sm text-muted">{filtered.length} room(s) found</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r) => (
          <RoomCard key={r.id} {...r} />
        ))}
      </div>
      {filtered.length === 0 && <p className="mt-6 text-muted">No rooms match "{query}". Try another name or building.</p>}
    </section>
  );
}

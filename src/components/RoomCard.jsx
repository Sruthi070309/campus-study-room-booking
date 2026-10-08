import { Link } from "react-router-dom";
import Seats from "./Seats.jsx";

// Reusable: the same component renders every room, only props change.
export default function RoomCard({ name, building, capacity, available }) {
  return (
    <article className={`flex flex-col border border-line bg-white p-5 ${available ? "" : "opacity-60"}`}>
      <h3 className="font-display text-xl font-semibold leading-tight">{name}</h3>
      <p className="mt-1 text-sm text-muted">{building}</p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <Seats count={capacity} className="max-w-[9rem]" />
        <span className="text-sm text-muted">Seats {capacity}</span>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
        <span className={`flex items-center gap-2 font-medium ${available ? "text-free" : "text-busy"}`}>
          <span className={`h-2 w-2 rounded-full ${available ? "bg-free" : "bg-busy"}`} />
          {available ? "Available" : "Booked"}
        </span>
        {available && (
          <Link to={`/book?room=${encodeURIComponent(name)}`} className="font-medium text-accent underline underline-offset-4">
            Book this room
          </Link>
        )}
      </div>
    </article>
  );
}

import { Link } from "react-router-dom";
import BookingCard from "../components/BookingCard.jsx";

export default function MyBookings({ bookings, onCancel }) {
  return (
    <section>
      <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight">My bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-muted">
          You have no bookings yet. <Link to="/book" className="font-medium text-accent underline">Book a room</Link>
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {bookings.map((b) => (
            <BookingCard key={b.id} {...b} onCancel={() => onCancel(b.id)} />
          ))}
        </div>
      )}
    </section>
  );
}

import { Link } from "react-router-dom";
import { rooms } from "../data/rooms.js";
import Seats from "../components/Seats.jsx";

const features = [
  { title: "View rooms", text: "Every room with its building, seats and availability." },
  { title: "Search quickly", text: "Filter by room name or building as you type." },
  { title: "Book in a minute", text: "Send a request with your group size, date and time." },
  { title: "Track bookings", text: "See everything you have requested in one place." },
];

function WelcomeSection() {
  const free = rooms.filter((r) => r.available);
  return (
    <section className="grid items-end gap-10 md:grid-cols-2">
      <div>
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          A quiet room for your group, booked in a minute.
        </h1>
        <p className="mt-5 max-w-md text-lg text-muted">
          {free.length} of {rooms.length} study rooms are free right now.
        </p>
        <Link to="/rooms" className="mt-8 inline-block bg-ink px-6 py-3 font-medium text-white hover:bg-accent">
          Browse rooms
        </Link>
      </div>
      <ul className="border border-line bg-white">
        {free.map((r) => (
          <li key={r.id} className="flex items-center justify-between gap-4 border-b border-line p-4 last:border-b-0">
            <div>
              <p className="font-medium">{r.name}</p>
              <p className="text-sm text-muted">{r.building}</p>
            </div>
            <Seats count={r.capacity} className="max-w-[7rem] justify-end" />
          </li>
        ))}
      </ul>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="mt-16 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f) => (
        <div key={f.title} className="border-t-2 border-ink py-4">
          <h2 className="font-display text-lg font-semibold">{f.title}</h2>
          <p className="mt-1 text-sm text-muted">{f.text}</p>
        </div>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <FeatureSection />
    </>
  );
}

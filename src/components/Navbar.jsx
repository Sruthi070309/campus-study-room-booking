import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/book", label: "Book a room" },
  { to: "/my-bookings", label: "My bookings" },
 ];

export default function Navbar({ count }) {
  const [open, setOpen] = useState(false); // mobile menu toggle
  const cls = ({ isActive }) =>
    `block border-b-2 py-2 text-sm font-medium ${isActive ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"}`;

  return (
    <header className="relative border-b border-line bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <span className="font-display text-xl font-bold tracking-tight">Study Rooms</span>
        <button className="border border-line px-3 py-1 text-sm md:hidden" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <ul className={`${open ? "block" : "hidden"} absolute left-0 right-0 top-full z-10 space-y-1 border-b border-line bg-white px-4 pb-3 md:static md:flex md:gap-6 md:space-y-0 md:border-0 md:p-0`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={cls} onClick={() => setOpen(false)} end={l.to === "/"}>
                {l.label}{l.to === "/my-bookings" && count > 0 ? ` (${count})` : ""}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

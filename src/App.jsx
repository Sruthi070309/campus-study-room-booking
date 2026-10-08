import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import BookRoom from "./pages/BookRoom.jsx";
import MyBookings from "./pages/MyBookings.jsx";

export default function App() {
  // Bookings live here so BookRoom (writes) and MyBookings (reads) share them.
  const [bookings, setBookings] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bookings")) || [];
    } catch {
      return [];
    }
  });

  // useEffect: keep bookings saved in the browser whenever they change
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (b) => setBookings((prev) => [...prev, { ...b, id: Date.now() }]);
  const cancelBooking = (id) => setBookings((prev) => prev.filter((b) => b.id !== id));

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar count={bookings.length} />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/book" element={<BookRoom onBook={addBooking} />} />
          <Route path="/my-bookings" element={<MyBookings bookings={bookings} onCancel={cancelBooking} />} />
          <Route path="*" element={<p className="text-center text-lg">Page not found.</p>} />
        </Routes>
      </main>
    </div>
  );
}

import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { rooms } from "../data/rooms.js";

export default function BookRoom({ onBook }) {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    studentName: "",
    room: params.get("room") || "",
    date: "",
    time: "",
    students: "",
  });
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);

  // One handler for every field (controlled inputs)
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    const room = rooms.find((r) => r.name === form.room);
    const today = new Date().toISOString().split("T")[0];
    if (!form.studentName.trim()) e.studentName = "Enter your name.";
    if (!room) e.room = "Choose a room.";
    if (!form.date) e.date = "Choose a date.";
    else if (form.date < today) e.date = "Date cannot be in the past.";
    if (!form.time) e.time = "Choose a time.";
    const n = Number(form.students);
    if (!n || n < 1) e.students = "Enter at least 1 student.";
    else if (room && n > room.capacity) e.students = `${room.name} holds only ${room.capacity} students.`;
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from refreshing
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    onBook({ ...form, students: Number(form.students) });
    setConfirmation(form);
    setForm({ studentName: "", room: "", date: "", time: "", students: "" });
  };

  const field = "w-full border border-line bg-white px-3 py-2 mt-1 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
  const Err = ({ name }) => (errors[name] ? <p className="mt-1 text-sm text-red-600">{errors[name]}</p> : null);

  return (
    <section className="mx-auto max-w-lg">
      <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight">Book a study room</h1>

      {confirmation && (
        <div className="mb-4 border border-free bg-white p-4 text-free">
          <p className="font-medium">Booking requested!</p>
          <p className="text-sm">{confirmation.room} on {confirmation.date} at {confirmation.time} for {confirmation.students} student(s).</p>
          <button onClick={() => navigate("/my-bookings")} className="mt-2 text-sm font-medium underline">View my bookings</button>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-sm border border-line bg-white p-6">
        <label className="block text-sm font-medium">Student name
          <input name="studentName" value={form.studentName} onChange={handleChange} className={field} />
          <Err name="studentName" />
        </label>
        <label className="block text-sm font-medium">Room
          <select name="room" value={form.room} onChange={handleChange} className={field}>
            <option value="">Select a room</option>
            {rooms.filter((r) => r.available).map((r) => (
              <option key={r.id} value={r.name}>{r.name} (max {r.capacity})</option>
            ))}
          </select>
          <Err name="room" />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium">Date
            <input type="date" name="date" value={form.date} onChange={handleChange} className={field} />
            <Err name="date" />
          </label>
          <label className="block text-sm font-medium">Time
            <input type="time" name="time" value={form.time} onChange={handleChange} className={field} />
            <Err name="time" />
          </label>
        </div>
        <label className="block text-sm font-medium">Number of students
          <input type="number" name="students" min="1" value={form.students} onChange={handleChange} className={field} />
          <Err name="students" />
        </label>
        <button type="submit" className="w-full bg-ink py-3 font-medium text-white hover:bg-accent">
          Request booking
        </button>
      </form>
    </section>
  );
}

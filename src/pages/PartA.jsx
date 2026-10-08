import { useEffect, useState } from "react";

/* ---------- Task 1: Components + JSX ---------- */
const Header = () => (
  <header className="bg-accent p-4 text-white">
    <h2 className="text-xl font-bold">My React Page</h2>
  </header>
);
const WelcomeMessage = () => (
  <div className="p-4">
    <h3 className="font-semibold">Welcome!</h3>
    <p className="text-sm text-muted">This page is built from three components written in JSX.</p>
    <button className="mt-2 bg-ink px-3 py-1 text-sm text-white">Get started</button>
  </div>
);
const Footer = () => <footer className="bg-paper p-3 text-center text-sm">© 2026 Hands-on Day 3</footer>;

/* ---------- Task 2: Reusable component with props ---------- */
const CourseCard = ({ title, organization, location, status }) => (
  <div className="border bg-white p-4">
    <h4 className="font-semibold">{title}</h4>
    <p className="text-sm">{organization} · {location}</p>
    <span className="mt-2 inline-block bg-paper px-2 py-0.5 text-xs">{status}</span>
  </div>
);
const courses = [
  { title: "React Basics", organization: "Learn Hub", location: "Chennai", status: "Open" },
  { title: "Node.js Essentials", organization: "Code Academy", location: "Online", status: "Full" },
  { title: "MongoDB Fundamentals", organization: "Data School", location: "Bengaluru", status: "Open" },
];

/* ---------- Task 3: State, events, controlled input ---------- */
function SearchDemo() {
  const [text, setText] = useState("");
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something..." className="w-full border px-3 py-2" />
      <p className="mt-2 text-sm">You typed: <strong>{text || "(nothing yet)"}</strong></p>
    </div>
  );
}

/* ---------- Task 4: map() + keys + useEffect (public API) ---------- */
function UsersList() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((res) => res.json())
      .then((data) => { setUsers(data); setStatus("done"); })
      .catch(() => setStatus("error"));
  }, []); // [] = run once when the component loads
  if (status === "loading") return <p className="text-sm">Loading users...</p>;
  if (status === "error") return <p className="text-sm text-red-600">Could not load users. Check your internet connection.</p>;
  return (
    <ul className="list-disc pl-5 text-sm">
      {users.map((u) => <li key={u.id}>{u.name} — {u.email}</li>)}
    </ul>
  );
}

/* ---------- Task 5: Controlled form ---------- */
function ProfileForm() {
  const [form, setForm] = useState({ name: "", role: "", location: "", status: "Active" });
  const [submitted, setSubmitted] = useState(null);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(form); };
  const f = "w-full border px-3 py-2";
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className={f} />
      <input name="role" value={form.role} onChange={handleChange} placeholder="Category / Role" required className={f} />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required className={f} />
      <select name="status" value={form.status} onChange={handleChange} className={f}>
        <option>Active</option><option>Inactive</option>
      </select>
      <button className="bg-ink px-4 py-2 text-white">Submit</button>
      {submitted && (
        <p className="bg-paper p-2 text-sm text-green-900">
          Submitted: {submitted.name}, {submitted.role}, {submitted.location}, {submitted.status}
        </p>
      )}
    </form>
  );
}

const Section = ({ title, children }) => (
  <section className="rounded-sm border border-line bg-white p-5">
    <h2 className="mb-3 text-lg font-bold">{title}</h2>
    {children}
  </section>
);

export default function PartA() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight">Part A – Concept demos</h1>
      <Section title="Task 1 – Components and JSX">
        <div className="border"><Header /><WelcomeMessage /><Footer /></div>
      </Section>
      <Section title="Task 2 – Reusable CourseCard with props">
        <div className="grid gap-3 sm:grid-cols-3">
          {courses.map((c) => <CourseCard key={c.title} {...c} />)}
        </div>
      </Section>
      <Section title="Task 3 – State, events and controlled input"><SearchDemo /></Section>
      <Section title="Task 4 – Dynamic list and useEffect (public API)"><UsersList /></Section>
      <Section title="Task 5 – React form"><ProfileForm /></Section>
      <Section title="Task 6 – Routing, Tailwind, responsive UI">
        <p className="text-sm">The whole app: React Router pages (Home, Rooms, Book a room, My bookings) styled with responsive Tailwind classes. Resize the window to see the navbar collapse.</p>
      </Section>
    </div>
  );
}

export default function BookingCard({ room, studentName, date, time, students, onCancel }) {
  return (
    <article className="border border-line border-l-4 border-l-accent bg-white p-5">
      <h3 className="font-display text-xl font-semibold">{room}</h3>
      <p className="mt-1 text-sm text-muted">{date} at {time}</p>
      <p className="mt-3 text-sm">{studentName}, group of {students}</p>
      <button onClick={onCancel} className="mt-4 text-sm font-medium text-busy underline underline-offset-4">
        Cancel booking
      </button>
    </article>
  );
}

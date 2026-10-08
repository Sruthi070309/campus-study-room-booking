// One dot per seat: capacity you can read at a glance.
export default function Seats({ count, className = "" }) {
  return (
    <span className={`flex flex-wrap gap-1 ${className}`} aria-label={`${count} seats`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="h-2.5 w-2.5 rounded-full bg-accent" />
      ))}
    </span>
  );
}

// Controlled input: value comes from state, onChange updates state.
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by room name or building"
      className="w-full border-0 border-b-2 border-ink bg-transparent py-3 text-xl placeholder:text-muted focus:border-accent focus:outline-none"
    />
  );
}

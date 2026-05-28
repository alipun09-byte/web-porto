export default function SectionHeader({ label, title, description, centered }) {
  return (
    <>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      <p className={`section-desc ${centered ? 'centered' : ''}`}>{description}</p>
    </>
  );
}

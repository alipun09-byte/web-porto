export default function WorkCard({ work }) {
  return (
    <div className={`work-card ${work.reversed ? 'reverse' : ''}`}>
      <div className="work-image">
        <img src={work.image} alt={work.title} loading="lazy" />
      </div>
      <div className="work-info">
        <span className="work-tag">{work.tag}</span>
        <h3>{work.title}</h3>
        <p>{work.description}</p>
        <div className="work-metrics">
          {work.metrics.map((metric) => (
            <div key={metric.label} className="work-metric">
              <span className="work-metric-value">{metric.value}</span>
              <span className="work-metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

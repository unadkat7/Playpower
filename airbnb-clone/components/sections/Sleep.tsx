import { sleeping } from "@/lib/data";

export function Sleep() {
  return (
    <section className="section">
      <h2 className="section__title">Where you&apos;ll sleep</h2>
      <div className="sleep-grid">
        {sleeping.map((s) => (
          <div className="sleep-card" key={s.title}>
            <img src={s.icon} alt="" />
            <div className="sleep-card__title">{s.title}</div>
            <div className="sleep-card__detail">{s.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

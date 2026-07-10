import { Icon } from "@/lib/icons";
import { thingsToKnow } from "@/lib/data";

export function ThingsToKnow() {
  return (
    <section className="section">
      <h2 className="section__title">Things to know</h2>
      <div className="ttk">
        {thingsToKnow.map((col) => (
          <div className="ttk__col" key={col.title}>
            <Icon name={col.icon} className="ico" />
            <div className="ttk__col-title">{col.title}</div>
            <p>{col.body}</p>
            <button className="ttk__learn" type="button">Show more</button>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Icon, IC } from "@/lib/icons";
import { listing } from "@/lib/data";

const DOW = ["S", "M", "T", "W", "T", "F", "S"];

type DayState = "" | "start" | "end" | "inrange" | "past";

function Month({
  year,
  month,
  title,
  stateFor,
}: {
  year: number;
  month: number; // 0-indexed
  title: string;
  stateFor: (day: number) => DayState;
}) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="calendar__month">
      <div className="calendar__month-title">{title}</div>
      <div className="calendar__dow">
        {DOW.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="calendar__grid">
        {cells.map((d, i) => {
          if (d === null) return <div key={i} className="day day--empty" />;
          const s = stateFor(d);
          const cls =
            "day" +
            (s === "start" ? " day--start" : "") +
            (s === "end" ? " day--end" : "") +
            (s === "inrange" ? " day--inrange" : "") +
            (s === "past" ? " day--past" : "");
          return (
            <div key={i} className={cls}>
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const NOV_BLOCKED = new Set([18, 19, 20, 21, 22, 23, 24, 29, 30]);

export function Calendar() {
  return (
    <section className="section">
      <h2 className="calendar-block__title">{listing.nightsHeading}</h2>
      <div className="calendar-block__sub">{listing.dateRange}</div>
      <div className="calendar">
        <div className="calendar__nav">
          <button type="button" aria-label="Previous month">
            <Icon name={IC.chevronLeft} className="ico" />
          </button>
          <button type="button" aria-label="Next month">
            <Icon name={IC.chevronRight} className="ico" />
          </button>
        </div>
        <Month
          year={2026}
          month={9}
          title="October 2026"
          stateFor={(d) => (d === 18 ? "start" : d === 23 ? "end" : d > 18 && d < 23 ? "inrange" : "")}
        />
        <Month
          year={2026}
          month={10}
          title="November 2026"
          stateFor={(d) => (NOV_BLOCKED.has(d) ? "past" : "")}
        />
      </div>
      <div className="calendar__foot">
        <span className="kbd-icon" aria-hidden="true">
          <Icon name={IC.keyboard} style={{ width: 16, height: 12, display: "inline-block" }} />
        </span>
        <button className="link-btn" type="button">Clear dates</button>
      </div>
    </section>
  );
}

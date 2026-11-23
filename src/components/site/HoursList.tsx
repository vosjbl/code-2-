import { hours } from "@/lib/salon";

export function HoursList() {
  return (
    <dl className="grid max-w-sm grid-cols-2 gap-x-6 gap-y-2 text-sm">
      {hours.map(({ day, time }) => (
        <div key={day} className="contents">
          <dt className="text-muted-foreground">{day}</dt>
          <dd className="text-right font-medium text-foreground">{time}</dd>
        </div>
      ))}
    </dl>
  );
}

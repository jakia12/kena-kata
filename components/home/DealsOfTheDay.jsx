import { deals } from "@/data/deals";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";

function DealCard({ d }: { d: (typeof deals)[number] }) {
  return (
    <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white">
      <div className="aspect-[16/9] bg-slate-100 grid place-items-center text-4xl">
        🍊
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold">{d.title}</div>
        <div className="mt-1 text-xs text-slate-500">{d.note}</div>
        <div className="mt-3 flex items-center gap-2 text-xs">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-100">
            00 Days
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-100">
            00 Hours
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-100">
            00 Min
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-100">
            00 Sec
          </span>
        </div>
      </div>
    </div>
  );
}

export function DealsOfTheDay() {
  return (
    <Container className="mt-10">
      <SectionHeader
        title="Deals Of The Day"
        rightHref="/search"
        rightLabel="All Deals"
      />
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {deals.map((d) => (
          <DealCard key={d.id} d={d} />
        ))}
      </div>
    </Container>
  );
}

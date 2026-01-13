import { Button } from "@/components/ui/button";
import { Container } from "../shared/Container";

function Banner({ title, desc, emoji, tone }) {
  const toneMap = {
    sand: "bg-amber-50 border-amber-100",
    pink: "bg-rose-50 border-rose-100",
    blue: "bg-sky-50 border-sky-100",
  }[tone];

  return (
    <div className={`rounded-3xl border p-6 ${toneMap}`}>
      <div className="flex items-center justify-between gap-6">
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <p className="mt-2 text-sm text-slate-600">{desc}</p>
          <Button className="mt-4 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700">
            Shop Now
          </Button>
        </div>
        <div className="text-5xl">{emoji}</div>
      </div>
    </div>
  );
}

export function PromoBanners() {
  return (
    <Container className="mt-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <Banner
          tone="sand"
          title="Everyday Fresh & Clean Products"
          desc="High quality groceries daily."
          emoji="🧅"
        />
        <Banner
          tone="pink"
          title="Make your Breakfast Healthy"
          desc="Simple choices, better mornings."
          emoji="🥛"
        />
        <Banner
          tone="blue"
          title="The best Organic Products Online"
          desc="Curated picks for your family."
          emoji="🥗"
        />
      </div>
    </Container>
  );
}

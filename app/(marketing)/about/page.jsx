import { Container } from "@/components/shared/Container";
import { Card, CardContent } from "@/components/ui/card";

function Feature({
  title,
  desc,
  emoji,
}: {
  title: string,
  desc: string,
  emoji: string,
}) {
  return (
    <Card className="rounded-3xl border-slate-200">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 border border-emerald-100 text-2xl">
            {emoji}
          </div>
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              {desc}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <div className="pb-16">
      <Container className="py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs text-slate-600 border border-slate-200">
            About NestMart
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            A clean ecommerce UI built for real-world scale
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 leading-relaxed">
            NestMart is a medium-to-advanced ecommerce frontend built with
            Next.js App Router, Tailwind CSS, shadcn/ui components, and Redux
            Toolkit. This version is UI-only, designed to impress interviews.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              emoji="⚡"
              title="Fast UI"
              desc="Optimized layouts, responsive grids, modern sections."
            />
            <Feature
              emoji="🧩"
              title="Scalable Structure"
              desc="Feature-based components and clean routing."
            />
            <Feature
              emoji="🛍️"
              title="Ecommerce Ready"
              desc="Cart/checkout/account pages with Stripe-ready design."
            />
            <Feature
              emoji="🔒"
              title="Auth-ready"
              desc="Login/register pages designed for real apps."
            />
            <Feature
              emoji="📦"
              title="Order system UI"
              desc="Orders list + tracking timeline, production style."
            />
            <Feature
              emoji="🎯"
              title="Interview-friendly"
              desc="Shows attention to UX and engineering structure."
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-sm font-semibold">
              Why this project is impressive
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Most internship projects fail because they look “toy-like”. This
              UI is designed to look like a real ecommerce product: professional
              spacing, consistent components, strong information hierarchy, and
              clear sections.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Homepage with marketplace layout",
                "Category listing + product detail",
                "Cart + checkout (Stripe placeholder)",
                "Account dashboard + orders UI",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
                >
                  ✓ {t}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
            <div className="text-sm font-semibold">Next step (later)</div>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Connect backend APIs, add Stripe Checkout/Payment Element, persist
              cart with Redux, and implement protected routes. But for
              interviews: this UI already looks “production”.
            </p>
            <div className="mt-6 rounded-2xl border border-emerald-100 bg-white p-4 text-sm text-slate-600">
              Tip: record a quick demo video (60–90s) showing pages + responsive
              behavior.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

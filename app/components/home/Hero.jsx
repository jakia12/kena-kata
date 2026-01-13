import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "../shared/Container";

export function Hero() {
  return (
    <Container className="pt-8">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-emerald-50">
        <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs text-emerald-700 border border-emerald-100">
              Fresh • Fast • Reliable
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Fresh Vegetables <br className="hidden sm:block" />
              <span className="text-emerald-700">Big discount</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm text-slate-600 leading-relaxed">
              Save up to 50% off on your first order. Clean UI now, Stripe +
              backend later.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex-1">
                <Input
                  className="h-11 rounded-xl bg-white"
                  placeholder="Your email address"
                />
              </div>
              <Button className="h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white border border-emerald-100 grid place-items-center">
              <div className="text-center">
                <div className="text-5xl">🥦🍋🌽</div>
                <p className="mt-2 text-sm text-slate-500">
                  Replace with a real product image later
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          <span className="h-2 w-2 rounded-full bg-emerald-200" />
          <span className="h-2 w-2 rounded-full bg-emerald-200" />
        </div>
      </div>
    </Container>
  );
}

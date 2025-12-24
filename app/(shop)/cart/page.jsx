import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import Link from "next/link";

export default function CartPage() {
  const items = products.slice(0, 3);

  return (
    <Container className="py-10">
      <h1 className="text-2xl font-semibold">Shopping Cart</h1>
      <p className="mt-1 text-sm text-slate-500">
        UI-only cart layout (Redux actions later)
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-4">
          {items.map((p) => (
            <div
              key={p.slug}
              className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5"
            >
              <div className="flex gap-4">
                <div className="h-20 w-20 rounded-2xl bg-slate-100 grid place-items-center text-3xl">
                  🥦
                </div>
                <div className="flex-1 min-w-0">
                  <div className="truncate font-semibold">{p.name}</div>
                  <div className="mt-1 text-sm text-slate-500">
                    By {p.vendor}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
                      Qty: 1
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
                      Remove
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-emerald-700">
                    ${p.price.toFixed(2)}
                  </div>
                  {p.oldPrice ? (
                    <div className="text-xs text-slate-400 line-through">
                      ${p.oldPrice.toFixed(2)}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold">Order Summary</div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$89.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$4.90</span>
              </div>
              <div className="h-px bg-slate-200 my-3" />
              <div className="flex justify-between font-semibold text-slate-900">
                <span>Total</span>
                <span>$93.90</span>
              </div>
            </div>

            <Button className="mt-5 h-12 w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700">
              Continue to Checkout
            </Button>

            <Link
              href="/"
              className="mt-3 block text-center text-sm text-emerald-700 hover:text-emerald-800"
            >
              Continue shopping →
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckoutPage() {
  return (
    <Container className="py-10">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <p className="mt-1 text-sm text-slate-500">
        Stripe-ready layout (UI only)
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 rounded-3xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold">Shipping information</div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Input className="h-11 rounded-xl" placeholder="First name" />
            <Input className="h-11 rounded-xl" placeholder="Last name" />
            <Input
              className="h-11 rounded-xl sm:col-span-2"
              placeholder="Email address"
            />
            <Input
              className="h-11 rounded-xl sm:col-span-2"
              placeholder="Street address"
            />
            <Input className="h-11 rounded-xl" placeholder="City" />
            <Input className="h-11 rounded-xl" placeholder="Postal code" />
          </div>

          <div className="mt-8 text-sm font-semibold">Payment</div>
          <div className="mt-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
            Stripe Elements will go here later (Card element / Payment element).
          </div>

          <Button className="mt-6 h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700">
            Place Order
          </Button>
        </div>

        <div className="lg:col-span-4 rounded-3xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold">Summary</div>
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
        </div>
      </div>
    </Container>
  );
}

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Container className="py-10">
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Left: Branding / Benefits */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-slate-200 bg-emerald-50 p-6 sm:p-10">
            <div className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs text-emerald-700 border border-emerald-100">
              NestMart • Member Access
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              Welcome back 👋
            </h1>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-xl">
              Log in to access your orders, wishlist, and faster checkout. This
              is UI-only now—backend later.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                <div className="text-sm font-semibold">Fast checkout</div>
                <p className="mt-1 text-sm text-slate-600">
                  Saved shipping + payment later with Stripe.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                <div className="text-sm font-semibold">Track orders</div>
                <p className="mt-1 text-sm text-slate-600">
                  Beautiful tracking UI you can extend.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                <div className="text-sm font-semibold">Wishlist</div>
                <p className="mt-1 text-sm text-slate-600">
                  Save items and come back later.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                <div className="text-sm font-semibold">Secure</div>
                <p className="mt-1 text-sm text-slate-600">
                  Auth flow will be added later.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-6">
          <Card className="rounded-3xl border-slate-200">
            <CardContent className="p-6 sm:p-10">
              <div>
                <h2 className="text-xl font-semibold">Log in</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Use your email & password to continue.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <Input
                    className="mt-2 h-11 rounded-xl"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <Input
                    className="mt-2 h-11 rounded-xl"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-600">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300"
                    />
                    Remember me
                  </label>
                  <button className="text-emerald-700 hover:text-emerald-800">
                    Forgot password?
                  </button>
                </div>

                <Button className="h-12 w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700">
                  Login
                </Button>

                <div className="relative py-3">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-slate-500">
                    or
                  </span>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <Button variant="outline" className="h-11 rounded-2xl">
                    Continue with Google
                  </Button>
                  <Button variant="outline" className="h-11 rounded-2xl">
                    Continue with GitHub
                  </Button>
                </div>

                <p className="pt-2 text-sm text-slate-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/auth/register"
                    className="text-emerald-700 hover:text-emerald-800"
                  >
                    Create one
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="mt-4 text-xs text-slate-500">
            By continuing, you agree to our Terms & Privacy (UI-only).
          </p>
        </div>
      </div>
    </Container>
  );
}

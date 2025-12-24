import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <Container className="py-10">
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Left */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-slate-200 bg-sky-50 p-6 sm:p-10">
            <div className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs text-sky-700 border border-sky-100">
              Create your NestMart account
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              Start shopping smarter ✨
            </h1>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-xl">
              Register to save your cart, manage orders, and unlock a smoother
              checkout experience.
            </p>

            <div className="mt-8 rounded-3xl bg-white border border-sky-100 p-6">
              <div className="text-sm font-semibold">
                What you’ll build later
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Email verification + JWT/Auth</li>
                <li>• Stripe checkout + order creation</li>
                <li>• Address book + profile settings</li>
                <li>• Order tracking + notifications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-6">
          <Card className="rounded-3xl border-slate-200">
            <CardContent className="p-6 sm:p-10">
              <div>
                <h2 className="text-xl font-semibold">Create account</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Sign up in seconds (UI-only).
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-slate-700">
                    First name
                  </label>
                  <Input
                    className="mt-2 h-11 rounded-xl"
                    placeholder="Mofazzel"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-slate-700">
                    Last name
                  </label>
                  <Input className="mt-2 h-11 rounded-xl" placeholder="Ivey" />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <Input
                    className="mt-2 h-11 rounded-xl"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <Input
                    className="mt-2 h-11 rounded-xl"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Confirm password
                  </label>
                  <Input
                    className="mt-2 h-11 rounded-xl"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                  />
                  <span>
                    I agree to the Terms and Privacy Policy (UI-only).
                  </span>
                </div>

                <div className="sm:col-span-2">
                  <Button className="h-12 w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700">
                    Create account
                  </Button>
                </div>
              </div>

              <div className="relative py-5">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-slate-500">
                  or
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <Button variant="outline" className="h-11 rounded-2xl">
                  Sign up with Google
                </Button>
                <Button variant="outline" className="h-11 rounded-2xl">
                  Sign up with GitHub
                </Button>
              </div>

              <p className="mt-4 text-sm text-slate-600">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-emerald-700 hover:text-emerald-800"
                >
                  Login
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Container } from "@/app/components/shared/Container";
import { registerSchema } from "@/lib/validators/registerSchema";
import { toast } from "sonner";

function toBool(v) {
  return v === "on" || v === "true" || v === true;
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setFormError("");
    setErrors({});
    setLoading(true);

    try {
      const fd = new FormData(e.currentTarget);

      const raw = {
        firstName: String(fd.get("firstName") || "").trim(),
        lastName: String(fd.get("lastName") || "").trim(),
        email: String(fd.get("email") || "").trim(),
        password: String(fd.get("password") || ""),
        confirmPassword: String(fd.get("confirmPassword") || ""),
        agree: toBool(fd.get("agree")),
      };

      const result = registerSchema.safeParse(raw);

      if (!result.success) {
        const fieldErrors = {};
        for (const issue of result.error.issues) {
          const field = issue.path?.[0] || "form";
          if (!fieldErrors[field]) fieldErrors[field] = issue.message;
        }
        setErrors(fieldErrors);
        return;
      }

      const valid = result.data;

      const payload = {
        name: `${valid.firstName.trim()} ${valid.lastName.trim()}`.trim(),
        email: valid.email.trim(),
        password: valid.password,
      };

      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!baseUrl) {
        throw new Error("Missing NEXT_PUBLIC_API_BASE_URL in .env.local");
      }

      const registerRes = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const registerData = await registerRes.json();

      if (!registerRes.ok) {
        toast.error(registerData?.message || "Registration failed", {
          className: "bg-red-50 text-red-700 border border-red-200",
        });
      } else {
        toast.success(registerData?.message || "Registration successful", {
          className: "bg-green-50 text-green-700 border border-green-200",
        });

        setTimeout(() => {
          router.push("/auth/login");
        }, 800);
      }
    } catch (err) {
      setFormError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container className="py-10">
      <div className="mx-auto max-w-[570px]">
        <Card className="rounded-3xl border-slate-200">
          <CardContent className="p-6 sm:p-10">
            <div>
              <h2 className="text-xl font-semibold">Create account</h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-slate-700">
                  First name
                </label>
                <Input
                  name="firstName"
                  className="mt-2 h-11 rounded-xl"
                  placeholder="Mofazzel"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm red">{errors.firstName}</p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-slate-700">
                  Last name
                </label>
                <Input
                  name="lastName"
                  className="mt-2 h-11 rounded-xl"
                  placeholder="Ivey"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm red">{errors.lastName}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  className="mt-2 h-11 rounded-xl"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm red">{errors.email}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <Input
                  name="password"
                  type="password"
                  className="mt-2 h-11 rounded-xl"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-1 text-sm red">{errors.password}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Confirm password
                </label>
                <Input
                  name="confirmPassword"
                  type="password"
                  className="mt-2 h-11 rounded-xl"
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm red">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="agree"
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                />
                <span>I agree to the Terms and Privacy Policy.</span>
              </div>
              {errors.agree && (
                <p className="sm:col-span-2 text-sm red">{errors.agree}</p>
              )}

              {formError && (
                <p className="sm:col-span-2 text-sm red">{formError}</p>
              )}

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60"
                >
                  {loading ? "Validating..." : "Create account"}
                </Button>
              </div>
            </form>

            <div className="relative py-5">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-slate-500">
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
    </Container>
  );
}

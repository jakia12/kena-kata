"use client";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agree: false,
};

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    setFormError("");
    setErrors({});
    setLoading(true);

    try {
      const fd = new FormData(e.currentTarget);

      const raw = {
        firstName: String(fd.get("firstName") || ""),
        lastName: String(fd.get("lastName") || ""),
        email: String(fd.get("email") || ""),
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
        setLoading(false);
        return;
      }

      console.log("form input data", result.data);
      const valid = result.data;

      const payload = {
        firstName: valid.firstName.trim(),
        lastName: valid.lastName.trim(),
        email: valid.email.trim(),
        password: valid.password,
      };

      console.log("valid registered payload", payload);
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
              <p className="mt-1 text-sm text-slate-500">
                Sign up in seconds (practice form state).
              </p>
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
                  value={form.firstName}
                  onChange={handleChange}
                  className="mt-2 h-11 rounded-xl"
                  placeholder="Mofazzel"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-slate-700">
                  Last name
                </label>
                <Input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="mt-2 h-11 rounded-xl"
                  placeholder="Ivey"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <Input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 h-11 rounded-xl"
                  placeholder="you@example.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <Input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  className="mt-2 h-11 rounded-xl"
                  placeholder="••••••••"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Confirm password
                </label>
                <Input
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="mt-2 h-11 rounded-xl"
                  placeholder="••••••••"
                />
              </div>

              <div className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                />
                <span>I agree to the Terms and Privacy Policy.</span>
              </div>

              {error && (
                <p className="sm:col-span-2 text-sm text-red-600">{error}</p>
              )}

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  className="h-12 w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700"
                >
                  Create account
                </Button>
              </div>
            </form>

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
    </Container>
  );
}

"use client";

import { Container } from "@/app/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { loginSchema } from "@/lib/validators/registerSchema";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setErrors({});
    setLoading(true);

    try {
      const fd = new FormData(e.currentTarget);

      const raw = {
        email: String(fd.get("email") || "").trim(),
        password: String(fd.get("password") || ""),
      };

      const result = loginSchema.safeParse(raw);

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

      const res = await signIn("credentials", {
        redirect: false,
        email: valid.email,
        password: valid.password,
      });

      if (!res?.ok) {
        toast.error(res?.error || "Invalid email or password", {
          className: "bg-red-50 text-red-700 border border-red-200",
        });
        return;
      }

      toast.success("Login successful", {
        className: "bg-green-50 text-green-700 border border-green-200",
      });

      router.push("/");
    } catch (err) {
      setFormError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-10">
      <div className="mx-auto max-w-[570px]">
        <Card className="rounded-3xl border-slate-200">
          <CardContent className="p-6 sm:p-10">
            <div>
              <h2 className="text-xl font-semibold">Log in</h2>
              <p className="mt-1 text-sm text-slate-500">
                Use your email & password to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
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

              <div>
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

              {formError && <p className="text-sm red">{formError}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60"
              >
                {loading ? "Validating..." : "Login"}
              </Button>

              <div className="relative py-3">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-slate-500">
                  or
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 rounded-2xl"
                  onClick={() => signIn("google")}
                >
                  Continue with Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 rounded-2xl"
                  onClick={() => signIn("github")}
                >
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
            </form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

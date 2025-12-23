import { MobileMenuSheet } from "@/components/layout/MobileMenuSheet";
import { TopBar } from "@/components/layout/TopBar";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navLinks } from "@/data/nav";
import Link from "next/link";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white">
      {children}
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <TopBar />

      <div className="border-b border-slate-200">
        <Container className="py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <MobileMenuSheet />
              <Link href="/" className="flex items-center gap-2">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white font-bold">
                  N
                </div>
                <div className="leading-tight">
                  <div className="font-semibold">NestMart</div>
                  <div className="text-xs text-slate-500 -mt-0.5">
                    Grocery &amp; Fresh
                  </div>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex flex-1 items-center gap-3 px-6">
              <Button
                variant="outline"
                className="h-11 rounded-xl border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              >
                Browse All Categories
              </Button>

              <div className="relative flex-1">
                <Input
                  className="h-11 rounded-xl pl-4 pr-10"
                  placeholder="Search for items..."
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  ⌕
                </span>
              </div>

              <div className="hidden xl:flex items-center gap-2 text-sm text-slate-600">
                <span className="rounded-full bg-slate-100 px-3 py-2">
                  📍 Your Location
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-2">
                  ⚖ Compare
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-2">
                  ♡ Wishlist
                </span>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <Link href="/cart" className="hidden sm:block">
                <Icon>🛒</Icon>
              </Link>
              <Link href="/account" className="hidden sm:block">
                <Icon>👤</Icon>
              </Link>
              <div className="hidden md:flex flex-col items-end ml-2">
                <div className="text-sm font-semibold text-emerald-700">
                  1900 - 888
                </div>
                <div className="text-xs text-slate-500">
                  24/7 Support Center
                </div>
              </div>
            </div>
          </div>

          <nav className="mt-4 hidden lg:flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-slate-700">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-emerald-700"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="text-xs text-slate-500">
              100% Secure delivery without contacting the courier
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

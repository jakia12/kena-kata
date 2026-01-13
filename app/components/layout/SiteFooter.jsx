import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Container } from "../shared/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white font-bold">
                N
              </div>
              <div>
                <div className="font-semibold">NestMart</div>
                <div className="text-xs text-slate-500">Grocery & Fresh</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              A modern grocery ecommerce UI built with Next.js, Tailwind,
              shadcn/ui, and Redux Toolkit.
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div>📍 Address: 171 W Campbell Ave, USA</div>
              <div>📞 Call: (021) 543-9875</div>
              <div>⏱ Hours: 10:00 - 18:00, Mon - Sat</div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="font-semibold text-sm">Company</div>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <Link className="block hover:text-emerald-700" href="/about">
                  About
                </Link>
                <Link className="block hover:text-emerald-700" href="/contact">
                  Contact
                </Link>
                <Link className="block hover:text-emerald-700" href="/orders">
                  Orders
                </Link>
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm">Account</div>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <Link className="block hover:text-emerald-700" href="/account">
                  My Account
                </Link>
                <Link className="block hover:text-emerald-700" href="/wishlist">
                  Wishlist
                </Link>
                <Link
                  className="block hover:text-emerald-700"
                  href="/orders/tracking"
                >
                  Tracking
                </Link>
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm">Corporate</div>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <Link className="block hover:text-emerald-700" href="#">
                  Become a Vendor
                </Link>
                <Link className="block hover:text-emerald-700" href="#">
                  Affiliate Program
                </Link>
                <Link className="block hover:text-emerald-700" href="#">
                  Careers
                </Link>
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm">Popular</div>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <Link
                  className="block hover:text-emerald-700"
                  href="/category/vegetables"
                >
                  Vegetables
                </Link>
                <Link
                  className="block hover:text-emerald-700"
                  href="/category/coffee"
                >
                  Coffee & Tea
                </Link>
                <Link
                  className="block hover:text-emerald-700"
                  href="/category/snacks"
                >
                  Snacks
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} NestMart UI. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Payments: Visa • MasterCard • Amex</span>
            <span className="text-slate-300">|</span>
            <span className="hover:text-emerald-700 cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-emerald-700 cursor-pointer">Terms</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

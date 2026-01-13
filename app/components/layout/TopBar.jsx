import Link from "next/link";
import { Container } from "../shared/Container";

export function TopBar() {
  return (
    <div className="hidden md:block border-b border-slate-200 bg-slate-50">
      <Container className="py-2">
        <div className="flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-emerald-700">
              About Us
            </Link>
            <Link href="/account" className="hover:text-emerald-700">
              My Account
            </Link>
            <Link href="/wishlist" className="hover:text-emerald-700">
              Wishlist
            </Link>
            <Link href="/orders/tracking" className="hover:text-emerald-700">
              Order Tracking
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span>Need help? Call: 1900 - 888</span>
            <span className="text-slate-300">|</span>
            <span>English</span>
            <span className="text-slate-300">|</span>
            <span>USD</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

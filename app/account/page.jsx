import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Container } from "../components/shared/Container";

function StatCard({ title, value, hint }) {
  return (
    <Card className="rounded-3xl border-slate-200">
      <CardContent className="p-5">
        <div className="text-sm text-slate-500">{title}</div>
        <div className="mt-2 text-2xl font-semibold">{value}</div>
        <div className="mt-1 text-xs text-slate-500">{hint}</div>
      </CardContent>
    </Card>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-slate-100 py-3 text-sm">
      <div className="text-slate-500">{label}</div>
      <div className="text-slate-800 font-medium text-right">{value}</div>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Container className="py-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">My Account</h1>
          <p className="mt-1 text-sm text-slate-500">
            Profile overview & quick actions (UI only)
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-2xl">
            Edit Profile
          </Button>
          <Button className="rounded-2xl bg-emerald-600 hover:bg-emerald-700">
            Settings
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard title="Orders" value="12" hint="Total orders placed" />
            <StatCard title="Wishlist" value="8" hint="Saved items" />
            <StatCard title="Rewards" value="$24" hint="Credits / promos" />
          </div>

          <Card className="rounded-3xl border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Recent Orders</div>
                  <div className="text-sm text-slate-500">
                    Your last purchases (UI)
                  </div>
                </div>
                <Link
                  href="/orders"
                  className="text-sm text-emerald-700 hover:text-emerald-800"
                >
                  View all →
                </Link>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  {
                    id: "NM-10421",
                    status: "Delivered",
                    total: "$93.90",
                    date: "Dec 21, 2025",
                  },
                  {
                    id: "NM-10388",
                    status: "Processing",
                    total: "$41.20",
                    date: "Dec 18, 2025",
                  },
                  {
                    id: "NM-10302",
                    status: "Shipped",
                    total: "$66.10",
                    date: "Dec 10, 2025",
                  },
                ].map((o) => (
                  <div
                    key={o.id}
                    className="rounded-2xl border border-slate-200 p-4 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="font-semibold">{o.id}</div>
                      <div className="text-sm text-slate-500">{o.date}</div>
                    </div>
                    <div className="text-sm text-slate-600">{o.status}</div>
                    <div className="font-semibold text-emerald-700">
                      {o.total}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <Card className="rounded-3xl border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 border border-emerald-100 text-xl">
                  👤
                </div>
                <div>
                  <div className="font-semibold">Mofazzel Ivey</div>
                  <div className="text-sm text-slate-500">
                    mofazzel@example.com
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <InfoRow label="Phone" value="+1 (000) 000-0000" />
                <InfoRow
                  label="Default Address"
                  value="171 W Campbell Ave, USA"
                />
                <InfoRow label="Member Since" value="2025" />
              </div>

              <div className="mt-5 grid gap-2">
                <Link
                  href="/orders/tracking"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm hover:bg-slate-50"
                >
                  Track an order →
                </Link>
                <Link
                  href="/wishlist"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm hover:bg-slate-50"
                >
                  View wishlist →
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-3xl border border-slate-200 bg-emerald-50 p-6">
            <div className="text-sm font-semibold">Pro tip</div>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Later: connect this to Redux + API. Keep this UI as your
              “interview wow” page.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

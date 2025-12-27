import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function InfoCard({
  title,
  value,
  emoji,
}: {
  title: string,
  value: string,
  emoji: string,
}) {
  return (
    <Card className="rounded-3xl border-slate-200">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 border border-emerald-100 text-2xl">
            {emoji}
          </div>
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="mt-1 text-sm text-slate-600">{value}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ContactPage() {
  return (
    <Container className="py-10">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
        <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs text-slate-600 border border-slate-200">
          Contact
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
          We’d love to hear from you
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
          This is a UI-only contact page. Later you can connect it to an email
          service or backend endpoint.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          <InfoCard
            title="Phone"
            value="1900 - 888 (24/7 Support Center)"
            emoji="📞"
          />
          <InfoCard title="Email" value="support@nestmart.com" emoji="✉️" />
          <InfoCard
            title="Address"
            value="171 W Campbell Ave, Los Angeles, CA, USA"
            emoji="📍"
          />

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
            <div className="text-sm font-semibold">Support hours</div>
            <p className="mt-2 text-sm text-slate-600">
              Mon–Sat: 10:00 – 18:00
            </p>
            <p className="text-sm text-slate-600">Sunday: Closed</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Card className="rounded-3xl border-slate-200">
            <CardContent className="p-6 sm:p-10">
              <div className="text-sm font-semibold">Send a message</div>
              <p className="mt-1 text-sm text-slate-500">
                We usually respond within 24 hours (UI only)
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Full name
                  </label>
                  <Input
                    className="mt-2 h-11 rounded-xl"
                    placeholder="Your name"
                  />
                </div>
                <div>
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
                    Subject
                  </label>
                  <Input
                    className="mt-2 h-11 rounded-xl"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    className="mt-2 min-h-[140px] w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Write your message..."
                  />
                </div>

                <div className="sm:col-span-2 flex items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    By sending, you agree to our privacy policy (UI-only).
                  </p>
                  <Button className="h-11 rounded-2xl bg-emerald-600 hover:bg-emerald-700">
                    Send message
                  </Button>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                Later you can integrate: SendGrid / Resend / API route.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}

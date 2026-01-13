"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/nav";

import Link from "next/link";

export function MobileMenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="h-10 w-10 rounded-xl p-0 lg:hidden"
        >
          ☰
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-white font-bold">
              N
            </span>
            NestMart
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 text-xs text-slate-500">
          Tip: This is UI-only. You’ll add auth/cart actions later.
        </div>
      </SheetContent>
    </Sheet>
  );
}

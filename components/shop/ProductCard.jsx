import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function ProductCard({ product, variant = "grid" }) {
  return (
    <Card className="rounded-3xl border-slate-200">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="text-xs text-slate-500">{product.category}</div>

          {product.tag ? (
            <Badge
              className="rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700"
              variant="outline"
            >
              {product.tag}
            </Badge>
          ) : null}
        </div>

        <Link href={`/product/${product.slug}`} className="block">
          <div
            className={`mt-3 grid place-items-center rounded-2xl bg-slate-100 ${
              variant === "wide" ? "aspect-[16/10]" : "aspect-square"
            }`}
          >
            <div className="text-4xl">🥑</div>
          </div>

          <div className="mt-4">
            <div className="line-clamp-2 text-sm font-semibold hover:text-emerald-700">
              {product.name}
            </div>

            <div className="mt-1 text-xs text-slate-500">
              By {product.vendor}
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-end gap-2">
                <div className="font-semibold text-emerald-700">
                  ${product.price.toFixed(2)}
                </div>

                {product.oldPrice ? (
                  <div className="text-xs text-slate-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </div>
                ) : null}
              </div>

              <div className="text-xs text-slate-500">
                ⭐ {product.rating.toFixed(1)}
              </div>
            </div>
          </div>
        </Link>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="h-10 rounded-xl border border-slate-200 text-sm hover:bg-slate-50">
            ♡ Wishlist
          </button>

          <button className="h-10 rounded-xl bg-emerald-600 text-sm text-white hover:bg-emerald-700">
            Add
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

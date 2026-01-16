"use client";
import { useUpsertCartItemMutation } from "@/apiSlice";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { addToCart } from "@/store/slices/cartSlice";
import { addToWishlist } from "@/store/slices/wishlistSlice";
import { Eye, Heart } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";

function Stars({ value = 0 }) {
  const v = Math.max(0, Math.min(5, Number(value) || 0));
  const full = Math.floor(v);
  const half = v - full >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i < full;
        const isHalf = i === full && half;

        return (
          <span key={i} className="text-xs">
            {isFull ? "★" : isHalf ? "⯪" : "☆"}
          </span>
        );
      })}
    </div>
  );
}

export function ProductCard({ product }) {
  const title = product?.title ?? product?.name ?? "Untitled product";
  const brand = product?.brand ?? product?.vendor ?? "";
  const category = product?.category ?? "";
  const price = Number(product?.price ?? 0);
  const compareAt = Number(product?.compareAtPrice ?? product?.oldPrice ?? 0);
  const ratingAvg = Number(product?.ratingAvg ?? 0);
  const ratingCount = Number(product?.ratingCount ?? 0);
  const img = product?.images?.[0];

  const dispatch = useDispatch();

  // const [addToWishlistApi] = useAddToWishlistMutation();
  const [upsertCartItem] = useUpsertCartItemMutation();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart(product));
    try {
      const res = await upsertCartItem({
        productId: product._id,
        qty: 1,
      }).unwrap();
      console.log("the res data", res);
    } catch (err) {
      console.error("Failed to sync cart:", err);
    }
  };

  return (
    <Card
      className="group overflow-hidden rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      style={{ paddingTop: 0, paddingBottom: 0 }}
    >
      <CardContent className="p-0">
        {/* Image */}
        <Link href={`/shop/products/${product._id}`} className="block">
          <div className="relative aspect-[4/3] bg-slate-50">
            {/* span */}
            <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
              {category ? (
                <Badge className="rounded-full bg-white/90 text-slate-700 border border-slate-200">
                  {category}
                </Badge>
              ) : null}

              {compareAt > price ? (
                <Badge className="rounded-full bg-emerald-600 text-white border-emerald-600">
                  Sale
                </Badge>
              ) : null}
            </div>

            {/* Hover actions */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
              <div className="pointer-events-auto flex items-center gap-2">
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/95 shadow-sm ring-1 ring-slate-200 transition hover:bg-white hover:text-emerald-600 cursor-pointer"
                  title="Quick view"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <Eye size={18} />
                </button>

                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/95 shadow-sm ring-1 ring-slate-200 transition hover:bg-white hover:text-rose-600 cursor-pointer"
                  title="Wishlist"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(addToWishlist(product));
                    // try{
                    //   await addToWishlistApi({productId.product._id}).unwrap();
                    // }catch(err){
                    //   dispatch(addToWishlist(product))
                    //   console.error(err)
                    // }
                  }}
                >
                  <Heart size={18} />
                </button>

                <button
                  type="button"
                  className="h-10 rounded-full bg-emerald-600 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 cursor-pointer"
                  title="Add to cart"
                  onClick={handleAddToCart}
                >
                  Add
                </button>
              </div>
            </div>

            {/* Image */}
            <img
              src={img || "/placeholder.png"}
              alt={title}
              className="h-[280px] w-full  transition duration-300 group-hover:scale-[1.03]"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.png";
              }}
            />
          </div>
        </Link>

        {/* Info */}
        <div className="p-5">
          <div className="min-h-[44px]">
            <Link
              href={`/shop/products/${product._id}`}
              className="line-clamp-2 text-[15px] font-semibold text-slate-900 hover:text-emerald-700"
            >
              {title}
            </Link>

            {brand ? (
              <p className="mt-1 text-xs text-slate-500">By {brand}</p>
            ) : (
              <p className="mt-1 text-xs text-slate-500">&nbsp;</p>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-end gap-2">
              <div className="text-lg font-semibold text-slate-900">
                ${price.toFixed(2)}
              </div>

              {compareAt > price ? (
                <div className="text-sm text-slate-400 line-through">
                  ${compareAt.toFixed(2)}
                </div>
              ) : null}
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <Stars value={ratingAvg} />
              <span className="text-xs">
                {ratingAvg ? ratingAvg.toFixed(1) : "0.0"}
                {ratingCount ? ` (${ratingCount})` : ""}
              </span>
            </div>
          </div>

          {/* Bottom actions (mobile-friendly, always visible) */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
            <button
              type="button"
              className="h-10 rounded-2xl border border-slate-200 text-sm hover:bg-slate-50"
            >
              ♡ Wishlist
            </button>

            <button
              type="button"
              className="h-10 rounded-2xl bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Add
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

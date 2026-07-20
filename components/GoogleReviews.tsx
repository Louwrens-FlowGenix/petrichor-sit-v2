"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  author: string;
  avatar: string | null;
  rating: number;
  text: string;
  when: string;
};

type Payload = {
  configured: boolean;
  rating?: number | null;
  count?: number;
  writeReviewUrl?: string;
  reviews: Review[];
};

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < n ? "fill-ochre-500" : "fill-stone-200"}`}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<Payload | null>(null);
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  const reviews = data?.reviews ?? [];

  useEffect(() => {
    if (reviews.length < 2) return;
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(id);
  }, [reviews.length]);

  // Nothing to show yet (not configured, or no reviews) — render nothing.
  if (!reviews.length) return null;

  const r = reviews[index];

  return (
    <section id="reviews" className="bg-green-950 py-20 text-stone-100 sm:py-28">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow !text-ochre-400">What clients say</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Reviews, straight from Google
            </h2>
          </div>
          {data?.rating ? (
            <div className="flex items-center gap-3">
              <Stars n={Math.round(data.rating)} />
              <p className="text-sm text-stone-300">
                <span className="font-mono text-base text-stone-50">{data.rating.toFixed(1)}</span>
                {" · "}
                {data.count} Google review{data.count === 1 ? "" : "s"}
              </p>
            </div>
          ) : null}
        </div>

        <div
          className="mt-12"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <figure key={index} className="animate-fadeup mx-auto max-w-3xl text-center">
            <Stars n={r.rating} />
            <blockquote className="mt-6 font-display text-xl leading-relaxed text-stone-50 sm:text-2xl">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center gap-3 text-sm text-stone-300">
              {r.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={r.avatar} alt="" className="h-8 w-8 rounded-full" loading="lazy" />
              ) : null}
              <span className="text-stone-100">{r.author}</span>
              {r.when ? <span aria-hidden="true">·</span> : null}
              <span>{r.when}</span>
            </figcaption>
          </figure>

          {reviews.length > 1 && (
            <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Reviews">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-ochre-500" : "w-2 bg-stone-50/25 hover:bg-stone-50/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {data?.writeReviewUrl ? (
          <div className="mt-10 text-center">
            <a
              href={data.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !border-stone-50/25 !text-stone-100 hover:!border-stone-50 hover:!bg-stone-50/10"
            >
              Write a review on Google
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

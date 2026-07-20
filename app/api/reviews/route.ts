import { NextResponse } from "next/server";

export const revalidate = 3600; // cache Google response for 1 hour

type GoogleReview = {
  rating: number;
  text?: { text: string };
  originalText?: { text: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
};

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    // Not configured yet — the carousel simply won't render.
    return NextResponse.json({ configured: false, reviews: [] });
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ configured: true, reviews: [] });
    }

    const data = await res.json();
    const reviews = ((data.reviews as GoogleReview[]) ?? [])
      .filter((r) => (r.rating ?? 0) >= 4 && (r.text?.text || r.originalText?.text))
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Google user",
        avatar: r.authorAttribution?.photoUri ?? null,
        rating: r.rating,
        text: r.text?.text ?? r.originalText?.text ?? "",
        when: r.relativePublishTimeDescription ?? "",
      }));

    return NextResponse.json({
      configured: true,
      rating: data.rating ?? null,
      count: data.userRatingCount ?? 0,
      writeReviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
      reviews,
    });
  } catch {
    return NextResponse.json({ configured: true, reviews: [] });
  }
}

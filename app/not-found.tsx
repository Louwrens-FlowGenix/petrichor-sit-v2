import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl">This page doesn't exist</h1>
      <p className="mx-auto mt-4 max-w-md text-stone-500">
        The address may have changed. Head back to the homepage or get in
        touch and we'll point you in the right direction.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}

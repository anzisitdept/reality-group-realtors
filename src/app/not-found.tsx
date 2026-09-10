import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-24 md:py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <div className="section-kicker">404</div>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">Page not found.</h1>
      <p className="text-[var(--color-text-secondary)] max-w-md mb-8 leading-relaxed">
        The page you're looking for may have moved, or it may no longer exist. Let's get you back to
        exploring South Florida real estate.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
        <Link href="/properties" className="btn-secondary">
          Browse Properties
        </Link>
      </div>
    </section>
  );
}

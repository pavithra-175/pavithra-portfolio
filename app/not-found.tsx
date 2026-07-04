import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-6 text-center text-white">
      <div className="max-w-md">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-sky">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center rounded-full border border-border/70 px-5 py-2 text-sm transition-colors hover:border-accent-sky/60 hover:text-accent-sky"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

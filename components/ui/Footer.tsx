import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted sm:flex-row md:px-10">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Designed with ❤️</p>
      </div>
    </footer>
  );
}

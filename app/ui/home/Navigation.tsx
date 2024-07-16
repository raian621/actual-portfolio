export default function Navigation() {
  return (
    <nav className="flex gap-4 md:gap-12 justify-center">
      <span className="font-bold text-strong">Home</span>
      <a className="dark:hover:text-slate-300 hover:text-slate-500" href="/contact">Contact</a>
      <a className="dark:hover:text-slate-300 hover:text-slate-500" href="/blog">Blog</a>
    </nav>
  );
}

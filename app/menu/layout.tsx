import Categories from "../components/categories";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid justify-center">
      <section className="mt-5 flex gap-5 min-h-screen">
        <aside className="w-60 min-h-screen text-slate-800 hidden lg:block">
          <Categories />
        </aside>
        <div className="m-5">{children}</div>
      </section>
    </div>
  );
}

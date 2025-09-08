export default function Section({ title, class, children }: { title: string; class: string; children: React.ReactNode }) {
  return (
    <section className={`section${class}`}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

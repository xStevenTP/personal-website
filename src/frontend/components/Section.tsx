export default function Section({ title, children, class }: { title: string; children: React.ReactNode, class: string }) {
  return (
    <section className={`section${class}`}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

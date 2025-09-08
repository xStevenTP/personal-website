export default function Section({ title, customClass = "", children }: { title: string; customClass: string; children: React.ReactNode }) {
  return (
    <section className={`section${customClass}`}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

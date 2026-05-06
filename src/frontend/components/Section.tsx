import SectionHeader from './SectionHeader';

export default function Section({
  eyebrow,
  title,
  lede,
  children,
  customClass: _customClass,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
  customClass?: string;
}) {
  return (
    <section style={{ paddingBlock: 'var(--space-16)' }}>
      <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
      <div style={{ marginTop: 'var(--space-8)' }}>{children}</div>
    </section>
  );
}

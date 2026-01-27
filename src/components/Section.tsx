import type { JSX } from 'react';

type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props): JSX.Element {
  return (
    <section className="h-min rounded-md bg-neutral-800 p-8">
      {children}
    </section>
  );
}

function SectionTitle({ children }: Props): JSX.Element {
  return <h2 className="text-md mb-4 font-bold text-violet-300">{children}</h2>;
}

export { Section, SectionTitle };

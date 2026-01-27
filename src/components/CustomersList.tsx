import type { JSX } from 'react';

import type { Service } from '../types';
import { Section, SectionTitle } from './Section';
import { When } from './When';

type Props = {
  queue: Service[];
  children: React.ReactNode;
};

export function CustomersList({ children, queue }: Props): JSX.Element {
  return (
    <div className="flex-1">
      <Section>
        <SectionTitle>Current Queue</SectionTitle>
        <When condition={queue.length > 0}>{children}</When>
        <When condition={queue.length === 0}>
          <p className="text-sm text-gray-400">No customer data</p>
        </When>
      </Section>
    </div>
  );
}

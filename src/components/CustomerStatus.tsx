import { twJoin } from 'tailwind-merge';

import type { Customer } from '../types';
import type { JSX } from 'react';

type Props = {
  status: Customer['status'];
};

const statusClass: Record<Customer['status'], string> = {
  completed: 'text-teal-300',
  serving: 'text-amber-200',
  waiting: 'text-blue-400',
};

export function CustomerStatus({ status }: Props): JSX.Element {
  return (
    <p className={twJoin('mt-2 text-sm font-semibold', statusClass[status])}>
      + {status}
    </p>
  );
}

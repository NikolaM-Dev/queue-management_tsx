import type { JSX } from 'react';
import { FaHourglassStart, FaCheckSquare, FaTrash } from 'react-icons/fa';

import type { Customer } from '../types';
import { Button } from './Button';

type Props = {
  customer: Customer;
  onRemove: (id: number) => void;
};

export function CustomersListItem({ customer, onRemove }: Props): JSX.Element {
  return (
    <article className="flex justify-between rounded-md bg-neutral-900 p-6">
      <div>
        <h3 className="font-bold text-gray-200">{customer.name}</h3>
        <p className="text-sm text-gray-400">{customer.serviceType}</p>
        <p className="text-sm font-semibold text-cyan-200">{customer.status}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button accent="bg-emerald-300" label="Serve" onClick={() => {}}>
          <FaHourglassStart />
        </Button>
        <Button accent="bg-sky-300" label="Complete" onClick={() => {}}>
          <FaCheckSquare />
        </Button>
        <Button
          accent="bg-red-300"
          label="Remove"
          onClick={() => onRemove(customer.id)}
        >
          <FaTrash />
        </Button>
      </div>
    </article>
  );
}

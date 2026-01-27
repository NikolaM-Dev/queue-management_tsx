import { FaAddressBook } from 'react-icons/fa';
import { useState, type JSX } from 'react';

import type { CreateCustomerPayload, ServiceType } from '../types';
import { Section, SectionTitle } from './Section';

type Props = {
  onAdd: (payload: CreateCustomerPayload) => void;
};

export function CustomerForm({ onAdd }: Props): JSX.Element {
  const [customerName, setCustomerName] = useState('');
  const [customerService, setCustomerService] = useState<ServiceType | string>(
    '',
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = customerName.trim();
    const serviceType = customerService.trim();
    if (name.length === 0 || serviceType.length === 0) {
      return;
    }

    onAdd({ name, serviceType: serviceType as ServiceType });
    setCustomerName('');
    setCustomerService('');
  };

  return (
    <Section>
      <SectionTitle>Add to Queue</SectionTitle>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="ease w-full rounded-md border border-neutral-700 bg-transparent px-3 py-2 text-sm shadow-sm transition duration-300 placeholder:text-neutral-500 hover:border-gray-400 focus:border-neutral-500 focus:shadow focus:outline-none"
          type="text"
          placeholder="Customer name"
          required
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <select
          className="ease w-full rounded-md border border-neutral-700 bg-transparent px-3 py-2 text-sm shadow-sm transition duration-300 hover:border-gray-400 focus:border-neutral-500 focus:shadow focus:outline-none"
          required
          value={customerService}
          onChange={(e) => setCustomerService(e.target.value)}
        >
          <option value="" selected hidden>
            Select Service
          </option>
          <option value="consultation">Consultation</option>
          <option value="payment">Payment</option>
          <option value="support">Support</option>
        </select>
        <button
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-violet-500 px-4 py-2 text-base font-semibold text-white opacity-90 hover:opacity-80"
          type="submit"
        >
          <FaAddressBook />
          Add Customer
        </button>
      </form>
    </Section>
  );
}

import { useState, type JSX } from 'react';

import type { CreateCustomerPayload, Customer } from './types';
import { CustomerForm } from './components/CustomerForm';
import { CustomersList } from './components/CustomersList';
import { CustomersListItem } from './components/CustomersListItem';
import { Header } from './components/Header';

export function App(): JSX.Element {
  const [queue, setQueue] = useState<Customer[]>([]);

  function queueAppend(payload: CreateCustomerPayload): void {
    setQueue((prev) =>
      prev.concat({
        ...payload,
        id: new Date().getTime(),
        status: 'waiting',
      }),
    );
  }
  function queueRemove(id: number): void {
    setQueue((prev) => prev.filter((service) => service.id !== id));
  }

  return (
    <>
      <Header />
      <main className="m-auto flex max-w-5xl gap-8">
        <CustomerForm onAdd={queueAppend} />
        <CustomersList queue={queue}>
          {queue.map((service) => (
            <CustomersListItem
              key={service.id}
              customer={)service}
              onRemove={queueRemove}
            />
          ))}
        </CustomersList>
      </main>
    </>
  );
}

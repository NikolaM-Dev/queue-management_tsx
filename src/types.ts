export type ServiceType = 'consultation' | 'payment' | 'support';

export type Customer = {
  id: number;
  name: string;
  serviceType: ServiceType;
  status: 'waiting' | 'serving' | 'completed';
};

export type CreateCustomerPayload = {
  name: string;
  serviceType: ServiceType;
};

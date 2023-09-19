import { GetQueryInterface } from 'interfaces';

export interface BillingDetailsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  payment_method?: string;
  invoice_number?: string;

  _count?: {};
}

export interface BillingDetailsGetQueryInterface extends GetQueryInterface {
  id?: string;
  payment_method?: string;
  invoice_number?: string;
}

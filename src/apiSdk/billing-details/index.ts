import axios from 'axios';
import queryString from 'query-string';
import { BillingDetailsInterface, BillingDetailsGetQueryInterface } from 'interfaces/billing-details';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBillingDetails = async (
  query?: BillingDetailsGetQueryInterface,
): Promise<PaginatedInterface<BillingDetailsInterface>> => {
  const response = await axios.get('/api/billing-details', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBillingDetails = async (billingDetails: BillingDetailsInterface) => {
  const response = await axios.post('/api/billing-details', billingDetails);
  return response.data;
};

export const updateBillingDetailsById = async (id: string, billingDetails: BillingDetailsInterface) => {
  const response = await axios.put(`/api/billing-details/${id}`, billingDetails);
  return response.data;
};

export const getBillingDetailsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/billing-details/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBillingDetailsById = async (id: string) => {
  const response = await axios.delete(`/api/billing-details/${id}`);
  return response.data;
};

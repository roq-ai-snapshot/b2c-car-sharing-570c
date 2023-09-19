const mapping: Record<string, string> = {
  'billing-details': 'billing_details',
  bookings: 'booking',
  cars: 'car',
  companies: 'company',
  locations: 'location',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

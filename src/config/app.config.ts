interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Owner',
    'Fleet Manager',
    'Admin',
    'Business Owner',
    'Car Manager',
    'Operations Staff',
    'Customer',
    'Administrator',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View car details',
    'Check car availability',
    'View location information',
  ],
  ownerAbilities: [
    'Manage billing details',
    'Manage user information',
    'Manage company information',
    'Manage car details',
    'Manage bookings',
    'Manage location details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/072d722f-7fb7-41bb-ab9b-82772e491521',
};

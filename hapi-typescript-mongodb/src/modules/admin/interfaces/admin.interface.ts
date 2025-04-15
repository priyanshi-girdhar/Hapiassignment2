export interface IAdmin {
    name: string;
    email: string;
    password: string;
    role: 'superadmin' | 'subadmin';
  }
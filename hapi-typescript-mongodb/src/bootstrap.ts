import { connectDB } from './config/db';
import { Server } from '@hapi/hapi';
import { AdminModel } from './modules/admin/models/admin.model';
import process from 'process';

export const bootstrap = async (server: Server) => {
  // Connect to database
  await connectDB();

  // Register super admin if not exists
  const superAdminEmail = process.env.SUPER_ADMIN_EMAIL;
  const superAdminPassword = process.env.SUPER_ADMIN_PASSWORD;

  const existingSuperAdmin = await AdminModel.findOne({ email: superAdminEmail });
  if (!existingSuperAdmin) {
    const superAdmin = new AdminModel({
      email: superAdminEmail,
      password: superAdminPassword, // In production, hash this password
      role: 'superadmin',
      name: 'Super Admin'
    });
    await superAdmin.save();
    console.log('Super Admin registered successfully');
  }
};
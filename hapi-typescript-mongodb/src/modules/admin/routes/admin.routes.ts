import { Server } from '@hapi/hapi';
import { AdminController } from '../controllers/admin.controller';

export const adminRoutes = (server: Server) => {
  server.route([
    {
      method: 'POST',
      path: '/sub-admins',
      handler: AdminController.createSubAdmin
    },
    {
      method: 'GET',
      path: '/sub-admins',
      handler: AdminController.listSubAdmins
    },
    {
      method: 'GET',
      path: '/sub-admins/{id}',
      handler: AdminController.viewSubAdmin
    },
    {
      method: 'PUT',
      path: '/sub-admins/{id}',
      handler: AdminController.editSubAdmin
    },
    {
      method: 'DELETE',
      path: '/sub-admins/{id}',
      handler: AdminController.deleteSubAdmin
    }
  ]);
};
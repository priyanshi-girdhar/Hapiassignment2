import { Request, ResponseToolkit } from '@hapi/hapi';
import { AdminModel } from '../models/admin.model';

export class AdminController {
  // Create sub-admin
  static async createSubAdmin(req: Request, h: ResponseToolkit) {
    const { name, email, password } = req.payload as any;
    const subAdmin = new AdminModel({
      name,
      email,
      password, // In production, hash this
      role: 'subadmin'
    });
    await subAdmin.save();
    return h.response({ message: 'Sub-admin created', data: subAdmin }).code(201);
  }

  // List all sub-admins
  static async listSubAdmins(req: Request, h: ResponseToolkit) {
    const subAdmins = await AdminModel.find({ role: 'subadmin' });
    return h.response({ data: subAdmins }).code(200);
  }

  // View sub-admin
  static async viewSubAdmin(req: Request, h: ResponseToolkit) {
    const subAdmin = await AdminModel.findById(req.params.id);
    if (!subAdmin || subAdmin.role !== 'subadmin') {
      return h.response({ message: 'Sub-admin not found' }).code(404);
    }
    return h.response({ data: subAdmin }).code(200);
  }

  // Edit sub-admin
  static async editSubAdmin(req: Request, h: ResponseToolkit) {
    const { name, email, password } = req.payload as any;
    const subAdmin = await AdminModel.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true }
    );
    if (!subAdmin || subAdmin.role !== 'subadmin') {
      return h.response({ message: 'Sub-admin not found' }).code(404);
    }
    return h.response({ message: 'Sub-admin updated', data: subAdmin }).code(200);
  }

  // Delete sub-admin
  static async deleteSubAdmin(req: Request, h: ResponseToolkit) {
    const subAdmin = await AdminModel.findByIdAndDelete(req.params.id);
    if (!subAdmin || subAdmin.role !== 'subadmin') {
      return h.response({ message: 'Sub-admin not found' }).code(404);
    }
    return h.response({ message: 'Sub-admin deleted' }).code(200);
  }
}
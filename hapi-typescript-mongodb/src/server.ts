import { Server } from '@hapi/hapi';
import dotenv from 'dotenv';
import { bootstrap } from './bootstrap';
import { adminRoutes } from './modules/admin/routes/admin.routes';
// import process from 'process';

dotenv.config();

const init = async () => {
  const server = new Server({
    port: process.env.PORT || 3000,
    host: 'localhost'
  });

  // Register routes
  adminRoutes(server);

  // Bootstrap the application
  await bootstrap(server);

  // Start the server
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err: any) => {
  console.error(err);
  process.exit(1);
});

init();
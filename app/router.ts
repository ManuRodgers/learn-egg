import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const forbidIP = app.middleware.forbidIP({ forbidIPs: ['192.168.0.0', '127.0.0.1'] }, app);
  router.get('/', forbidIP, controller.home.index);
  router.get('/test', controller.home.index);
};

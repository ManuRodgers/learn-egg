import { Application, Context } from 'egg';

export default (options, app: Application) => {
  console.log(options);
  console.log(app);
  if (options.forbidIPs) {
    const forbidIPs: string[] = options.forbidIPs;
    return async function forbidIP(ctx: Context, next) {
      console.log(ctx.request.ip);
      if (forbidIPs.indexOf(ctx.request.ip) > -1) {
        ctx.throw(403, 'your ip is blocked');
      } else {
        await next();
      }
    };
  } else {
    return async function forbidIP(ctx: Context, next) {
      console.log(ctx.request.ip);
      await next();
    };
  }
};

// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportForbidIP from '../../../app/middleware/forbidIP';

declare module 'egg' {
  interface IMiddleware {
    forbidIP: typeof ExportForbidIP;
  }
}

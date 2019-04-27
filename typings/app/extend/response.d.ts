// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExtendResponse from '../../../app/extend/response';
declare module 'egg' {
  type ExtendResponseType = typeof ExtendResponse;
  interface Response extends ExtendResponseType { }
}
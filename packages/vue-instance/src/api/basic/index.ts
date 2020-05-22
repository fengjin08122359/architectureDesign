import { VueLog } from './VueLog';
import { ErrorCode, EventDispatcher, Intercept } from '@mikefeng110808/instance';

export const log = new VueLog();

export const errorCode = new ErrorCode()

export const keyFrame = new EventDispatcher()

export const httpIntercept = new Intercept()

export const wsIntercept = new Intercept()

export const routerIntercept = new Intercept()


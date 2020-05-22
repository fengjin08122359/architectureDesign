
import { WebSocketInstance } from '.';
import { wsIntercept } from '../basic';

export class KeepAlive {
  pong: number;
  checkTime: number;
  reconnectTime: number;
  connnectNumber: number;
  connectLimit: number;
  keepAliveModel: boolean;
  interval: any;
  ws: WebSocketInstance;
  constructor(opt: {ws: WebSocketInstance}) {
    this.ws = opt.ws
    this.pong = 0
    this.checkTime=3
    this.reconnectTime=20
    this.connnectNumber=0
    this.connectLimit=1
    this.keepAliveModel=true
  }
  init () {
    this.pong = 0;
    this.connnectNumber = 0;
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.check();
    this.interval = setInterval(() => {
      this.check();
    }, this.checkTime * 1000);
  }
  setConnectLimit (data:number) {
    this.connectLimit = data
  }
  setPong () {
    this.connnectNumber = 0;
    this.pong = new Date().getTime();
  }
  check () {
    if (navigator && navigator.onLine == false) {
      this.endTimeout()
      return;
    }
    if (this.ws.isClosed()) {
      this.endTimeout()
      return
    }
    if (this.pong && new Date().getTime() - this.pong > this.reconnectTime * 1000) {
      this.endTimeout()
      return;
    }
  }
  endTimeout () {
    if (this.keepAliveModel) {
      this.end();
    }
    if (this.reconnect()) {
      return;
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
    wsIntercept.getIntercept('close', 'keepalive')
  }
  end () {
    this.ws.endClient()
  }
  reconnect () {
    var isReconnect = false;
    if (this.connnectNumber <= this.connectLimit) {
      isReconnect = true;
      if (this.ws.canReconnected()) {
        this.connnectNumber++;
      }
      wsIntercept.getIntercept('reconnect', 'keepalive')
    }
    return isReconnect;
  }
}